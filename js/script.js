document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("is-open");
    });
  }

  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path) {
      link.classList.add("is-active");
    }
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if ("IntersectionObserver" in window) {
    var revealEls = document.querySelectorAll(".reveal");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  function wireMailtoForm(form, recipient, subjectPrefix) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.name && form.name.value.trim()) || "";
      var contact = (form.contact && form.contact.value.trim()) || "";
      var message = (form.message && form.message.value.trim()) || "";

      var subject = subjectPrefix + (name ? " from " + name : "");
      var body =
        "Name: " + name +
        "\nPhone/Email: " + contact +
        "\n\nMessage:\n" + message;

      var mailtoLink =
        "mailto:" + recipient +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailtoLink;
    });
  }

  var quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    wireMailtoForm(quoteForm, "mbesalesasuro@gmail.com", "Quote Request");
  }

  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    wireMailtoForm(contactForm, "mbesalesasuro@gmail.com", "Contact Inquiry");
  }
});
