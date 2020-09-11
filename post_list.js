const postListContainer = document.querySelector(".post-list");
const postListTitle = postListContainer.querySelector("h1");

function init() {
    const list = new String();
    list = "Test frontend";
    postListTitle.innerText = `${list}`;
}

init();