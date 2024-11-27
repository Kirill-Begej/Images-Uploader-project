export default class DownloadFiles {
  constructor({ inputSelector }, regexpFormatFile, { enableValidation }) {
    this._input = document.querySelector(inputSelector);
    this._regexpFormatFile = regexpFormatFile;
    this._enableValidation = enableValidation;
    this._id = 1;
  }

  enableDownloadFiles() {
    this._filesState = [];
    this._downloadFilesState = [];
    this.#changeInputHandler();
  }

  setFileState(filesState) {
    this._filesState = filesState;
  }

  setNewFileState(id) {
    const newState = this._filesState.filter((item) => item.id !== Number(id));
    this._filesState = newState;
    return this._filesState;
  }

  getFileState() {
    return this._filesState;
  }

  setDownloadFilesState(downloadFiles) {
    Object.keys(downloadFiles).forEach((key) => {
      this._downloadFilesState.push({
        id: this._id,
        name: downloadFiles[key].name,
        format: downloadFiles[key].name.match(this._regexpFormatFile)[1].toLowerCase(),
        size: downloadFiles[key].size,
        preview: URL.createObjectURL(downloadFiles[key]),
        file: downloadFiles[key],
      });
      this._id += 1;
    });
    this._enableValidation(this._filesState, this._downloadFilesState);
  }

  resetInput() {
    this._input.value = '';
    this._downloadFilesState = [];
  }

  #changeInputHandler() {
    this._input.addEventListener('change', () => {
      this.setDownloadFilesState(this._input.files);
      this._input.value = '';
      this._downloadFilesState = [];
    });
  }
}
