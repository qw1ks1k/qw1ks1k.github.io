const links = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section, main header")];

const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if (!visible) return;
  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + visible.target.id);
  });
}, {threshold:[0.15,0.35,0.6]});

sections.forEach(section => observer.observe(section));

document.querySelector(".fake-player button")?.addEventListener("click", (e) => {
  e.currentTarget.textContent = e.currentTarget.textContent === "▶" ? "Ⅱ" : "▶";
});

// Small local visitor counter: intentionally local to the browser.
const counter = document.getElementById("counter");
if (counter) {
  const key = "qw1ksik-local-visits";
  let visits = Number(localStorage.getItem(key) || 13731) + 1;
  localStorage.setItem(key, visits);
  counter.textContent = String(visits).padStart(6, "0");
}
