const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    togglePassword.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
});
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    togglePassword.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
});
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');
const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.querySelector('.strength-text');

togglePassword.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    togglePassword.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;

    // Basic password strength check (you can implement more complex logic)
    if (password.length < 8) {
        strength = 0;
    } else if (password.length >= 8 && !/\d/.test(password)) {
        strength = 1;
    } else if (password.length >= 8 && /\d/.test(password) && !/[a-z]/.test(password)) {
        strength = 2;
    } else if (password.length >= 8 && /\d/.test(password) && /[a-z]/.test(password) && !/[A-Z]/.test(password)) {
        strength = 3;
    } else {
        strength = 4;
    }

    const colors = ['#ccc', '#f0ad4e', '#ffd600', '#90ee90', '#008000'];
    strengthBar.style.backgroundColor = colors[strength];

    switch (strength) {
        case 0:
            strengthText.textContent = 'Password Strength: Very Weak';
            break;
        case 1:
            strengthText.textContent = 'Password Strength: Weak';
            break;
        case 2:
            strengthText.textContent = 'Password Strength: Medium';
            break;
        case 3:
            strengthText.textContent = 'Password Strength: Strong';
            break;
        case 4:
            strengthText.textContent = 'Password Strength: Very Strong';
            break;
    }
});
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');
const strengthBar = document.querySelector('.strength-bar');
const strengthFill = document.querySelector('.strength-fill');
const strengthText = document.querySelector('.strength-text');

togglePassword.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    togglePassword.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;

    // Basic password strength check (you can implement more complex logic)
    if (password.length < 8) {
        strength = 0;
    } else if (password.length >= 8 && !/\d/.test(password)) {
        strength = 1;
    } else if (password.length >= 8 && /\d/.test(password) && !/[a-z]/.test(password)) {
        strength = 2;
    } else if (password.length >= 8 && /\d/.test(password) && /[a-z]/.test(password) && !/[A-Z]/.test(password)) {
        strength = 3;
    } else {
        strength = 4;
    }

    const colors = ['#ccc', '#f0ad4e', '#ffd600', '#90ee90', '#008000'];
    strengthFill.style.width = `${strength * 25}%`; // Adjust as needed
    strengthFill.style.backgroundColor = colors[strength];

    switch (strength) {
        case 0:
            strengthText.textContent = 'Password Strength: Very Weak';
            break;
        case 1:
            strengthText.textContent = 'Password Strength: Weak';
            break;
        case 2:
            strengthText.textContent = 'Password Strength: Fair';
            break;
        case 3:
            strengthText.textContent = 'Password Strength: Strong';
            break;
        case 4:
            strengthText.textContent = 'Password Strength: Very Strong';
            break;
    }
});
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');
const strengthBar = document.querySelector('.strength-bar');
const strengthFill = document.querySelector('.strength-fill');
const strengthText = document.querySelector('.strength-text');

togglePassword.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    togglePassword.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;

    // Basic password strength check (you can implement more complex logic)
    if (password.length < 8) {
        strength = 0;
    } else if (password.length >= 8 && !/\d/.test(password)) {
        strength = 1;
    } else if (password.length >= 8 && /\d/.test(password) && !/[a-z]/.test(password)) {
        strength = 2;
    } else if (password.length >= 8 && /\d/.test(password) && /[a-z]/.test(password) && !/[A-Z]/.test(password)) {
        strength = 3;
    } else {
        strength = 4;
    }

    const colors = ['#ccc', '#f0ad4e', '#ffd600', '#90ee90', '#008000'];
    strengthFill.style.width = `${strength * 25}%`; // Adjust as needed
    strengthFill.style.backgroundColor = colors[strength];

    switch (strength) {
        case 0:
            strengthText.textContent = 'Password Strength: Very Weak';
            break;
        case 1:
            strengthText.textContent = 'Password Strength: Weak';
            break;
        case 2:
            strengthText.textContent = 'Password Strength: Fair';
            break;
        case 3:
            strengthText.textContent = 'Password Strength: Strong';
            break;
        case 4:
            strengthText.textContent = 'Password Strength: Very Strong';
            break;
    }
});
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');
const strengthBar = document.querySelector('.strength-bar');
const strengthFill = document.querySelector('.strength-fill');
const strengthText = document.querySelector('.strength-text');

togglePassword.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    togglePassword.textContent = passwordInput.type === 'password' ? 'Show' : 'Hide';
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;

    // Basic password strength check (you can implement more complex logic)
    if (password.length < 8) {
        strength = 0;
    } else if (password.length >= 8 && !/\d/.test(password)) {
        strength = 1;
    } else if (password.length >= 8 && /\d/.test(password) && !/[a-z]/.test(password)) {
        strength = 2;
    } else if (password.length >= 8 && /\d/.test(password) && /[a-z]/.test(password) && !/[A-Z]/.test(password)) {
        strength = 3;
    } else {
        strength = 4;
    }

    const colors = ['#ccc', '#f0ad4e', '#ffd600', '#90ee90', '#008000'];
    strengthFill.style.width = `${strength * 25}%`; // Adjust as needed
    strengthFill.style.backgroundColor = colors[strength];

    switch (strength) {
        case 0:
            strengthText.textContent = 'Password Strength: Very Weak';
            break;
        case 1:
            strengthText.textContent = 'Password Strength: Weak';
            break;
        case 2:
            strengthText.textContent = 'Password Strength: Fair';
            break;
        case 3:
            strengthText.textContent = 'Password Strength: Strong';
            break;
        case 4:
            strengthText.textContent = 'Password Strength: Very Strong';
            break;
    }
});