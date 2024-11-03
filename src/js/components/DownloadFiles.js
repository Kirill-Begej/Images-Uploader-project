export default class DownloadFiles {
  constructor({ inputSelector }, regexpFormatFile, { enableValidation }) {
    this._input = document.querySelector(inputSelector);
    this._regexpFormatFile = regexpFormatFile;
    this._enableValidation = enableValidation;
  }

  enableDownloadFiles() {
    this._filesState = [];
    this._downloadFilesState = [];
    this.#changeInputHandler();
  }

  setFileState(filesState) {
    this._filesState = filesState;
  }

  #setDownloadFilesState(downloadFiles) {
    Object.keys(downloadFiles).forEach((key) => {
      this._downloadFilesState.push({
        name: downloadFiles[key].name,
        format: downloadFiles[key].name.match(this._regexpFormatFile)[1].toLowerCase(),
        size: downloadFiles[key].size,
        preview: URL.createObjectURL(downloadFiles[key]),
      });
    });
    this._enableValidation(this._filesState, this._downloadFilesState);
  }

  #changeInputHandler() {
    this._input.addEventListener('change', () => {
      this.#setDownloadFilesState(this._input.files);
      this._input.value = '';
      this._downloadFilesState = [];
    });
  }
}
