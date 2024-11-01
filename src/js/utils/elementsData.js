export const titleData = {
  elementTag: 'h1',
  elementClass: ['uploader__title'],
  elementContent: 'Удобное приложение для\u00A0загрузки\u00A0изображений',
};

export const descriptionData = {
  elementTag: 'p',
  elementClass: ['uploader__desc'],
  elementContent: 'В форме ниже вы можете загрузить до 5 файлов формата JPG, JPEG, PNG. Максимальный размер каждого файла до 10 Мб.',
};

export const uploadWindowData = {
  elementTag: 'div',
  elementClass: ['uploader__upload-window'],
};

export const svgUploadData = {
  svgAttributeViewBox: '0 0 24 24',
  elementClass: ['uploader__upload-image'],
  elementAttributes: {
    d: 'M5.75 15C5.75 14.5858 5.41421 14.25 5 14.25C4.58579 14.25 4.25 14.5858 4.25 15H5.75ZM5 16H4.25H5ZM19.75 15C19.75 14.5858 19.4142 14.25 19 14.25C18.5858 14.25 18.25 14.5858 18.25 15H19.75ZM12.5857 5.46852C12.8444 5.14507 12.792 4.67311 12.4685 4.41435C12.1451 4.15559 11.6731 4.20803 11.4143 4.53148L12.5857 5.46852ZM7.41435 9.53148C7.15559 9.85493 7.20803 10.3269 7.53148 10.5857C7.85493 10.8444 8.32689 10.792 8.58565 10.4685L7.41435 9.53148ZM12.5857 4.53148C12.3269 4.20803 11.8549 4.15559 11.5315 4.41435C11.208 4.67311 11.1556 5.14507 11.4143 5.46852L12.5857 4.53148ZM15.4143 10.4685C15.6731 10.792 16.1451 10.8444 16.4685 10.5857C16.792 10.3269 16.8444 9.85493 16.5857 9.53148L15.4143 10.4685ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5H12.75ZM11.25 16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM4.25 15V16H5.75V15H4.25ZM4.25 16C4.25 18.0711 5.92893 19.75 8 19.75V18.25C6.75736 18.25 5.75 17.2426 5.75 16H4.25ZM8 19.75H16V18.25H8V19.75ZM16 19.75C18.0711 19.75 19.75 18.0711 19.75 16H18.25C18.25 17.2426 17.2426 18.25 16 18.25V19.75ZM19.75 16V15H18.25V16H19.75ZM11.4143 4.53148L7.41435 9.53148L8.58565 10.4685L12.5857 5.46852L11.4143 4.53148ZM11.4143 5.46852L15.4143 10.4685L16.5857 9.53148L12.5857 4.53148L11.4143 5.46852ZM11.25 5V16H12.75V5H11.25Z',
  },
};

export const uploadTextData = {
  elementTag: 'div',
  elementClass: ['uploader__upload-text'],
  elementContent: 'Добавьте файлы для загрузки',
};

export const imagesListData = {
  elementTag: 'ul',
  elementClass: ['uploader__images-list'],
};

export const labelWindowData = {
  elementTag: 'label',
  elementClass: ['uploader__label-window'],
  elementAttributes: {
    for: 'file',
  },
};

export const inputData = {
  elementTag: 'input',
  elementClass: ['uploader__input'],
  elementAttributes: {
    id: 'file',
    type: 'file',
    accept: '.png, .jpg, .jpeg',
    multiple: true,
  },
};

export const textData = {
  elementTag: 'span',
  elementClass: ['uploader__text'],
  elementContent: 'Вы можете загрузить до 5 файлов JPG, JPEG, PNG, размер одного — до 10 МБ',
};

export const windowContainerData = {
  elementTag: 'div',
  elementClass: ['uploader__window-container'],
};

export const buttonLabelData = {
  elementTag: 'label',
  elementClass: ['button', 'button_type_label'],
  elementContent: 'Выберите файлы',
  elementAttributes: {
    for: 'file',
  },
};

export const buttonSubmitData = {
  elementTag: 'button',
  elementClass: ['button', 'button_type_submit'],
  elementContent: 'Загрузите файлы',
  elementAttributes: {
    type: 'submit',
  },
};

export const buttonsContainerData = {
  elementTag: 'div',
  elementClass: ['uploader__buttons-container'],
};

export const formData = {
  elementTag: 'form',
  elementClass: ['uploader__form'],
  elementAttributes: {
    name: 'uploaderForm',
    novalidate: true,
  },
};
