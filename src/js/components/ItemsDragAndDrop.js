export default class ItemsDragAndDrop {
  constructor(
    {
      draggingSelector,
      imagesListSelector,
      imagesItem,
      imagesNotDraggingSelector,
      labelWindowWrapSelector,
      labelWindowWrapDisplayNoneSelector,
    },
    {
      getFileState,
      renderItems,
      setFilesState,
    },
  ) {
    this._draggingSelector = draggingSelector;
    this._imagesListSelector = imagesListSelector;
    this._imagesItem = imagesItem;
    this._imagesNotDraggingSelector = imagesNotDraggingSelector;
    this._labelWindowWrapSelector = labelWindowWrapSelector;
    this._labelWindowWrapDisplayNoneSelector = labelWindowWrapDisplayNoneSelector;
    this._getFileState = getFileState;
    this._renderItems = renderItems;
    this._setFilesState = setFilesState;
  }

  dragEventListener(element) {
    element.addEventListener('dragstart', () => {
      const labelWindowWrapElement = document.querySelector(this._labelWindowWrapSelector);
      setTimeout(() => {
        element.classList.add(this._draggingSelector);
        labelWindowWrapElement.classList.add(this._labelWindowWrapDisplayNoneSelector);
      }, 0);
    });
    element.addEventListener('dragend', () => {
      const labelWindowWrapElement = document.querySelector(this._labelWindowWrapSelector);
      element.classList.remove(this._draggingSelector);
      labelWindowWrapElement.classList.remove(this._labelWindowWrapDisplayNoneSelector);
    });
  }

  dragoverEventListener(container) {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
      const draggingElement = document.querySelector(`.${this._draggingSelector}`);
      const siblingsDraggingElement = [
        ...container.querySelectorAll(this._imagesNotDraggingSelector),
      ];
      const nextSibling = siblingsDraggingElement.find(
        (sibling) => e.clientY <= sibling.getBoundingClientRect().y + sibling.offsetHeight / 2,
      );
      if (draggingElement) {
        container.insertBefore(draggingElement, nextSibling);
      }
    });
  }

  dragenterEventListener(container) {
    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
    });
  }

  dropEventListener(container) {
    container.addEventListener('drop', (e) => {
      e.preventDefault();
      const imagesItems = [...container.querySelectorAll(this._imagesItem)];
      while (e.currentTarget.firstChild) {
        e.currentTarget.removeChild(e.currentTarget.firstChild);
      }
      const imagesItemsId = imagesItems.map((item) => item.getAttribute('data-item-id'));
      const filesState = this._getFileState();
      const newFilesState = [];
      imagesItemsId.forEach((id) => filesState.forEach((file) => {
        if (file.id === Number(id)) {
          newFilesState.push(file);
        }
      }));
      this._renderItems(newFilesState);
      this._setFilesState(newFilesState);
    });
  }
}
