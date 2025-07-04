document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".like-btn");

    botoes.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.dataset.clicked === "true") return;

            let texto = btn.textContent;
            let numeroLikes = parseInt(texto.replace(/[^\d]/g, ""));

            numeroLikes++;
            btn.textContent = `👍 ${numeroLikes}`;

            btn.dataset.clicked = "true";

            btn.classList.add("clicked");

            setTimeout(() => {
                btn.classList.remove("clicked");
            }, 400);
        });
    });
});