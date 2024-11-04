export const formConfig = {
  formContainerSelector: '.uploader',
  labelWindowSelector: '.uploader__label-window',
  inputSelector: '.uploader__input',
  uploadWindowSelector: '.uploader__upload-window',
  imagesListSlector: '.uploader__images-list',
  imagesItemSelector: '.uploader__images-item',
  buttonSubmitSelector: 'button_type_submit',
  uploadWindowHideSelector: 'uploader__upload-window_hide',
  imagesListShowSlector: 'uploader__images-list_show',
};

export const regexpFormatFile = /(?:\.([^.]+))?$/;

export const validationConfig = {
  maxSizeFile: 1e7,
  maxAmountFiles: 5,
  formatFiles: ['jpg', 'jpeg', 'png'],
};

export const messageConfig = {
  messageSelector: '.message',
  messageActiveSelector: 'message__container_active',
};

export const messageTextConfig = {
  download: 'Загрузка файлов...',
  upload: 'Загрузка файлов на сервер...',
  errorSize: 'Превышен максимальный размер файла',
  errorAmount: `Превышено допустимое количество файлов: ${validationConfig.maxAmountFiles}`,
  errorFormat: 'Неверный формат файла',
  errorUpload: 'Добавьте файлы для загрузки на сервер',
  errorLoad: 'Дождитесь загрузки файлов',
};

export const messageType = {
  download: 'message__container_type_download',
  upload: 'message__container_type_upload',
  error: 'message__container_type_error',
};

export const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export const itemDnDConfig = {
  draggingSelector: 'uploader__images-item_dragging',
  imagesListSelector: '.uploader__images-list',
  imagesItem: '.uploader__images-item',
  imagesNotDraggingSelector: '.uploader__images-item:not(.uploader__images-item_dragging)',
};
