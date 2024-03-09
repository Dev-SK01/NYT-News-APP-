"use strict"
import { storeCredential } from "./login.js";



// Encryption and decryption is used AES Algo
const key = "U2FsdGVkX1/Xf2hsyx4cZQo8oq+3wHWl7ZX1F7QG6cFMmk3wmTd2oOBnqrqYFhrVuuZS4D8EDw8yiG76gVMbVQ==";
const decrypted = CryptoJS.AES.decrypt(key, "U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=");
const PANTRY_ID = decrypted.toString(CryptoJS.enc.Utf8);
const BASKET_NAME = "news";
/********************* SignUp DOM  *********************/
const signupContainer = document.querySelector('#signup');
const loginContainer = document.querySelector('#login');
const usernameSn = document.getElementById('username-signup');
const passwordSn = document.getElementById('password-signup');
const eyeHideSn = document.getElementById('eye-hide');
const eyeShowSn = document.getElementById('eye-show');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('btn-signup');

function loadLogin(signupContainer, loginContainer) {

    const className = ' signin animate__animated animate__backOutDown animate__slower';
    const className2 = 'signin'
    signupContainer.className = className;
    loginContainer.className = className2;
}


async function getUserdata(PANTRY_ID, BASKET_NAME) {
    const GetEndPoint = `https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${BASKET_NAME}`;
    const fetchUserData = await fetch(GetEndPoint);
    const userData = await fetchUserData.json();
    // console.log(userData);
    return userData;

}

async function checkExistingUser(PANTRY_ID, BASKET_NAME) {
    const userData = await getUserdata(PANTRY_ID, BASKET_NAME);
    console.log(userData);
    // finding the user is exist or not 
    const isExist = await userData.userdata.filter((data) => {
        let IsExist;
        console.log(data.username, usernameSn.value);
        // (data.username === usernameSn.value) ? (IsExist = true) : (IsExist = false);
        if (data.username === usernameSn.value) {
            return data
        } else {
           return ;
        }
        // return the user boolean data as array
        console.log(IsExist);
    });
    // retutn the length of the array isExist
    // console.log(isExist)
    // console.log( typeof isExist);
    // console.log(isExist.length)
    return isExist;
}

async function createNewUser(PANTRY_ID, BASKET_NAME, uname, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var updateData;
    // getting the user data ISEXIST or not || need to pass the user input as argument
    const ExistingUser =  await checkExistingUser(PANTRY_ID, BASKET_NAME);
    // console.log(ExistingUser.length);
    // Applyig the logic for the new user
    ExistingUser > 0 ? updateData = { userdata: [] } : updateData = {
        userdata: [
            /* create new user data here*/
            {
                username: uname,
                password: password
            }
        ]
    };
    // stores empy data if usename exist it replace the updated data when the new user registered.
    storeCredential(updateData);
    /* POST Headers*/
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(updateData),
        redirect: 'follow'
    };

    // code fot the existing user
    if (ExistingUser.length > 0) {
        alert('User Already Exist! Please Login..');

    } else {

        /* Posting the new userdata */
        await fetch(`https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${BASKET_NAME}`, requestOptions)
            .then(response => {
                const data = response.json();
                return data;
            }).then(data => {
                /* return the posted data while creating new user */
                alert('Account Created')

                console.log(data)
            })
            .catch(error => console.log('error', error));
    }

}

// createNewUser(PANTRY_ID, BASKET_NAME);
loginBtn.addEventListener('click', () => loadLogin(signupContainer, loginContainer))

// sign up btn funcnction
signupBtn.addEventListener('click', async () => {
    const uname = usernameSn.value;
    const password = passwordSn.value;
    console.log(uname, password);
    if (uname == '' || password == '') {
        //   Error Message for password and user name empty
        alert('enter Username (or) Password')
    } else {
        await createNewUser(PANTRY_ID, BASKET_NAME, uname, password)
    }

})
// exporting the data function & variables 
export { getUserdata };