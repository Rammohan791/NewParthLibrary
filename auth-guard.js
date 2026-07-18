const AUTH_SESSION_KEY = 'session';

function getSession() {
  try {
    const stored = localStorage.getItem(AUTH_SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Failed to read session from localStorage', error);
    return null;
  }
}

function saveSession(session) {
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(AUTH_SESSION_KEY);
}

function checkPageAuthority(allowedRole) {
  const session = getSession();

  if (!session || session.role !== allowedRole) {
    alert('Access Denied!');
    window.location.href = 'index.html';
    return false;
  }

  return true;
}

function logout() {
  clearSession();
  window.location.href = 'index.html';
}

window.logout = logout;
