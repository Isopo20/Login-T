document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'israel' && password === '1234') {
        alert('Login successful!');
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});
