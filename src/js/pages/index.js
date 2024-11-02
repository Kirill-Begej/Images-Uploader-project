import 'css/pages/index.css';
import * as constants from 'js/utils/constants';
import RenderElements from 'js/components/RenderElements';
import ValidationFiles from 'js/components/ValidationFiles';
import DownloadFiles from 'js/components/DownloadFiles';

const appDelay = new Promise((res) => {
  setTimeout(() => {
    res();
  }, constants.delay);
});

RenderElements.enableRenderForm(constants.formConfig);

const validator = new ValidationFiles(
  constants.validationConfig,
  constants.messageTextConfig,
);
const downloadFiles = new DownloadFiles(
  constants.formConfig,
  constants.regexpFormatFile,
  {
    enableValidation: (filesState, downloadFilesState) => {
      const {
        fileState,
        messageState,
      } = validator.enableValidation(filesState, downloadFilesState);
      downloadFiles.setFileState(fileState);
      RenderElements.renderMessage(
        constants.messageConfig,
        constants.messageTextConfig.download,
        constants.messageType.download,
      );
      if (fileState.length) {
        appDelay
          .then(() => {
            RenderElements.renderImagesItems(constants.formConfig, fileState);
            if (messageState.length) {
              RenderElements.renderMessage(
                constants.messageConfig,
                constants.messageTextConfig.download,
                constants.messageType.error,
              );
            }
          });
      }
    },
  },
);

downloadFiles.enableDownloadFiles();
