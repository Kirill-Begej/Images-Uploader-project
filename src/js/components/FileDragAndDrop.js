export default class FileDragAndDrop {
  constructor({
    labelWindowSelector,
    labelWindowDragenterSelector,
    labelWindowWrapActiveSelector,
  }, { setFile }) {
    this._labelWindow = labelWindowSelector;
    this._labelWindowDragenterSelector = labelWindowDragenterSelector;
    this._labelWindowWrapActiveSelector = labelWindowWrapActiveSelector;
    this._setFile = setFile;
  }

  dragenterEventListener(container) {
    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
      document.querySelector(this._labelWindow).classList.add(this._labelWindowDragenterSelector);
      e.currentTarget.classList.add(this._labelWindowWrapActiveSelector);
    });
  }

  dragleaveEventListener(container) {
    container.addEventListener('dragleave', (e) => {
      e.preventDefault();
      document.querySelector(this._labelWindow).classList.remove(
        this._labelWindowDragenterSelector,
      );
      e.currentTarget.classList.remove(this._labelWindowWrapActiveSelector);
    });
  }

  dragoverEventListener(container) {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  }

  dropEventListener(container) {
    container.addEventListener('drop', (e) => {
      e.preventDefault();
      document.querySelector(this._labelWindow).classList.remove(
        this._labelWindowDragenterSelector,
      );
      e.currentTarget.classList.remove(this._labelWindowWrapActiveSelector);
      const files = e.dataTransfer?.files;
      this._setFile(files);
    });
  }
}
