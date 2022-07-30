const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const h1 = document.getElementById("greeting");
const HIDDEN_CLASSNAME = "hidden";
const localUserName = localStorage.getItem("username");

function onLoginSubmit(info){
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    console.log(userName);
    localStorage.setItem("username" , userName);
    paintGreetings(userName);

}

function paintGreetings(name){
    h1.classList.remove(HIDDEN_CLASSNAME);
    h1.innerText = "Hello " + name;
}

function onclickEvnet(){
    h1.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.value = "";
    localStorage.removeItem("username");
}



if(localUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit" , onLoginSubmit);
} else {
    paintGreetings(localUserName);
    
}

h1.addEventListener("click" , onclickEvnet);

