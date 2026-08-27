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

  var quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = quoteForm.name.value.trim();
      var contact = quoteForm.contact.value.trim();
      var message = quoteForm.message.value.trim();

      var subject = "Quote Request from " + name;
      var body =
        "Name: " + name +
        "\nPhone/Email: " + contact +
        "\n\nMessage:\n" + message;

      var mailtoLink =
        "mailto:mbesalesasuro@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailtoLink;
    });
  }
});
