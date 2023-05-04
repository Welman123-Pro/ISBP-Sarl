const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nom = form.elements.nom.value;
  const email = form.elements.email.value;
  const telephone = form.elements.telephone.value;
  const message = form.elements.message.value;
  console.log(`Nom : ${nom}\nEmail : ${email}\nTéléphone : ${telephone}\nMessage : ${message}`);
  form.reset();
});
