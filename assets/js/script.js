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
  const subject = encodeURIComponent(`Contato de ${nameValue} via portfolio`);
  
  // Texto genérico + dados do formulário
  const body = encodeURIComponent(
    `Olá, gostaria de entrar em contato.\n\n` +
    `Me chamo: ${nameValue}\n` +
    `Email: ${emailValue}\n\n` +
    `Mensagem:\n${messageValue}\n\n` +
    `Enviado via portfólio Danilo Marques Lima!`
  );

  // Substitua pelo SEU e-mail real
  const mailtoLink = `mailto:daniloc.marqueslima@gmail.com?subject=${subject}&body=${body}`;

  // Abre o cliente de e-mail
  window.location.href = mailtoLink;
});

const emailLink = document.getElementById('emailLink');

// Adiciona um listener para o clique
emailLink.addEventListener('click', function(event) {
  event.preventDefault(); // impede navegação normal (href="#")

  // Monta seu mailto:
  //  - Você pode ajustar subject e body conforme desejar
  const mailtoLink = 'mailto:seuemail@exemplo.com'
    + '?subject=' + encodeURIComponent('Contato via Socials')
    + '&body='   + encodeURIComponent('Olá! Gostaria de entrar em contato...');

  // Tenta abrir o cliente de e-mail
  window.location.href = mailtoLink;

  // Se em ~1s ainda estivermos “visíveis”, provavelmente o mailto falhou
  setTimeout(() => {
    if (document.visibilityState === 'visible') {
      alert(
        'Parece que você não possui um cliente de e-mail configurado.\n' +
        'Mas para mantermos contatos, envie uma mensagem para: daniloc.marqueslima@gmai.com'
      );
    }
  }, 1000);
});