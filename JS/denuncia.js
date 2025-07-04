document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("anonimo");
    const form = document.querySelector(".formulario-denuncia");
    const botao = document.querySelector("button[type='submit']");
    const LIMITE_MB = 5;

  
    botao.disabled = !checkbox.checked;

    
    checkbox.addEventListener("change", function () {
        botao.disabled = !this.checked;
    });

    
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const titulo = document.getElementById("nome").value.trim();
        const local = document.getElementById("endereco").value.trim();
        const descricao = document.getElementById("ocorrencia").value.trim();
        const arquivo = document.getElementById("arquivo").files[0];

        if (!titulo || !local || !descricao) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (arquivo) {
            if (arquivo.size > LIMITE_MB * 1024 * 1024) {
                alert("A imagem excede o limite de 5MB. Por favor, envie uma imagem menor.");
                return;
            }

            const reader = new FileReader();
            reader.onload = function (event) {
                salvarDenuncia(titulo, local, descricao, event.target.result);
            };
            reader.readAsDataURL(arquivo); 
        } else {
            salvarDenuncia(titulo, local, descricao, null); 
        }
    });

    
    function salvarDenuncia(titulo, local, descricao, imagemBase64) {
        const denuncia = {
            titulo,
            local,
            descricao,
            imagem: imagemBase64,
            data: new Date().toLocaleString()
        };

        const denuncias = JSON.parse(localStorage.getItem("denuncias")) || [];
        denuncias.push(denuncia);
        localStorage.setItem("denuncias", JSON.stringify(denuncias));

        alert("Denúncia registrada com sucesso!");
        form.reset();
        botao.disabled = true;
    }
});
