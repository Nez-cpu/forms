const passwordInputs = document.querySelectorAll('input[type="password"]');

passwordInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.value.length < 6) {
      input.setCustomValidity("Password must be at least 6 characters.");
    } else {
      input.setCustomValidity("");
    }
  });
});
