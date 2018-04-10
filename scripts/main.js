// bind active class to links when scroll to section

const isDesktop = window.innerWidth >= 960;

console.log(isDesktop);

if (isDesktop) {
  const sections = {
    main: {
      element: document.getElementById("main"),
      top: 0,
      bottom: 0,
      link: document.getElementById("main-link")
    },
    programm: {
      element: document.getElementById("programm"),
      top: 0,
      bottom: 0,
      link: document.getElementById("programm-link")
    },
    requirements: {
      element: document.getElementById("requirements"),
      top: 0,
      bottom: 0,
      link: document.getElementById("requirements-link")
    },
    about: {
      element: document.getElementById("about"),
      top: 0,
      bottom: 0,
      link: document.getElementById("about-link")
    },
    works: {
      element: document.getElementById("works"),
      top: 0,
      bottom: 0,
      link: document.getElementById("works-link")
    },
    contact: {
      element: document.getElementById("contact"),
      top: 0,
      bottom: 0,
      link: document.getElementById("contact-link")
    }
  };

  var clientHeight = window.innerHeight;
  var lastScrollPosition = 0;
  var ticking = false;

  function setOffsets() {
    for (let section in sections) {
      const top = sections[section].element.getBoundingClientRect().top;
      sections[section].top = top;
      sections[section].bottom = top + sections[section].element.offsetHeight;
    }
  }

  function processLinks(scrollPosition) {
    for (let section in sections) {
      const top = Math.floor(sections[section].top);
      const bottom = Math.ceil(sections[section].bottom);
      const position = scrollPosition + clientHeight / 2;
      if (top <= position && position < bottom) {
        addClassToElement(sections[section].link, "menu__link--active");
      } else {
        removeClassFromElement(sections[section].link, "menu__link--active");
      }
    }
  }

  setOffsets();
  processLinks(0);

  window.addEventListener("scroll", function(e) {
    lastScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        processLinks(lastScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });

  window.addEventListener("resize", function(e) {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        setOffsets();
        clientHeight = window.innerHeight;
        ticking = false;
      });
      ticking = true;
    }
  });

  // smooth scroll on click anchor
  var SmoothScroll = new SmoothScroll(".js-scroll");

  // animate some elements on scroll
  window.sr = ScrollReveal({
    scale: 1,
    duration: 200,
    viewFactor: 0.5,
    distance: "32px",
    origin: "bottom",
    mobile: false
  });

  sr.reveal(".js-fade-left", {
    origin: "right",
    duration: 667,
    viewFactor: 0.2
  });
  sr.reveal(".js-fade-right", {
    origin: "left",
    duration: 667,
    viewFactor: 0.2
  });
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
}
