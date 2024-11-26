
const links = document.querySelectorAll("a[href]");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = link.getAttribute("href");
    window.location.href = target;
  });
});