const themeBtn = document.querySelector("#themeBtn");
const shareBtn = document.querySelector("#shareBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeBtn.textContent = document.body.classList.contains("dark")
        ? "☀️ Світла тема"
        : "🌙 Змінити тему";
});

shareBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        shareBtn.textContent = "✅ Посилання скопійовано!";
    } catch {
        alert("Скопіюй адресу сторінки з браузера.");
    }
});