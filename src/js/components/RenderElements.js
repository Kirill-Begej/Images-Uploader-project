import * as elementsData from 'js/utils/elementsData';
import ElementsFactory from 'js/components/ElementsFactory';

export default class RenderElements {
  constructor({
    formContainerSelector,
    labelWindowSelector,
    inputSelector,
    uploadWindowSelector,
    imagesListSlector,
    imagesItemSelector,
    uploadWindowHideSelector,
    imagesListShowSlector,
  }, { getIdElement }) {
    this._formContainerSelector = formContainerSelector;
    this._labelWindowSelector = labelWindowSelector;
    this._inputSelector = inputSelector;
    this._uploadWindowSelector = uploadWindowSelector;
    this._imagesListSlector = imagesListSlector;
    this._imagesItemSelector = imagesItemSelector;
    this._uploadWindowHideSelector = uploadWindowHideSelector;
    this._imagesListShowSlector = imagesListShowSlector;
    this._getIdElement = getIdElement;
  }

  enableRenderForm() {
    const parentElement = document.querySelector(this._formContainerSelector);
    parentElement.append(
      this.#renderTitle(),
      this.#renderDescription(),
      this.#renderForm(),
    );
  }

  renderMessageAndImagesItems(
    {
      messageSelector,
      messageActiveSelector,
    },
    text,
    type,
    renderItems = [],
  ) {
    const messageElement = document.querySelector(messageSelector);
    const messageContainerElement = ElementsFactory.getBlockElement(
      elementsData.messageContainerData,
    );
    messageContainerElement.classList.add(type);
    messageContainerElement.classList.add(messageActiveSelector);
    const messageTextElement = ElementsFactory.getBlockElement(elementsData.messageTextData);
    if (renderItems.length) {
      messageTextElement.textContent = text;
    } else {
      messageTextElement.textContent = text.errorText;
    }
    const messageListElement = ElementsFactory.getBlockElement(elementsData.messageListData);
    if (renderItems.length) {
      renderItems.forEach((item) => {
        const messageItemElement = ElementsFactory.getBlockElement(elementsData.messageItemData);
        messageItemElement.textContent = item.name;
        messageListElement.append(messageItemElement);
      });
    } else {
      const messageItemElement = ElementsFactory.getBlockElement(elementsData.messageItemData);
      messageItemElement.textContent = text.fileName;
      messageListElement.append(messageItemElement);
    }
    const messageProgressBarLineElement = ElementsFactory.getBlockElement(
      elementsData.messageProgressBarLineData,
    );
    const messageProgressBarElement = ElementsFactory.getBlockElement(
      elementsData.messageProgressBarData,
    );
    messageProgressBarElement.append(messageProgressBarLineElement);
    messageContainerElement.append(
      messageTextElement,
      messageListElement,
      messageProgressBarElement,
    );
    messageElement.append(messageContainerElement);
    if (renderItems.length) {
      this.#removeMessageAndRenderImagesItems(messageContainerElement, renderItems);
    } else {
      this.#removeMessage(messageContainerElement);
    }
  }

  removeAndRenderItems(filesState) {
    const imagesList = document.querySelector(this._imagesListSlector);
    while (imagesList.firstChild) {
      imagesList.removeChild(imagesList.firstChild);
    }
    filesState.forEach((obj) => {
      imagesList.append(this.#renderItem(obj));
    });
    if (!filesState.length) {
      this.#imagesListHideAndUploadWindowShow();
    }
  }

  #imagesListHideAndUploadWindowShow() {
    const form = document.querySelector(this._formContainerSelector);
    const uploadWindow = form.querySelector(this._uploadWindowSelector);
    const imagesList = form.querySelector(this._imagesListSlector);
    uploadWindow.classList.remove(this._uploadWindowHideSelector);
    imagesList.classList.remove(this._imagesListShowSlector);
  }

  #renderImagesItems(filesState) {
    const form = document.querySelector(this._formContainerSelector);
    const uploadWindow = form.querySelector(this._uploadWindowSelector);
    const imagesList = form.querySelector(this._imagesListSlector);
    uploadWindow.classList.add(this._uploadWindowHideSelector);
    imagesList.classList.add(this._imagesListShowSlector);
    filesState.forEach((obj) => {
      imagesList.append(this.#renderItem(obj));
    });
  }

  #removeMessage(messageContainerElement) {
    messageContainerElement.addEventListener('animationend', () => {
      messageContainerElement.remove();
    });
  }

  #removeMessageAndRenderImagesItems(messageContainerElement, renderItems) {
    messageContainerElement.addEventListener('animationend', () => {
      messageContainerElement.remove();
      this.#renderImagesItems(renderItems);
    });
  }

  #renderTitle() {
    return ElementsFactory.getBlockElement(elementsData.titleData);
  }

  #renderDescription() {
    return ElementsFactory.getBlockElement(elementsData.descriptionData);
  }

  #renderForm() {
    const svgElement = ElementsFactory.getSvgElement(elementsData.svgUploadData);
    const uploadTextElement = ElementsFactory.getBlockElement(elementsData.uploadTextData);
    const uploadWindowElement = ElementsFactory.getBlockElement(elementsData.uploadWindowData);
    uploadWindowElement.append(svgElement, uploadTextElement);
    const imageListElement = ElementsFactory.getBlockElement(elementsData.imagesListData);
    const inputElement = ElementsFactory.getBlockElement(elementsData.inputData);
    const labelWindowElement = ElementsFactory.getBlockElement(elementsData.labelWindowData);
    labelWindowElement.addEventListener('click', () => {
      inputElement.click();
    });
    labelWindowElement.append(uploadWindowElement, imageListElement);
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

  #formatSizeItem(size) {
    const precision = 2;
    const units = ['Б', 'КБ', 'МБ'];
    const index = Math.floor(Math.log(size) / Math.log(1024));
    return `${(size / 1024 ** index).toFixed(precision)} ${units[index]}`;
  }

  #renderItem({
    id,
    name,
    format,
    size,
    preview,
  }) {
    const svgElement = ElementsFactory.getSvgElement(elementsData.svgDeleteImageData);
    const buttonDeleteElement = ElementsFactory.getBlockElement(elementsData.buttonDeleteData);
    buttonDeleteElement.dataset.itemId = id;
    buttonDeleteElement.append(svgElement);
    buttonDeleteElement.addEventListener('click', (e) => {
      e.stopPropagation();
      this._getIdElement(e.currentTarget.getAttribute('data-item-id'));
    });
    const imagesNameElement = ElementsFactory.getBlockElement(elementsData.imagesNameData);
    imagesNameElement.textContent = name;
    const imagesFormatElement = ElementsFactory.getBlockElement(elementsData.imagesFormatData);
    imagesFormatElement.textContent = format;
    const imagesSizeElement = ElementsFactory.getBlockElement(elementsData.imagesSizeData);
    imagesSizeElement.textContent = this.#formatSizeItem(size);
    const imagesPicElement = ElementsFactory.getBlockElement(elementsData.imagesPicData);
    imagesPicElement.src = preview;
    const imagesItemElement = ElementsFactory.getBlockElement(elementsData.imagesItemData);
    imagesItemElement.dataset.itemId = id;
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
