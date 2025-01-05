document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // ajuste para compensar altura do menu
            behavior: 'smooth'
          });
        }
      }
    });
});
  
// Captura o envio do formulário e gera o mailto dinamicamente
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // não faz submit tradicional

  // Pega valores dos campos
  const nameValue = document.getElementById('name').value;
  const emailValue = document.getElementById('email').value;
  const messageValue = document.getElementById('message').value;
  
  // Monta o assunto e o corpo do e-mail
  const subject = encodeURIComponent(`Contato de ${nameValue}`);
  
  // Texto genérico + dados do formulário
  const body = encodeURIComponent(
    `Olá, gostaria de entrar em contato.\n\n` +
    `Nome: ${nameValue}\n` +
    `Email: ${emailValue}\n\n` +
    `Mensagem:\n${messageValue}\n\n` +
    `Enviado via meu portfólio!`
  );

  // Substitua pelo SEU e-mail real
  const mailtoLink = `mailto:seuemail@exemplo.com?subject=${subject}&body=${body}`;

  // Abre o cliente de e-mail
  window.location.href = mailtoLink;
});