// Lista de administradores con cédula y contraseña
const adminCredenciales = [
  { cedula: '123456', password: 'admin123' },
  { cedula: '567890', password: 'clave2025' }
];

// Verifica si la cédula es de un administrador y muestra el campo de contraseña
function checkAdminCedula() {
  const cedula = document.getElementById('cedula').value.trim();
  const passwordField = document.getElementById('password');

  const esAdmin = adminCredenciales.some(admin => admin.cedula === cedula);

  if (esAdmin) {
    passwordField.style.display = 'block';
  } else {
    passwordField.style.display = 'none';
    passwordField.value = ''; // limpia si no es admin
  }
}

// Acción al hacer login
function login() {
  const cedula = document.getElementById('cedula').value.trim();
  const password = document.getElementById('password').value;

  if (cedula === '') {
    alert('Por favor, ingresa tu cédula');
    return;
  }

  const admin = adminCredenciales.find(user => user.cedula === cedula);

  if (admin) {
    if (password === '') {
      alert('Por favor, ingresa tu contraseña');
      return;
    }
    if (password === admin.password) {
      showScreen('home-admin');
    } else {
      alert('Contraseña incorrecta');
    }
  } else {
    showScreen('home-user'); // usuario normal
  }

  limpiarCamposLogin();
}

// Muestra solo la pantalla que se indica y ajusta clases
function showScreen(screenId) {
  const screens = ['login-screen', 'home-user', 'home-admin', 'register-screen'];

  screens.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (id === screenId) {
      el.style.display = 'block';

      if (id === 'login-screen') {
        el.classList.remove('scrollable');
        el.classList.add('centered');
      } else if (id === 'register-screen') {
        el.classList.remove('centered');
        el.classList.add('scrollable');
      }
    } else {
      el.style.display = 'none';
    }
  });
}

// Navega al registro
function showRegister() {
  showScreen('register-screen');
}

// Navega al login
function showLogin() {
  limpiarCamposLogin();
  showScreen('login-screen');
}

// Limpia campos del login
function limpiarCamposLogin() {
  document.getElementById('cedula').value = '';
  const pass = document.getElementById('password');
  pass.value = '';
  pass.style.display = 'none';
}
