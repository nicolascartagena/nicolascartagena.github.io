let navbarState = false;

window.onload = function() {
    document.getElementById('navButton').onclick = toggleNavbar;
}

const toggleNavbar = () => {
    const navbar = document.getElementById('navbar');
    
    if (navbarState) {
        navbar.style.display = 'none';
        navbarState = false;
    } else {
        navbar.style.display = 'flex';
        navbarState = true;
    }
}