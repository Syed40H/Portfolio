// ===== Mobile menu toggle =====
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".stack-icon");
  if (!menu || !icon) return;
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ===== Dark mode toggle =====
const THEME_KEY = "pref-theme";

// Apply saved/user-preferred theme on load
(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (saved === "dark" || (!saved && prefersDark)) {
    document.body.classList.add("dark");
  }
})();

// Handle toggle clicks
(function wireThemeToggles() {
  const toggles = document.querySelectorAll(".theme-toggle");
  if (!toggles.length) return;

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
      btn.textContent = isDark ? "Light Mode" : "Dark Mode";
    });
  });
})();
