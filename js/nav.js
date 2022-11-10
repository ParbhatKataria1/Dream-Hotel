// for toggle


let data = [];
// fetch("https://636c87a7ad62451f9fcc651b.mockapi.io/locations")
//     .then((res) => res.json())
//     .then((dat) => {
//         data = dat;
//         display(dat);
//     })
//     .catch((error) => {
//         alert(error)
//     })
function display(dat) {
    console.log(dat)
}

function dest(dat) {

}

function midsection(dat) {

}

function vacation(dat) {

}



function open1() {
    document.querySelector(".curtain").style.width = "20%"
}
function x() {
    document.querySelector(".curtain").style.width = "0%"
}

// for currency
let change = false;
let currency = document.querySelector("#currency-elements");


window.addEventListener("mouseup", function (event) {
    let elem = document.querySelector("#inr");
    if (event.target == elem || event.target.parentNode == elem) {
        if (change == false) {
            currency.style.width = "20%"
            change = true;
        }
        else {
            currency.style.width = "0"
            change = false;
        }
    }
    else if (event.target != currency && event.target.parentNode != currency) {
        currency.style.width = "0";
        change = false;
    }
})

let curr_ele = document.querySelectorAll("#currency-elements>p");
for (let i = 0; i < curr_ele.length; i++) {
    curr_ele[i].addEventListener("click", (f) => {
        document.querySelector("#curr_value").innerHTML = curr_ele[i].outerText
    });
}


// code for login form
let change_sign = false;
let login = document.querySelector("#login");
let login_form = document.querySelector("#login-form")
window.addEventListener("mouseup", function (event) {
    if (event.target == login || event.target.parentNode == login) {
        if (change_sign == false) {
            login_form.style.width = "100px";
            login_form.style.padding = "10px 80px 10px 20px";
            change_sign = true;
        }
        else {
            login_form.style.width = "0px";
            login_form.style.padding = "0px";
            change_sign = false;
        }
    }
    else if (event.target != login_form && event.target.parentNode != login_form) {
        login_form.style.width = "0px";
        login_form.style.padding = "0px";
        change_sign = false;
    }
})

let eject = document.querySelectorAll("#eject_country>div");
// console.log(eject)
let bottom_button = document.querySelectorAll(".bottom-section>ul>li");
// console.log(bottom_button[0].innerText)
let j;
for (let i = 0; i < bottom_button.length; i++) {
    bottom_button[i].addEventListener("click", (event) => {
        // console.log(event.target.innerText)
        let tag = document.querySelector("#selector");

        eject[i].style.width = "92%";
        bottom_button[i].style.color = "black";

        j = (i + 1) % eject.length;
        eject[j].style.width = "0%"
        bottom_button[j].style.color = "gray";

        j = (i + 2) % eject.length;
        bottom_button[j].style.color = "gray";
        eject[j].style.width = "0%"


        if (event.target.innerText == "ASIA") {
            tag.style.left = "0px"
            tag.style.width = "60px"
        }
        if (event.target.innerText == "EUROPE") {
            tag.style.left = "125px"
            tag.style.width = "80px"
        }
        // console.log(event.target.innerText)
        if (event.target.innerText == "NORTH AMERICA") {
            tag.style.left = "275px"
            tag.style.width = "140px"
        }
    })
}

