import anime from "animejs";

export const sg_geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [103.59489440917969, 1.2715630876314767],
            [103.59077453613281, 1.2296876901489255],
            [103.58940124511719, 1.1987955811436186],
            [103.61618041992188, 1.1658436142465605],
            [103.64639282226562, 1.1356373055193174],
            [103.6834716796875, 1.1438754213781501],
            [103.73291015625, 1.1541730329228161],
            [103.77960205078125, 1.176141145843977],
            [103.85581970214844, 1.2029145493452873],
            [103.87195587158203, 1.2386120110295982],
            [103.89083862304688, 1.2712198493992468],
            [103.97666931152344, 1.2887249407943617],
            [104.02713775634766, 1.3038272759700005],
            [104.09065246582031, 1.334718132769963],
            [104.08035278320312, 1.3498201887565244],
            [104.08721923828125, 1.3807104645408492],
            [104.09271240234374, 1.4006173190275208],
            [104.07829284667969, 1.4308204986633148],
            [104.04945373535156, 1.4466083666436405],
            [104.0185546875, 1.4445490857204621],
            [103.99658203125, 1.425329040790274],
            [103.941650390625, 1.4294476354255539],
            [103.90731811523438, 1.4267019064882447],
            [103.87298583984375, 1.4514133481911609],
            [103.83316040039062, 1.474065265973824],
            [103.79745483398438, 1.4754381021049132],
            [103.75419616699219, 1.4493540716333067],
            [103.71299743652344, 1.4555318956783565],
            [103.67523193359375, 1.435625513519856],
            [103.65463256835938, 1.4019901993378632],
            [103.59489440917969, 1.2715630876314767],
          ],
        ],
      },
    },
  ],
};

const sections = document.querySelectorAll("section[id]");
export const navHighlighter = () => {
  // Get current scroll position
  let scrollY = document.getElementById("scroll-container").scrollTop;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const elementClasses = document.querySelector(
      ".nav a[href*=" + sectionId + "]"
    ).classList;
    const listClasses = document.querySelector(
      ".nav-list a[href*=" + sectionId + "]"
    ).classList;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      elementClasses.add("active-light");
      listClasses.add("active-light");
    } else {
      elementClasses.remove("active-light");
      listClasses.remove("active-light");
    }
  });
};

export const dragElement = (elmnt) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

const avatar = document.getElementById("avatar");
export const navAnimeRestore = anime({
  targets: "#navbar",
  translateX: [-avatar.offsetLeft - 128, 0],
  translateY: [256, 0],
  width: [0, "100%"],
  height: [0, 56],
  opacity: 1,
  autoplay: false,
  easing: "easeOutExpo",
  duration: 500,
  delay: 250,
});
export const navAnime = anime({
  targets: "#navbar",
  translateX: [0, -avatar.offsetLeft - 128],
  translateY: [0, 256],
  width: ["100%", 0],
  height: [56, 0],
  opacity: 0,
  autoplay: false,
  easing: "easeOutExpo",
  duration: 500,
});

const avatarOrigTopOffset = window.innerHeight / 2 - 64;
const avatarOrigLeftOffset = window.innerWidth / 4 - 64;
const avatarNewTopOffset = 64;
const avatarNewLeftOffset = 128;
const avatarCurrentTopOffset = avatar.offsetTop;
const avatarCurrentLeftOffset = avatar.offsetLeft;
const avatarAnimeRestore = anime({
  targets: "#avatar",
  top: [avatarCurrentTopOffset, avatarOrigTopOffset],
  left: [avatarCurrentLeftOffset, avatarOrigLeftOffset],
  autoplay: false,
  easing: "easeOutElastic(1, 1)",
  duration: 500,
});
const avatarAnime = anime({
  targets: "#avatar",
  top: [avatarCurrentTopOffset, avatarNewTopOffset],
  left: [avatarCurrentLeftOffset, avatarNewLeftOffset],
  autoplay: false,
  easing: "easeOutElastic(1, 1)",
  duration: 500,
});
export const navListAnimeRestore = anime({
  targets: ".nav-list .list-icon",
  translateX: [0, 100],
  opacity: [1, 0],
  delay: anime.stagger(30),
  duration: 250,
  autoplay: false,
  zIndex: [9999, -1],
});
let navListOpen = false;
export const navListAnime = anime({
  targets: ".nav-list .list-icon",
  translateX: [100, 0],
  opacity: [0, 1],
  delay: anime.stagger(100),
  duration: 500,
  autoplay: false,
  zIndex: [-1, 9999],
});
export const navAnimator = () => {
  let scrollY = document.getElementById("scroll-container").scrollTop;
  const nav = document.getElementById("navbar");
  if (
    scrollY !== 0 &&
    nav.style.transform === "translateX(0px) translateY(0px)"
  ) {
    navAnime.play();
    avatarAnime.play();
    navListAnime.play();
    navListOpen = true;
    // Fix animation playing twice when user over scrolls and it bounces back.
  } else if (
    scrollY === 0 &&
    Math.abs(
      Math.round(
        parseInt(
          window
            .getComputedStyle(nav)
            .transform.match(/matrix.*\((.+)\)/)[1]
            .split(", ")[4]
        )
      )
    ) !== 0
  ) {
    navListAnimeRestore.play();
    navListOpen = false;
    navAnimeRestore.play();
    avatarAnimeRestore.play();
  }
};

export const navListAnimator = (event) => {
  event.stopPropagation();
  if (navListOpen) {
    navListAnimeRestore.play();
    navListOpen = false;
  } else {
    navListAnime.play();
    navListOpen = true;
  }
};

export const mouseUpHandler = () => {
  if (!navListOpen) {
    navListAnime.play();
    navListOpen = true;
  }
};

export const mouseDownHandler = () => {
  if (navListOpen) {
    navListAnimeRestore.play();
    navListOpen = false;
  }
};