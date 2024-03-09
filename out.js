const logOut = document.getElementById('logout');
console.log(logOut);

function logoutUser() {
    // logout the user when user wants
    localStorage.removeItem('NewsDa');
    alert('You Logged Out!');
    window.location.replace('/index.html');
};

// logout function
logOut.addEventListener('click' ,()=>{logoutUser()});