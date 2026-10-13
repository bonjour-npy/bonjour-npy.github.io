(function () {
  "use strict";

  function initSectionNavigation() {
    if (!document.getElementById("biography")) return;

    var navigation = document.querySelector(".homepage-nav");
    var menuButton = document.querySelector(".homepage-nav__toggle");
    var masthead = document.querySelector(".masthead");

    function closeMenu() {
      if (!navigation || !menuButton) return;
      navigation.classList.remove("homepage-nav--open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    }

    if (navigation && menuButton) {
      menuButton.addEventListener("click", function () {
        var isOpen = navigation.classList.toggle("homepage-nav--open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      });
      navigation.addEventListener("click", function (event) {
        if (event.target.closest("a")) closeMenu();
      });
      document.addEventListener("click", function (event) {
        if (!navigation.contains(event.target)) closeMenu();
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
          closeMenu();
          menuButton.focus();
        }
      });
      window.matchMedia("(min-width: 981px)").addEventListener("change", closeMenu);
    }

    var links = Array.prototype.slice.call(
      document.querySelectorAll(".masthead__menu-item a[href*='#'], .homepage-nav__home")
    ).filter(function (link) {
      return link.hash && document.getElementById(link.hash.slice(1));
    });

    if (!links.length) return;

    var homeLink = links.find(function (link) { return link.hash === "#top"; });
    if (homeLink) {
      homeLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.history.pushState(null, "", homeLink.hash);
        window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      });
    }

    var sections = links.map(function (link) {
      return document.getElementById(link.hash.slice(1));
    });

    function updateActiveSection() {
      var current = sections[0].id;
      var headerHeight = masthead ? masthead.getBoundingClientRect().height : 0;
      var marker = window.scrollY + headerHeight + 24;
      document.documentElement.style.setProperty("--homepage-anchor-offset", (headerHeight + 16) + "px");

      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top + window.scrollY <= marker) current = section.id;
      });

      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }

      links.forEach(function (link) {
        var isCurrent = link.hash === "#" + current;
        if (link.parentElement.classList.contains("masthead__menu-item")) {
          link.parentElement.classList.toggle("selected", isCurrent);
        }
        if (isCurrent) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    updateActiveSection();
    var pending = false;
    window.addEventListener("scroll", function () {
      if (pending) return;
      pending = true;
      window.requestAnimationFrame(function () {
        updateActiveSection();
        pending = false;
      });
    }, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("load", updateActiveSection);
  }

  document.addEventListener("DOMContentLoaded", initSectionNavigation);
})();
