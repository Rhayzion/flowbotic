// DOM Elements
const tabs = document.querySelectorAll('.auth-tab');
const forms = document.querySelectorAll('.auth-form');
const successAlert = document.getElementById('successAlert');
const errorAlert = document.getElementById('errorAlert');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const showForgotPassword = document.getElementById('showForgotPassword');
const showLoginFromForgot = document.getElementById('showLoginFromForgot');
const showLoginFromReset = document.getElementById('showLoginFromReset');
const toggleLoginPassword = document.getElementById('toggleLoginPassword');
const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
const toggleRegisterConfirmPassword = document.getElementById('toggleRegisterConfirmPassword');
const toggleResetPassword = document.getElementById('toggleResetPassword');
const toggleResetConfirmPassword = document.getElementById('toggleResetConfirmPassword');
const verificationInputs = document.querySelectorAll('.verification-code input');
const googleButtons = document.querySelectorAll('.btn-google');
const xButtons = document.querySelectorAll('.btn-x');
const appleButtons = document.querySelectorAll('.btn-apple');

// Form Navigation
function showForm(formId) {
    forms.forEach(form => {
        form.classList.remove('active');
        if (form.id === formId) {
            form.classList.add('active');
        }
    });

    tabs.forEach(tab => {
        tab.classList.remove('active');
        if ((formId === 'loginForm' && tab.dataset.tab === 'login') || 
            (formId === 'registerForm' && tab.dataset.tab === 'register')) {
            tab.classList.add('active');
        }
    });

    successAlert.style.display = 'none';
    errorAlert.style.display = 'none';
}

// Tab and Navigation Events
tabs.forEach(tab => {
    tab.addEventListener('click', () => showForm(`${tab.dataset.tab}Form`));
});

showRegister.addEventListener('click', e => {
    e.preventDefault();
    showForm('registerForm');
});

showLogin.addEventListener('click', e => {
    e.preventDefault();
    showForm('loginForm');
});

showForgotPassword.addEventListener('click', e => {
    e.preventDefault();
    showForm('forgotPasswordForm');
});

showLoginFromForgot.addEventListener('click', e => {
    e.preventDefault();
    showForm('loginForm');
});

showLoginFromReset.addEventListener('click', e => {
    e.preventDefault();
    showForm('loginForm');
});

// Password Toggle
function setupPasswordToggle(toggle, inputId) {
    toggle.addEventListener('click', () => {
        const input = document.getElementById(inputId);
        if (input.type === 'password') {
            input.type = 'text';
            toggle.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            input.type = 'password';
            toggle.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
}

setupPasswordToggle(toggleLoginPassword, 'loginPassword');
setupPasswordToggle(toggleRegisterPassword, 'registerPassword');
setupPasswordToggle(toggleRegisterConfirmPassword, 'registerConfirmPassword');
setupPasswordToggle(toggleResetPassword, 'resetPassword');
setupPasswordToggle(toggleResetConfirmPassword, 'resetConfirmPassword');

// Verification Code Handling
verificationInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, '');
        if (input.value.length === 1 && index < verificationInputs.length - 1) {
            verificationInputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', e => {
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
            verificationInputs[index - 1].focus();
        }
    });
});

// Local Storage Helpers
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function findUser(email) {
    return getUsers().find(user => user.email === email);
}

function updateUser(email, updates) {
    const users = getUsers();
    const index = users.findIndex(user => user.email === email);
    if (index !== -1) {
        users[index] = { ...users[index], ...updates };
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function setAuthToken(email) {
    localStorage.setItem('authToken', email); // Simple token for demo
}

function clearAuthToken() {
    localStorage.removeItem('authToken');
}

// Form Submission Handling
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = findUser(email);
    if (user && user.password === password && user.verified) {
        setAuthToken(email);
        successMessage.textContent = 'Login successful! Redirecting...';
        successAlert.style.display = 'flex';
        errorAlert.style.display = 'none';
        setTimeout(() => {
            window.location.href = '../main.html';
        }, 1500);
    } else if (user && !user.verified) {
        errorMessage.textContent = 'Please verify your email before logging in.';
        errorAlert.style.display = 'flex';
        successAlert.style.display = 'none';
    } else {
        errorMessage.textContent = 'Invalid email or password. Please try again.';
        errorAlert.style.display = 'flex';
        successAlert.style.display = 'none';
    }
});

document.getElementById('registerForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const name = document.getElementById('registerName').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const termsAccepted = document.getElementById('registerTerms').checked;

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorAlert.style.display = 'flex';
        successAlert.style.display = 'none';
        return;
    }

    if (!termsAccepted) {
        errorMessage.textContent = 'You must agree to the Terms and Privacy Policy.';
        errorAlert.style.display = 'flex';
        successAlert.style.display = 'none';
        return;
    }

    if (findUser(email)) {
        errorMessage.textContent = 'Email already registered. Please log in.';
        errorAlert.style.display = 'flex';
        successAlert.style.display = 'none';
        return;
    }

    saveUser({ email, name, password, verified: false });
    successMessage.textContent = `Registration successful! A verification email has been sent to ${email}.`;
    successAlert.style.display = 'flex';
    errorAlert.style.display = 'none';
    document.getElementById('verifyEmailAddress').textContent = email;
    showForm('verifyEmailForm');
});

document.getElementById('forgotPasswordForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value;

    if (!findUser(email)) {
        errorMessage.textContent = 'Email not found. Please try again.';
        errorAlert.style.display = 'flex';
        successAlert.style.display = 'none';
        return;
    }

    successMessage.textContent = `Password reset email sent to ${email}.`;
    successAlert.style.display = 'flex';
    errorAlert.style.display = 'none';
    setTimeout(() => {
        showForm('resetPasswordForm');
    }, 2000);
});

document.getElementById('resetPasswordForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value; // Assume email is carried over
    const newPassword = document.getElementById('resetPassword').value;
    const confirmPassword = document.getElementById('resetConfirmPassword').value;

    if (newPassword !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        errorAlert.style.display = 'flex';
        successAlert.style.display = 'none';
        return;
    }

    if (!findUser(email)) {
        errorMessage.textContent = 'Invalid email. Please try again.';
        errorAlert.style.display = 'flex';
        successAlert.style.display = 'none';
        return;
    }

    updateUser(email, { password: newPassword });
    successMessage.textContent = 'Password reset successfully. Please log in.';
    successAlert.style.display = 'flex';
    errorAlert.style.display = 'none';
    setTimeout(() => {
        showForm('loginForm');
    }, 2000);
});

document.getElementById('verifyEmailForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('verifyEmailAddress').textContent;
    const code = Array.from(verificationInputs).map(input => input.value).join('');

    if (code === '123456') {
        updateUser(email, { verified: true });
        setAuthToken(email);
        successMessage.textContent = 'Email verified! Redirecting...';
        successAlert.style.display = 'flex';
        errorAlert.style.display = 'none';
        setTimeout(() => {
            window.location.href = '../main.html';
        }, 1500);
    } else {
        errorMessage.textContent = 'Invalid verification code. Please try again.';
        errorAlert.style.display = 'flex';
        successAlert.style.display = 'none';
    }
});

// Simulated Social Authentication
googleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const email = 'google-demo@flowbotic.com';
        if (!findUser(email)) {
            saveUser({ email, name: 'Google Demo', password: 'verified', verified: true });
        }
        setAuthToken(email);
        successMessage.textContent = 'Google login successful! Redirecting...';
        successAlert.style.display = 'flex';
        errorAlert.style.display = 'none';
        setTimeout(() => {
            window.location.href = '../main.html';
        }, 1500);
    });
});

xButtons.forEach(button => {
    button.addEventListener('click', () => {
        const email = 'x-demo@flowbotic.com';
        if (!findUser(email)) {
            saveUser({ email, name: 'X Demo', password: 'verified', verified: true });
        }
        setAuthToken(email);
        successMessage.textContent = 'X login successful! Redirecting...';
        successAlert.style.display = 'flex';
        errorAlert.style.display = 'none';
        setTimeout(() => {
            window.location.href = '../main.html';
        }, 1500);
    });
});

appleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const email = 'apple-demo@flowbotic.com';
        if (!findUser(email)) {
            saveUser({ email, name: 'Apple Demo', password: 'verified', verified: true });
        }
        setAuthToken(email);
        successMessage.textContent = 'Apple login successful! Redirecting...';
        successAlert.style.display = 'flex';
        errorAlert.style.display = 'none';
        setTimeout(() => {
            window.location.href = '../main.html';
        }, 1500);
    });
});