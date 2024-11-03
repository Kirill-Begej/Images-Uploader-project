import 'css/pages/index.css';
import * as constants from 'js/utils/constants';
import RenderElements from 'js/components/RenderElements';
import ValidationFiles from 'js/components/ValidationFiles';
import DownloadFiles from 'js/components/DownloadFiles';

const renderElements = new RenderElements();
renderElements.enableRenderForm(constants.formConfig);

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
        newFileState,
        renderFiles,
        messageState,
      } = validator.enableValidation(filesState, downloadFilesState);
      downloadFiles.setFileState(newFileState);
      if (!renderFiles.length && messageState.length) {
        messageState.forEach((messsage) => {
          renderElements.renderMessageAndImagesItems(
            constants.messageConfig,
            messsage,
            constants.messageType.error,
          );
        });
      }
      if (renderFiles.length) {
        renderElements.renderMessageAndImagesItems(
          constants.messageConfig,
          constants.messageTextConfig.download,
          constants.messageType.download,
          constants.formConfig,
          renderFiles,
        );
        messageState.forEach((messsage) => {
          renderElements.renderMessageAndImagesItems(
            constants.messageConfig,
            messsage,
            constants.messageType.error,
          );
        });
      }
    },
  },
);

downloadFiles.enableDownloadFiles();
