"use strict"
import { getUserdata } from "./signup.js";

// login when the document loaded using the localstorage data
document.addEventListener('DOMContentLoaded', getCredential());
const key = "U2FsdGVkX1/Xf2hsyx4cZQo8oq+3wHWl7ZX1F7QG6cFMmk3wmTd2oOBnqrqYFhrVuuZS4D8EDw8yiG76gVMbVQ==";
const decrypted = CryptoJS.AES.decrypt(key, "U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=");
const BASKET_NAME = "news";
/********************* Login DOM  *********************/
const loginContainer = document.querySelector('#login');
const signupContainer = document.querySelector('#signup');
const username = document.getElementById('username');
const password = document.getElementById('password');
const eyeHide = document.getElementById('eye-hide');
const eyeShow = document.getElementById('eye-show');
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('btn-login');


function loadLogin(signupContainer, loginContainer) {
    const className = ' signin animate__animated animate__backOutDown animate__slower';
    const className2 = 'signin';
    signupContainer.className = className;
    loginContainer.className = className2;
}

// checking the user login
async function checkUserLogin(decrypted, BASKET_NAME, uname, password) {
    let userData = await getUserdata(decrypted.toString(CryptoJS.enc.Utf8), BASKET_NAME);
    console.log(userData);
    let status;

    // login data
    const userinput = {
        username: uname,
        password: password
    }
    const checkedData = userData.userdata.filter((data) => {
        // checking the userdata fomr the API response
        if (data.username === userinput.username && data.password === userinput.password) {
            // storing the userdata for autoLogin feature
            storeCredential(data);
            console.log('Login Success');
            return data;
        } else {
            console.log('Login Failed')
        }
    })
    if(checkedData.length){
        status = true;
    }else{
        status = false;
    }
    console.log(checkedData);
    console.log(status);
    return status;
}
function storeCredential(data) {
    // storing the object in localStorage
    localStorage.setItem('NewsDa', JSON.stringify(data));
}
function getCredential() {
    // gives the data that stores on localstorage evn its empty data
    let getData = localStorage.getItem('NewsDa');
    let parsed = JSON.parse(getData);
    if(parsed == null){
     return;
    }else{
        window.location.replace('/home.html');
    }
console.log(parsed)
}

// logoutUser();
// getCredential();

//  changing the to signup 
signupBtn.addEventListener('click', () => { loadLogin(loginContainer, signupContainer) })


// login btn event or the login
loginBtn.addEventListener('click', async (event) => {
    const name = username.value;
    const pass = password.value;
    console.log(name, pass);
    if (name == '' || pass == '') {
       alert('enter Username (or) Password')
    } else {
        const LogInstatus = await checkUserLogin(decrypted, BASKET_NAME, name, pass);
        if (LogInstatus) {
            window.location.replace('/home.html');
        } else {
            alert(`cant't Find You...!`)
        }
    }

});


export { storeCredential }



