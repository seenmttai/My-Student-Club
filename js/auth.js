export function initializeAuth() {
  const userProfile = document.querySelector('.user-profile');
  if (userProfile) {
    userProfile.addEventListener('click', toggleUserMenu);
  }

  // Check if user is logged in
  checkAuthStatus();
}

async function checkAuthStatus() {
  try {
    const response = await fetch('/api/auth/status');
    const data = await response.json();
    
    if (data.isAuthenticated) {
      updateUIForAuthenticatedUser(data.user);
    } else {
      updateUIForGuestUser();
    }
  } catch (error) {
    console.error('Error checking auth status:', error);
    updateUIForGuestUser();
  }
}

function updateUIForAuthenticatedUser(user) {
  const userProfile = document.querySelector('.user-profile');
  if (userProfile) {
    userProfile.textContent = user.name.charAt(0);
    userProfile.setAttribute('title', user.name);
  }
}

function updateUIForGuestUser() {
  const userProfile = document.querySelector('.user-profile');
  if (userProfile) {
    userProfile.textContent = 'G';
    userProfile.setAttribute('title', 'Guest User');
  }
}

function toggleUserMenu() {
  console.log('Hey, i am not ready!');
}

