const generalFuncModule = (function () {
  const doc = document;
  const insertElement = function (
    elementType,
    elementClass,
    elementContent,
    elementParrent,
    elementImgSrc,
  ) {
    const element = doc.createElement(elementType);
    element.className = elementClass;
    element.textContent = elementContent;
    if (elementType === "img") {
      element.src = elementImgSrc;
    }
    elementParrent.appendChild(element);
    return element;
  };
  const clearDom = function (parrent, inputClass) {
    const elementArray = parrent.querySelectorAll(inputClass);
    for (let i = 0; i < elementArray.length; i++) {
      parrent.removeChild(elementArray[i]);
    }
  };

  const addDropDownMenu = function (element, button, menuClass, menuItemClass) {
    button.addEventListener("click", function () {
      showElements(element, menuClass, menuItemClass);
    });
  };
  const showElements = function (menu, menuActiveClass, menuActiveItemClass) {
    const menuList = menu.getElementsByTagName("ul")[0];
    const menuElements = menuList.getElementsByTagName("li");

    if (menuList.classList.contains(menuActiveClass) === false) {
      menuList.classList.add(menuActiveClass);
      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.add(menuActiveItemClass);
      }
    } else if (menuList.classList.contains(menuActiveClass) === true) {
      menuList.classList.remove(menuActiveClass);
      for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.remove(menuActiveItemClass);
      }
    }
  };

  return { insertElement, clearDom, addDropDownMenu };
})();

module.exports = generalFuncModule;
