function createAccount() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // This will get the values by ids.
    // the && is the AND Operator in JS which will check whether both boxes have true value.
    if (email == "" || password == "") {
        alert("You have to fill all the required fields!!")
    }
    if (email && password) {
        localStorage.setItem(email,password)
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        window.location.href = 'account window.html';
    }
}
document.getElementById('join').addEventListener('click',createAccount);





