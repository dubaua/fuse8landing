// bind active class to links when scroll to section
var myElement = document.getElementById("main");

const sections = {
  main: {
    element: document.getElementById("main"),
    size: "tall"
  },
  programm: {
    element: document.getElementById("programm"),
    size: "short"
  },
  requirements: {
    element: document.getElementById("requirements"),
    size: "short"
  },
  about: {
    element: document.getElementById("about"),
    size: "short"
  },
  works: {
    element: document.getElementById("works"),
    size: "tall"
  },
  contact: {
    element: document.getElementById("contact"),
    size: "short"
  }
};

const links = {
  main: document.getElementById("main-link"),
  programm: document.getElementById("programm-link"),
  requirements: document.getElementById("requirements-link"),
  about: document.getElementById("about-link"),
  works: document.getElementById("works-link"),
  contact: document.getElementById("contact-link")
};

var doc = document.documentElement;

for (let section in sections) {
  let sectionWatcher = scrollMonitor.create(sections[section].element);
  if (sections[section].size === "tall") {
    sectionWatcher.enterViewport(function() {
      console.log(section, 'enterViewport');
      
      cleanLinks();
      addClassToElement(links[section], "menu__link--active");
    });
  } else {
    sectionWatcher.fullyEnterViewport (function() {
      console.log(section, 'fullyEnterViewport');
      
      cleanLinks();
      addClassToElement(links[section], "menu__link--active");
    });
  }
}

function cleanLinks() {
  for (let link in links) {
    removeClassFromElement(links[link], "menu__link--active");
  }
}

// smooth scroll on click anchor
var SmoothScroll = new SmoothScroll(".js-scroll");

// animate some elements on scroll
window.sr = ScrollReveal({
  scale: 1,
  duration: 200,
  viewFactor: 0.5,
  distance: "32px",
  origin: "bottom"
});

sr.reveal(".js-fade-left", { origin: "right", duration: 667, viewFactor: 0.2 });
sr.reveal(".js-fade-right", { origin: "left", duration: 667, viewFactor: 0.2 });
sr.reveal(".js-fade-up", { duration: 667 });
sr.reveal(".js-fade-up-sequenced-1", 333);
sr.reveal(".js-fade-up-sequenced-2", 200);
sr.reveal(".js-fade-up-sequenced-3", 133);
sr.reveal(".js-fade-up-sequenced-4", 250);
sr.reveal(".js-fade-up-sequenced-5", 333);
sr.reveal(".js-fade-up-sequenced-6", 333);

// utils
function addClassToElement(el, className) {
  if (el.classList) el.classList.add(className);
  else {
    el.className += " " + className;
  }
}

function removeClassFromElement(el, className) {
  if (el.classList) el.classList.remove(className);
  else {
    el.className = el.className.replace(
      new RegExp(`(^|\\b)${className.split(" ").join("|")}(\\b|$)`, "gi"),
      " "
    );
  }
}
