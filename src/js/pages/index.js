import 'css/pages/index.css';
import * as constants from 'js/utils/constants';
import Api from 'js/components/Api';
import RenderElements from 'js/components/RenderElements';
import ValidationFiles from 'js/components/ValidationFiles';
import DownloadFiles from 'js/components/DownloadFiles';

const api = new Api(constants.baseUrl);

const renderElements = new RenderElements(constants.formConfig, {
  getIdElement: (id) => {
    const filesState = downloadFiles.setNewFileState(id);
    renderElements.removeAndRenderItems(filesState);
  },
  handleSubmit: () => {
    const files = downloadFiles.getFileState();
    const checkStatus = document.querySelectorAll(`.${constants.messageConfig.messageActiveSelector}`);
    // eslint-disable-next-line no-console
    console.log(checkStatus.length);
    if (files.length && !checkStatus.length) {
      renderElements.renderMessageAndImagesItems(
        constants.messageConfig,
        constants.messageTextConfig.upload,
        constants.messageType.upload,
        [],
        true,
      );
      api.sendFiles(files)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    } else if (checkStatus.length) {
      renderElements.renderMessageAndImagesItems(
        constants.messageConfig,
        constants.messageTextConfig.errorLoad,
        constants.messageType.error,
        [],
        true,
      );
    } else {
      renderElements.renderMessageAndImagesItems(
        constants.messageConfig,
        constants.messageTextConfig.errorUpload,
        constants.messageType.error,
        [],
        true,
      );
    }
  },
});
renderElements.enableRenderForm();

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
