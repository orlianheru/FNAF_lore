document.getElementById('LoginForm').addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Form Submitted');

    const correctUsername = 'peler';
    const correctPassword = '12345';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctUsername && password === correctPassword){
        alert('Login Berhasil');
        window.location.href = 'index.html';
    }else{
        alert('Login Gagal');
    }
});
