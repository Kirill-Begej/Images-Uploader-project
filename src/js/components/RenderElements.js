import * as elementsData from 'js/utils/elementsData';
import ElementsFactory from 'js/components/ElementsFactory';

export default class RenderElements {
  static enableRender({ formContainer }) {
    const parentElement = document.querySelector(formContainer);
    parentElement.append(
      this._renderTitle(),
      this._renderDescription(),
      this._renderForm(),
    );
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
}
