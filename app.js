const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit',function(e) {
    e.preventDefault();
    if(!checkEmail(email.value)){
        showError(email);
    }else {
        showSuccess(email);
    }
})

function showError(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

const checkEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };