/* eslint-disable arrow-body-style */
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

  #arrayComparison(downloadFiles, checkFiles) {
    return downloadFiles.filter((downloadFile) => {
      return !checkFiles.some((checkFile) => {
        return downloadFile.name === checkFile.name;
      });
    });
  }

  #checkFormatFile(downloadFilesState) {
    const state = [];
    this._formatFiles.forEach((format) => {
      downloadFilesState.forEach((item) => {
        if (format === item.format) {
          state.push(item);
        }
      });
    });
    const filesIncorrectFormat = this.#arrayComparison(downloadFilesState, state);
    filesIncorrectFormat.forEach((item) => {
      this._messageState.push({
        errorText: this._errorFormat,
        fileName: item.name,
      });
    });
    return state;
  }

  #checkSizeFile(downloadFilesState) {
    const state = [];
    downloadFilesState.forEach((item) => {
      if (item.size <= this._maxSizeFile) {
        state.push(item);
      }
    });
    const filesIncorrectSize = this.#arrayComparison(downloadFilesState, state);
    filesIncorrectSize.forEach((item) => {
      this._messageState.push({
        errorText: this._errorSize,
        fileName: item.name,
      });
    });
    return state;
  }

  #checkDoubleFiles(downloadFilesState) {
    const doubleFile = [];
    for (let i = 0; i < this._filesState.length; i += 1) {
      downloadFilesState.forEach((item) => {
        if (this._filesState[i].name === item.name) {
          doubleFile.push(item);
        }
      });
    }
    const state = this.#arrayComparison(downloadFilesState, doubleFile);
    if (doubleFile.length) {
      doubleFile.forEach((item) => {
        this._messageState.push({
          errorText: `Файл ${item.name} уже добавлен`,
          fileName: '',
        });
      });
    }
    return this._filesState.length ? state : downloadFilesState;
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
      this._messageState.push({
        errorText: this._errorAmount,
        fileName: '',
      });
    }
    return state;
  }
}
