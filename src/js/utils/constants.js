export const formConfig = {
  formContainerSelector: '.uploader',
  labelWindowSelector: '.uploader__label-window',
  inputSelector: '.uploader__input',
  uploadWindowSelector: '.uploader__upload-window',
  imagesListSlector: '.uploader__images-list',
  imagesItemSelector: '.uploader__images-item',
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
  errorSize: 'Превышен максимальный размер файла',
  errorAmount: `Превышено допустимое количество файлов: ${validationConfig.maxAmountFiles}`,
  errorFormat: 'Неверный формат файла',
};

export const messageType = {
  download: 'message__container_type_download',
  error: 'message__container_type_error',
};

export const delay = 9000;
