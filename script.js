const requestText = document.getElementById('requestText');
const charCount = document.getElementById('charCount');
const requestForm = document.getElementById('requestForm');
const resultPanel = document.getElementById('resultPanel');
const resultSummary = document.getElementById('resultSummary');
const editRequest = document.getElementById('editRequest');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

requestText.addEventListener('input', () => {
  charCount.textContent = `${requestText.value.length}/1200`;
});

document.querySelectorAll('.solution-card').forEach(card => {
  card.addEventListener('click', () => {
    requestText.value = card.dataset.example || '';
    charCount.textContent = `${requestText.value.length}/1200`;
    document.getElementById('comecar').scrollIntoView({behavior: 'smooth'});
    window.setTimeout(() => requestText.focus(), 450);
  });
});

requestForm.addEventListener('submit', event => {
  event.preventDefault();
  const request = requestText.value.trim();
  if (!request) return;
  resultSummary.textContent = `“${request}”`;
  requestForm.hidden = true;
  resultPanel.hidden = false;
});

editRequest.addEventListener('click', () => {
  resultPanel.hidden = true;
  requestForm.hidden = false;
  requestText.focus();
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
