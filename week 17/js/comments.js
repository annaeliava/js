let add = document.getElementById("btn");
let chat = document.querySelector(".container");
let comment = document.getElementById("comments");

function checkSpam(comments) {
    add.addEventListener("click", () => {
        let commentInput = document.getElementById("comments");
        if (!comment.value) return;
        let str = commentInput.value.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
        let newComment = checkSpam(str);
        chat.innerHTML += newComment;
        commentInput.value = "";
    });
    return `<div>${comments}</div> <hr>`;
}