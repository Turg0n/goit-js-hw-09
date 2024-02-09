const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state'
const savedFeedback = localStorage.getItem(storageKey);
const parsedFeedback = JSON.parse(savedFeedback);

if (savedFeedback) {
  form.elements.email.value = parsedFeedback.email;
  form.elements.message.value = parsedFeedback.message;
}

form.addEventListener('input', e => {
  const localStorageObj = JSON.stringify({
    email: e.currentTarget.elements.email.value.trim(),
    message: e.currentTarget.elements.message.value.trim(),
  });

  localStorage.setItem(storageKey, localStorageObj);
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  const obj = {
    email: email.trim(),
    message: message.trim(),
  };

  if (email !== '' && message !== '') {
    console.log(obj);
    e.currentTarget.reset();
    localStorage.removeItem(storageKey);
  } else {
    alert(
      'You missed filling in some inputs. Fill in all the inputs!'
    );
  }
});