import 'css/pages/index.css';
import * as constants from 'js/utils/constants';
import RenderElements from 'js/components/RenderElements';
import ValidationFiles from 'js/components/ValidationFiles';
import DownloadFiles from 'js/components/DownloadFiles';

RenderElements.enableRenderForm(constants.formConfig);

const validator = new ValidationFiles(constants.validationConfig, constants.messageConfig);
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
      RenderElements.renderImagesItems(constants.formConfig, fileState);
      // eslint-disable-next-line no-console
      console.log(messageState);
    },
  },
);

downloadFiles.enableDownloadFiles();
