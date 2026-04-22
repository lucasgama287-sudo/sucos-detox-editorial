const BUY_URL = "https://pay.kiwify.com.br/SEU-LINK-AQUI";

document.querySelectorAll("[data-buy-link]").forEach((link) => {
  link.setAttribute("href", BUY_URL);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18
  }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
