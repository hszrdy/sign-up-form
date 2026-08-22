let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let pw = document.getElementById('password').value;
    let confirmPw = document.getElementById('confirm-password').value;

    if (pw !== confirmPw) {
        alert('Passwords do not match!');
        return;
    }
});