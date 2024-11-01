import * as elementsData from 'js/utils/elementsData';
import ElementsFactory from 'js/components/ElementsFactory';

export default class RenderElements {
  static enableRenderForm({ formContainerSelector }) {
    const parentElement = document.querySelector(formContainerSelector);
    parentElement.append(
      this._renderTitle(),
      this._renderDescription(),
      this._renderForm(),
    );
  }

  static renderImagesItems(
    {
      formContainerSelector,
      uploadWindowSelector,
      imagesListSlector,
      uploadWindowHideSelector,
      imagesListShowSlector,
    },
    fileState,
  ) {
    const form = document.querySelector(formContainerSelector);
    const uploadWindow = form.querySelector(uploadWindowSelector);
    const imagesList = form.querySelector(imagesListSlector);
    if (!uploadWindow.classList.contains(uploadWindowHideSelector)) {
      uploadWindow.classList.add(uploadWindowHideSelector);
    }
    if (!imagesList.classList.contains(imagesListShowSlector)) {
      imagesList.classList.add(imagesListShowSlector);
    }
    fileState.forEach((obj) => {
      imagesList.append(this._renderItem(obj));
    });
  }

  static _renderTitle() {
    return ElementsFactory.getBlockElement(elementsData.titleData);
  }

  static _renderDescription() {
    return ElementsFactory.getBlockElement(elementsData.descriptionData);
  }

  static _renderForm() {
    const svgElement = ElementsFactory.getSvgElement(elementsData.svgUploadData);
    const uploadTextElement = ElementsFactory.getBlockElement(elementsData.uploadTextData);
    const uploadWindowElement = ElementsFactory.getBlockElement(elementsData.uploadWindowData);
    uploadWindowElement.append(svgElement, uploadTextElement);
    const imageListElement = ElementsFactory.getBlockElement(elementsData.imagesListData);
    const labelWindowElement = ElementsFactory.getBlockElement(elementsData.labelWindowData);
    labelWindowElement.append(uploadWindowElement, imageListElement);
    const inputElement = ElementsFactory.getBlockElement(elementsData.inputData);
    const spanElement = ElementsFactory.getBlockElement(elementsData.textData);
    const windowContainerElement = ElementsFactory.getBlockElement(
      elementsData.windowContainerData,
    );
    windowContainerElement.append(labelWindowElement, inputElement, spanElement);
    const buttonLabelElement = ElementsFactory.getBlockElement(elementsData.buttonLabelData);
    const buttonSubmitElement = ElementsFactory.getBlockElement(elementsData.buttonSubmitData);
    const buttonsContainerElement = ElementsFactory.getBlockElement(
      elementsData.buttonsContainerData,
    );
    buttonsContainerElement.append(buttonLabelElement, buttonSubmitElement);
    const formElement = ElementsFactory.getBlockElement(elementsData.formData);
    formElement.append(windowContainerElement, buttonsContainerElement);
    return formElement;
  }

  static _formatSizeItem(size) {
    const precision = 2;
    const units = ['Б', 'КБ', 'МБ'];
    const index = Math.floor(Math.log(size) / Math.log(1024));
    return `${(size / 1024 ** index).toFixed(precision)} ${units[index]}`;
  }

  static _renderItem({
    name,
    format,
    size,
    preview,
  }) {
    const svgElement = ElementsFactory.getSvgElement(elementsData.svgDeleteImageData);
    const buttonDeleteElement = ElementsFactory.getBlockElement(elementsData.buttonDeleteData);
    buttonDeleteElement.append(svgElement);
    const imagesNameElement = ElementsFactory.getBlockElement(elementsData.imagesNameData);
    imagesNameElement.textContent = name;
    const imagesFormatElement = ElementsFactory.getBlockElement(elementsData.imagesFormatData);
    imagesFormatElement.textContent = format;
    const imagesSizeElement = ElementsFactory.getBlockElement(elementsData.imagesSizeData);
    imagesSizeElement.textContent = this._formatSizeItem(size);
    const imagesPicElement = ElementsFactory.getBlockElement(elementsData.imagesPicData);
    imagesPicElement.src = preview;
    const imagesItemElement = ElementsFactory.getBlockElement(elementsData.imagesItemData);
    imagesItemElement.append(
      imagesNameElement,
      imagesFormatElement,
      imagesSizeElement,
      imagesPicElement,
      buttonDeleteElement,
    );
    return imagesItemElement;
  }
}
