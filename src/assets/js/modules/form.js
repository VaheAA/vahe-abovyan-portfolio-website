const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorSpans = document.querySelectorAll('.error');
const spinner = document.querySelector('.spinner');
const submitBtn = document.querySelector('[data-btn="submit"]');
const toast = document.querySelector('.toast');

const API_URL =
  'https://portfolio-back-production-323a.up.railway.app/sendmail';

let errors = 0;

function showToast(msg, timeout) {
  toast.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    toast.textContent = '';
  }, timeout);
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (validateInputs() === 0) {
    form.classList.remove('invalid');
    try {
      spinner.style.display = 'block';
      submitBtn.classList.add('disabled');
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value
        })
      });
      const data = await res.json();
      showToast(data.msg, 3000);
      form.reset();
      spinner.style.display = 'none';
      submitBtn.classList.remove('disabled');
    } catch (error) {
      spinner.style.display = 'none';
      submitBtn.classList.remove('disabled');
      alert(error.message);
    }
  } else {
    form.classList.add('invalid');
  }
});

function validateInputs() {
  if (nameInput.value === '') {
    nameInput.parentElement.classList.add('invalid');
    errors++;
  } else {
    nameInput.parentElement.classList.remove('invalid');
    if (errors > 0) errors--;
  }

  if (messageInput.value === '') {
    messageInput.parentElement.classList.add('invalid');
    errors++;
  } else {
    messageInput.parentElement.classList.remove('invalid');
    if (errors > 0) errors--;
  }

  if (emailInput.value === '' || !isValidEmail(emailInput.value)) {
    emailInput.parentElement.classList.add('invalid');
    errors++;
  } else {
    emailInput.parentElement.classList.remove('invalid');
    if (errors > 0) errors--;
  }

  return errors;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
