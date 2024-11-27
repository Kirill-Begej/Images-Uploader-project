import 'css/pages/index.css';
import * as constants from 'js/utils/constants';
import Api from 'js/components/Api';
import RenderElements from 'js/components/RenderElements';
import ValidationFiles from 'js/components/ValidationFiles';
import DownloadFiles from 'js/components/DownloadFiles';
import ItemsDragAndDrop from 'js/components/ItemsDragAndDrop';
import FileDragAndDrop from 'js/components/FileDragAndDrop';

const api = new Api(constants.baseUrl);
const itemsDragAndDrop = new ItemsDragAndDrop(constants.itemDnDConfig, {
  getFileState: () => downloadFiles.getFileState(),
  renderItems: (filesState) => {
    renderElements.removeAndRenderItems(filesState);
  },
  setFilesState: (filesState) => {
    downloadFiles.setFileState(filesState);
  },
});

const fileDragAndDrop = new FileDragAndDrop(constants.fileDnDConfig, {
  setFile: (files) => {
    downloadFiles.setDownloadFilesState(files);
    downloadFiles.resetInput();
  },
});

const renderElements = new RenderElements(constants.formConfig, {
  getIdElement: (id) => {
    const filesState = downloadFiles.setNewFileState(id);
    renderElements.removeAndRenderItems(filesState);
  },
  handleSubmit: () => {
    const files = downloadFiles.getFileState();
    const checkStatus = document.querySelectorAll(`.${constants.messageConfig.messageActiveSelector}`);
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
  itemDragEventListener: (imagesItem) => {
    itemsDragAndDrop.dragEventListener(imagesItem);
  },
  itemDragoverEventListener: (imagesContainer) => {
    itemsDragAndDrop.dragoverEventListener(imagesContainer);
  },
  itemDragenterEventListener: (imagesContainer) => {
    itemsDragAndDrop.dragenterEventListener(imagesContainer);
  },
  itemDropEventListener: (imagesContainer) => {
    itemsDragAndDrop.dropEventListener(imagesContainer);
  },
  fileDragenterEventListener: (filesContainer) => {
    fileDragAndDrop.dragenterEventListener(filesContainer);
  },
  fileDragleaveEventListener: (filesContainer) => {
    fileDragAndDrop.dragleaveEventListener(filesContainer);
  },
  fileDragoverEventListener: (filesContainer) => {
    fileDragAndDrop.dragoverEventListener(filesContainer);
  },
  fileDropEventListener: (filesContainer) => {
    fileDragAndDrop.dropEventListener(filesContainer);
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
