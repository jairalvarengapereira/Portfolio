function enviarWhats(event) {
  event.preventDefault(); // impede o envio do formulário
  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const fone = "5531986506619";

  if (!nome || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const text = `Olá! Me chamo ${nome}, ${mensagem}.`;
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${fone}?text=${encodedText}`;

  // Redireciona na mesma aba
  window.location.href = whatsappUrl;

  // Limpa os campos
  document.getElementById("nome").value = "";
  document.getElementById("mensagem").value = "";
}


function openPopup(src) {
  document.getElementById("popup-image").src = src;
  document.getElementById("popup-container").style.display = "block";
}

function closePopup() {
  document.getElementById("popup-container").style.display = "none";
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

// Fechar o menu ao clicar em um link
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("active"); // Fecha o menu
  });
});