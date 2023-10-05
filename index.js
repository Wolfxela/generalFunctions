const makeDropDown = (function () {

    const testing = function(){console.log("test")}
  const addMenu = function (element, button, menuClass, menuItemClass) {
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
  return { addMenu, testing };
})();

module.exports = makeDropDown;
