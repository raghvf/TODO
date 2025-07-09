let add = document.querySelector(".add");
let inp = document.querySelector(".srch");
let ul = document.querySelector("ul");

add.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let chk = document.createElement("input");
    chk.type = "checkbox";
    item.appendChild(chk);

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("del"); // Add class
    item.appendChild(dltbtn);

    // Add event listener to this delete button
    dltbtn.addEventListener("click", () => {
        item.remove();
    });
});

let delbtns = document.querySelectorAll(".del");
delbtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
    });
});