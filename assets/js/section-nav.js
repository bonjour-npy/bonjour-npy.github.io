(function () {
  "use strict";

  function initSectionNavigation() {
    if (!document.getElementById("biography")) return;

    var links = Array.prototype.slice.call(
      document.querySelectorAll(".masthead__menu-item a[href*='#']")
    ).filter(function (link) {
      return link.hash && document.getElementById(link.hash.slice(1));
    });

    if (!links.length) return;

    var sections = links.map(function (link) {
      return document.getElementById(link.hash.slice(1));
    });

    function updateActiveSection() {
      var current = sections[0].id;
      var marker = window.scrollY + 150;

      sections.forEach(function (section) {
        if (section.offsetTop <= marker) current = section.id;
      });

      links.forEach(function (link) {
        var isCurrent = link.hash === "#" + current;
        link.parentElement.classList.toggle("selected", isCurrent);
        if (isCurrent) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
  }

  document.addEventListener("DOMContentLoaded", initSectionNavigation);
})();
