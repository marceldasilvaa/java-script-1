/*
const httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
httpRequest.send();
// console.log(httpRequest);

let posts;
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        posts = JSON.parse(httpRequest.response);
        // console.log(httpRequest.response);
        exibePosts();
    }
}


let posts;
const listaPosts = document.querySelector("#listaPosts");

fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((resposta) => resposta.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        exibePosts();
    })

function exibePosts() {
    setTimeout(() => {
        let saida = "";
        posts.forEach((post) => {
            saida += `<li> ${post.title} </li>
                    <li> ${post.body} </li> <hr></hr>`
        });
        listaPosts.innerHTML = saida;
    }, 3000)
}


let posts;
const listaPosts = document.querySelector("#listaPosts");

fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        body: JSON.stringify({
            title: "novo post",
            body: "corpo do novo post",
            userId: 5,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((resposta) => resposta.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
        // exibePosts();
    })


let posts;
const listaPosts = document.querySelector("#listaPosts");

fetch("https://jsonplaceholder.typicode.com/posts/2", {
        method: "PUT",
        body: JSON.stringify({
            title: "novo post",
            body: "corpo do novo post - atualização",
            userId: 5,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((resposta) => resposta.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
        // exibePosts();
    })


let posts;
const listaPosts = document.querySelector("#listaPosts");

fetch("https://jsonplaceholder.typicode.com/posts/2", {
        method: "PATCH",
        body: JSON.stringify({
            title: "novo post",
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((resposta) => resposta.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
        // exibePosts();
    })
*/

let posts;
const listaPosts = document.querySelector("#listaPosts");

fetch("https://jsonplaceholder.typicode.com/posts/10", {
        method: "DELETE",
    })
    .then((resposta) => resposta.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts);
        // exibePosts();
    })