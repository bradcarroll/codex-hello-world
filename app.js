const message = document.getElementById('message');
const helloButton = document.getElementById('hello-button');

helloButton.addEventListener('click', () => {
  message.textContent = 'Hello from Codex.';
});
