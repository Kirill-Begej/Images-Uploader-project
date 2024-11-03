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
  elementAttributes: [{
    d: 'M5.75 15C5.75 14.5858 5.41421 14.25 5 14.25C4.58579 14.25 4.25 14.5858 4.25 15H5.75ZM5 16H4.25H5ZM19.75 15C19.75 14.5858 19.4142 14.25 19 14.25C18.5858 14.25 18.25 14.5858 18.25 15H19.75ZM12.5857 5.46852C12.8444 5.14507 12.792 4.67311 12.4685 4.41435C12.1451 4.15559 11.6731 4.20803 11.4143 4.53148L12.5857 5.46852ZM7.41435 9.53148C7.15559 9.85493 7.20803 10.3269 7.53148 10.5857C7.85493 10.8444 8.32689 10.792 8.58565 10.4685L7.41435 9.53148ZM12.5857 4.53148C12.3269 4.20803 11.8549 4.15559 11.5315 4.41435C11.208 4.67311 11.1556 5.14507 11.4143 5.46852L12.5857 4.53148ZM15.4143 10.4685C15.6731 10.792 16.1451 10.8444 16.4685 10.5857C16.792 10.3269 16.8444 9.85493 16.5857 9.53148L15.4143 10.4685ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5H12.75ZM11.25 16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM4.25 15V16H5.75V15H4.25ZM4.25 16C4.25 18.0711 5.92893 19.75 8 19.75V18.25C6.75736 18.25 5.75 17.2426 5.75 16H4.25ZM8 19.75H16V18.25H8V19.75ZM16 19.75C18.0711 19.75 19.75 18.0711 19.75 16H18.25C18.25 17.2426 17.2426 18.25 16 18.25V19.75ZM19.75 16V15H18.25V16H19.75ZM11.4143 4.53148L7.41435 9.53148L8.58565 10.4685L12.5857 5.46852L11.4143 4.53148ZM11.4143 5.46852L15.4143 10.4685L16.5857 9.53148L12.5857 4.53148L11.4143 5.46852ZM11.25 5V16H12.75V5H11.25Z',
  }],
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
  elementTag: 'div',
  elementClass: ['uploader__label-window'],
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

export const messageContainerData = {
  elementTag: 'li',
  elementClass: ['message__container'],
};

export const messageListData = {
  elementTag: 'ul',
  elementClass: ['message__list'],
};

export const messageItemData = {
  elementTag: 'li',
  elementClass: ['message__item'],
};

export const messageTextData = {
  elementTag: 'div',
  elementClass: ['message__text'],
};

export const messageProgressBarData = {
  elementTag: 'div',
  elementClass: ['message__progress-bar'],
};
export const messageProgressBarLineData = {
  elementTag: 'div',
  elementClass: ['message__progress-bar-line'],
};

export const svgDeleteImageData = {
  svgAttributeViewBox: '0 0 24 24',
  elementClass: ['button__delete-image'],
  elementAttributes: [
    {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M15 7.00008L14.894 6.78908C14.3459 5.69263 13.2253 5 11.9995 5C10.7737 5 9.6531 5.69263 9.105 6.78908L9 7.00008H15Z',
      'stroke-width': '1.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    {
      d: 'M10.8633 11.8028C10.5704 11.5099 10.0956 11.5099 9.80267 11.8028C9.50978 12.0957 9.50978 12.5706 9.80267 12.8635L10.8633 11.8028ZM11.4697 14.5305C11.7626 14.8233 12.2374 14.8233 12.5303 14.5305C12.8232 14.2376 12.8232 13.7627 12.5303 13.4698L11.4697 14.5305ZM9.80267 15.1368C9.50978 15.4297 9.50978 15.9046 9.80267 16.1975C10.0956 16.4903 10.5704 16.4903 10.8633 16.1975L9.80267 15.1368ZM12.5303 14.5305C12.8232 14.2376 12.8232 13.7627 12.5303 13.4698C12.2374 13.1769 11.7626 13.1769 11.4697 13.4698L12.5303 14.5305ZM14.1973 12.8635C14.4902 12.5706 14.4902 12.0957 14.1973 11.8028C13.9044 11.5099 13.4296 11.5099 13.1367 11.8028L14.1973 12.8635ZM11.4697 13.4698C11.1768 13.7627 11.1768 14.2376 11.4697 14.5305C11.7626 14.8233 12.2374 14.8233 12.5303 14.5305L11.4697 13.4698ZM13.1367 16.1975C13.4296 16.4903 13.9044 16.4903 14.1973 16.1975C14.4902 15.9046 14.4902 15.4297 14.1973 15.1368L13.1367 16.1975ZM12.5303 13.4698C12.2374 13.1769 11.7626 13.1769 11.4697 13.4698C11.1768 13.7627 11.1768 14.2376 11.4697 14.5305L12.5303 13.4698ZM17 7.75012C17.4142 7.75012 17.75 7.41434 17.75 7.00012C17.75 6.58591 17.4142 6.25012 17 6.25012V7.75012ZM15 6.25012C14.5858 6.25012 14.25 6.58591 14.25 7.00012C14.25 7.41434 14.5858 7.75012 15 7.75012V6.25012ZM7 6.25012C6.58579 6.25012 6.25 6.58591 6.25 7.00012C6.25 7.41434 6.58579 7.75012 7 7.75012V6.25012ZM9 7.75012C9.41421 7.75012 9.75 7.41434 9.75 7.00012C9.75 6.58591 9.41421 6.25012 9 6.25012V7.75012ZM7.73223 18.2679L7.2019 18.7982L7.2019 18.7982L7.73223 18.2679ZM7 16.5001H7.75H7ZM9.80267 12.8635L11.4697 14.5305L12.5303 13.4698L10.8633 11.8028L9.80267 12.8635ZM10.8633 16.1975L12.5303 14.5305L11.4697 13.4698L9.80267 15.1368L10.8633 16.1975ZM13.1367 11.8028L11.4697 13.4698L12.5303 14.5305L14.1973 12.8635L13.1367 11.8028ZM14.1973 15.1368L12.5303 13.4698L11.4697 14.5305L13.1367 16.1975L14.1973 15.1368ZM17 6.25012H15V7.75012H17V6.25012ZM7 7.75012H9V6.25012H7V7.75012ZM7.833 9.75012H16.167V8.25012H7.833V9.75012ZM16.167 9.75012C16.2128 9.75012 16.25 9.78728 16.25 9.83312H17.75C17.75 8.95886 17.0413 8.25012 16.167 8.25012V9.75012ZM16.25 9.83312V16.5001H17.75V9.83312H16.25ZM16.25 16.5001C16.25 17.4666 15.4665 18.2501 14.5 18.2501V19.7501C16.2949 19.7501 17.75 18.295 17.75 16.5001H16.25ZM14.5 18.2501H9.5V19.7501H14.5V18.2501ZM9.5 18.2501C9.03587 18.2501 8.59075 18.0657 8.26256 17.7376L7.2019 18.7982C7.8114 19.4077 8.63805 19.7501 9.5 19.7501V18.2501ZM8.26256 17.7376C7.93437 17.4094 7.75 16.9643 7.75 16.5001H6.25C6.25 17.3621 6.59241 18.1887 7.2019 18.7982L8.26256 17.7376ZM7.75 16.5001V9.83312H6.25V16.5001H7.75ZM7.75 9.83312C7.75 9.78728 7.78716 9.75012 7.833 9.75012V8.25012C6.95873 8.25012 6.25 8.95886 6.25 9.83312H7.75Z',
    },
  ],
};

export const buttonDeleteData = {
  elementTag: 'button',
  elementClass: [
    'button',
    'button_type_image-delete',
    'uploader__images-delete-button',
  ],
  elementAttributes: {
    type: 'button',
  },
};

export const imagesNameData = {
  elementTag: 'span',
  elementClass: ['uploader__images-name'],
};

export const imagesFormatData = {
  elementTag: 'span',
  elementClass: ['uploader__images-format'],
};

export const imagesSizeData = {
  elementTag: 'span',
  elementClass: ['uploader__images-size'],
};

export const imagesPicData = {
  elementTag: 'img',
  elementClass: ['uploader__images-pic'],
  elementAttributes: {
    alt: 'Превью загруженного изображения.',
  },
};

export const imagesItemData = {
  elementTag: 'li',
  elementClass: ['uploader__images-item'],
};
