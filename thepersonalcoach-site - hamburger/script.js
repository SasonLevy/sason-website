document.addEventListener("DOMContentLoaded", () => {
  // סגירת תפריט המבורגר בלחיצה על anchor
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", () => {
      const menu = document.getElementById("menu");
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    });
  });

  // שליחת טופס ל־Formspree
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form?.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch("https://formspree.io/f/mkgroovb", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        successMessage.style.display = "block";
      } else {
        alert("אירעה שגיאה בשליחה.");
      }
    })
    .catch(() => alert("שגיאה בחיבור לשרת."));
  });

  // תפריט המבורגר פתיחה/סגירה
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle?.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
