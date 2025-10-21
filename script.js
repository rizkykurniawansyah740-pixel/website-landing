const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.body.style.background = "#1c1c1c";
    document.body.style.color = "#f1f1f1";
  } else {
    document.body.style.background = "#f8f9fb";
    document.body.style.color = "#333";
  }
});