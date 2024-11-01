export default class DownloadFiles {
  constructor({ inputSelector }, regexpFormatFile, { enableValidation }) {
    this._input = document.querySelector(inputSelector);
    this._filesState = [];
    this._downloadFilesState = [];
    this._regexpFormatFile = regexpFormatFile;
    this._enableValidation = enableValidation;
  }

  enableDownloadFiles() {
    this._changeInputHandler();
  }

  setFileState(filesState) {
    this._filesState = filesState;
    // eslint-disable-next-line no-console
    console.log(this._filesState);
  }

  _setDownloadFilesState(downloadFiles) {
    Object.keys(downloadFiles).forEach((key) => {
      this._downloadFilesState.push({
        name: downloadFiles[key].name,
        format: downloadFiles[key].name.match(/\.([a-zA-Z]+)$/)[1].toLowerCase(),
        size: downloadFiles[key].size,
        preview: URL.createObjectURL(downloadFiles[key]),
      });
    });
    this._enableValidation(this._filesState, this._downloadFilesState);
  }

  _changeInputHandler() {
    this._input.addEventListener('change', () => {
      this._setDownloadFilesState(this._input.files);
      this._input.value = '';
      this._downloadFilesState = [];
    });
  }
}
