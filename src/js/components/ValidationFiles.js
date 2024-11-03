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
    this._downloadFilesState = null;
  }

  enableValidation(filesState, downloadFilesState) {
    this._filesState = filesState;
    this._messageState = [];
    const filesСheckedFormat = this.#checkFormatFile(downloadFilesState);
    const filesCheckedSize = this.#checkSizeFile(filesСheckedFormat);
    const filesCheckedDouble = this.#checkDoubleFiles(filesCheckedSize);
    const filesValidation = this.#checkAmountFiles(filesCheckedDouble);
    return {
      newFileState: this._filesState,
      renderFiles: filesValidation,
      messageState: this._messageState,
    };
  }

  #checkFormatFile(downloadFilesState) {
    const state = [];
    for (let i = 0; i < this._formatFiles.length; i += 1) {
      downloadFilesState.forEach((item) => {
        if (this._formatFiles[i] === item.format) {
          state.push(item);
        }
      });
    }
    if (state.length !== downloadFilesState.length) {
      for (let i = state.length; i < downloadFilesState.length; i += 1) {
        this._messageState.push(this._errorFormat);
      }
    }
    return state;
  }

  #checkSizeFile(downloadFilesState) {
    const state = [];
    downloadFilesState.forEach((item) => {
      if (item.size <= this._maxSizeFile) {
        state.push(item);
      }
    });
    if (state.length !== downloadFilesState.length) {
      for (let i = state.length; i < downloadFilesState.length; i += 1) {
        this._messageState.push(this._errorSize);
      }
    }
    return state;
  }

  #checkDoubleFiles(downloadFilesState) {
    const state = downloadFilesState;
    const doubleFile = [];
    for (let i = 0; i < this._filesState.length; i += 1) {
      state.forEach((item, j) => {
        if (this._filesState[i].name === item.name) {
          doubleFile.push(item);
          downloadFilesState.splice(j, 1);
        }
      });
    }
    if (doubleFile.length) {
      doubleFile.forEach((key) => {
        this._messageState.push(`Файл ${key.name} уже добавлен`);
      });
    }
    return downloadFilesState;
  }

  #checkAmountFiles(downloadFilesState) {
    const state = [];
    if (
      this._filesState.length < this._maxAmountFiles
      && downloadFilesState.length <= this._maxAmountFiles
      && (this._filesState.length + downloadFilesState.length) <= this._maxAmountFiles
    ) {
      downloadFilesState.forEach((item) => {
        state.push(item);
        this._filesState.push(item);
      });
    } else {
      for (let i = this._filesState.length; i < this._maxAmountFiles; i += 1) {
        const item = downloadFilesState.shift();
        state.push(item);
        this._filesState.push(item);
      }
      this._messageState.push(this._errorAmount);
    }
    return state;
  }
}
