const registerContainer = document.querySelector(".register");
const registerTitle = registerContainer.querySelector("h1");

function TryToRegister(){
    fetch(`https://test-dorothy-backend.herokuapp.com/register`
    ).then((res) => {
        return res.json();
        })
        .then((data) => {
            loadMessage(data);
        })
}

function loadMessage(data){
    var message = JSON.stringify(data.success);
    registerTitle.innerText = `${message}`;
}
