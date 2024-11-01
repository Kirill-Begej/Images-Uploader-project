export const formConfig = {
  formContainerSelector: '.uploader',
  inputSelector: '.uploader__input',
  uploadWindowSelector: '.uploader__upload-window',
  imagesListSlector: '.uploader__images-list',
  imagesItemSelector: '.uploader__images-item',
  uploadWindowHideSelector: 'uploader__upload-window_hide',
  imagesListShowSlector: 'uploader__images-list_show',
};

export const regexpFormatFile = /\.([a-zA-Z]+)$/;

export const validationConfig = {
  maxSizeFile: 1e7,
  maxAmountFiles: 5,
  formatFiles: ['jpg', 'jpeg', 'png'],
};

export const messageConfig = {
  errorSize: 'Превышен максимальный размер файла',
  errorAmount: 'Превышено допустимое количество файлов: 5',
  errorFormat: 'Неверный формат файла',
};
