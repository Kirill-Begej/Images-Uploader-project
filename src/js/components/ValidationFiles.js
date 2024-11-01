export default class ValidationFiles {
  constructor({
    maxSizeFile,
    maxAmountFiles,
    formatFiles,
  }, {
    errorSize,
    errorAmount,
    errorFormat,
  }) {
    this._maxSizeFile = maxSizeFile;
    this._maxAmountFiles = maxAmountFiles;
    this._formatFiles = formatFiles;
    this._errorSize = errorSize;
    this._errorAmount = errorAmount;
    this._errorFormat = errorFormat;
    this._fileState = null;
    this._downloadFilesState = null;
    this._messageState = null;
  }

  enableValidation(filesState, downloadFilesState) {
    this._fileState = filesState;
    this._downloadFilesState = downloadFilesState;
    this._messageState = [];
    this._checkFormatFile(this._downloadFilesState);
    this._checkSizeFile(this._fileState);
    return { fileState: this._fileState, messageState: this._messageState };
  }

  _checkFormatFile(downloadFilesState) {
    const state = [];
    for (let i = 0; i < this._formatFiles.length; i += 1) {
      Object.keys(downloadFilesState).forEach((key) => {
        if (this._formatFiles[i] === downloadFilesState[key].format) {
          state.push(downloadFilesState[key]);
        }
      });
    }
    if (state.length !== downloadFilesState.length) {
      this._messageState.push(this._errorFormat);
    }
    this._fileState = state;
  }

  _checkSizeFile(downloadFilesState) {
    const state = [];
    Object.keys(downloadFilesState).forEach((key) => {
      if (downloadFilesState[key].size <= this._maxSizeFile) {
        state.push(downloadFilesState[key]);
      }
    });
    if (state.length !== downloadFilesState.length) {
      this._messageState.push(this._errorSize);
    }
    this._fileState = state;
  }
}
