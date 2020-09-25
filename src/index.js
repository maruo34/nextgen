import Main from "./main";

const findParentMenu = (target) => {
  const menu = target.getAttribute("data-menu");

  if (!menu) return findParentMenu(target.parentNode);

  return [target, menu];
};

document.addEventListener("DOMContentLoaded", () => {
  const $menu = document.getElementById("menu__container");
  const $loader = document.getElementById("loader");

  new Main({
    fps: 30,
    width: window.innerWidth,
    height: window.innerHeight,
    background: "#1b1b1b",
  }).then((instance) => instance.run());

  $menu.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const [node, menu] = findParentMenu(event.target.parentNode);
    }
  });
});
