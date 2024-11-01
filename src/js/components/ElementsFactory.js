export default class ElementsFactory {
  static getBlockElement({
    elementTag,
    elementClass = false,
    elementContent = false,
    elementAttributes = false,
  }) {
    const element = document.createElement(elementTag);
    if (elementClass) {
      elementClass.forEach((item) => {
        element.classList.add(item);
      });
    }
    if (elementContent) {
      element.textContent = elementContent;
    }
    if (elementAttributes) {
      Object.keys(elementAttributes).forEach((key) => {
        element.setAttribute(key, elementAttributes[key]);
      });
    }
    return element;
  }

  static getSvgElement({
    svgAttributeViewBox,
    elementClass,
    elementAttributes,
  }) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add(elementClass);
    svg.setAttributeNS(null, 'viewBox', svgAttributeViewBox);
    Object.keys(elementAttributes).forEach((key) => {
      const path = document.createElementNS(svg.namespaceURI, 'path');
      path.setAttributeNS(null, key, elementAttributes[key]);
      svg.append(path);
    });
    return svg;
  }
}
