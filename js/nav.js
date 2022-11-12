// for toggle

let email = JSON.parse(localStorage.getItem("email")) || [];
// localStorage.clear()

let money = JSON.parse(localStorage.getItem("money")) || [];
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
        money.push(curr_ele[i].outerText);
        localStorage.setItem("money", JSON.stringify(money));
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

if (money.length) {
    document.querySelector("#curr_value").innerHTML = money[money.length - 1]
}

if (email.length) {
    console.log(email[email.length - 1])
    let h4 = document.createElement("h4").innerHTML = email[email.length - 1]
    document.querySelector("#login-icon").append(h4)
}

// localStorage.clear()
document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault()
    let flag = false;
    let ema = document.querySelector("#email").value;


    if (ema == "") {
        alert("Please Enter Your Email ID")
    }
    else {
        document.querySelector(".signin").style.height = "0";
        email.push(ema)
        localStorage.setItem("email", JSON.stringify(email));
        document.querySelector("#login-icon").innerHTML = "";
        let h4 = document.createElement("h4");
        h4.innerHTML = ema;
        h4.style.marginLeft = "23px"

        document.querySelector("#login-icon").append(h4);

    }
})

window.addEventListener("click", (event) => {
    let value = document.querySelector("#login-form");
    let form = document.querySelector("#form");
    if (event.target == value || event.target.parentNode == value) {
        document.querySelector(".signin").style.height = "100vh";
    }
    else if ((event.target != form && event.target.parentNode != form)) {
        document.querySelector(".signin").style.height = "0";
    }
})

window.addEventListener("click", (event) => {
    let value = document.querySelector("#login-form");
    if (event.target == value || event.target.parentNode == value) {

        document.querySelector("#login-form").style.width = "0";
        document.querySelector("#login-form").style.padding = "0";
    }
})

document.querySelector("#email-submit").addEventListener("click", () => {
    let ema = document.querySelector("#email").value;
    email.push(ema);
    localStorage.setItem("email", JSON.stringify(email));

})

let eject = document.querySelectorAll("#eject_country>div");
// console.log(eject)
let bottom_button = document.querySelectorAll(".bottom-section>ul>li");

document.querySelector("#europe1").addEventListener("click", () => {
    let hr = document.querySelector("hr");
    hr.setAttribute("class", "selector");
    hr.style.width = "58px"
    document.querySelector("#europe1").append(hr);
    document.querySelector("#europe").style.width = "92%";

    if (document.querySelector("#asia1>hr"))
        document.querySelector("#asia1>hr").remove();
    document.querySelector("#asia").style.width = "0%";

    if (document.querySelector("#north-america1>hr"))
        document.querySelector("#north-america1>hr").remove()
    document.querySelector("#north-america").style.width = "0%";
})

document.querySelector("#asia1").addEventListener("click", () => {
    let hr = document.querySelector("hr");
    hr.setAttribute("class", "selector");
    hr.style.width = "35px"
    document.querySelector("#asia1").append(hr);
    document.querySelector("#asia").style.width = "92%";

    if (document.querySelector("#europe1>hr"))
        document.querySelector("#europe1>hr").remove();
    document.querySelector("#europe").style.width = "0%";

    if (document.querySelector("#north-america1>hr"))
        document.querySelector("#north-america1>hr").remove()
    document.querySelector("#north-america").style.width = "0%";
})

document.querySelector("#north-america1").addEventListener("click", () => {
    let hr = document.querySelector("hr");
    hr.setAttribute("class", "selector");
    hr.style.width = "123px"
    document.querySelector("#north-america1").append(hr);
    document.querySelector("#north-america").style.width = "92%";
    if (document.querySelector("#asia1>hr"))
        document.querySelector("#asia1>hr").remove();
    document.querySelector("#asia").style.width = "0%";

    if (document.querySelector("#europe1>hr"))
        document.querySelector("#europe1>hr").remove()
    document.querySelector("#europe").style.width = "0%";
})




// console.log(bottom_button[0].innerText)
// let j;
// for (let i = 0; i < bottom_button.length; i++) {
//     bottom_button[i].addEventListener("click", (event) => {
//         // console.log(event.target.innerText)
//         let tag = document.querySelector("#selector");

//         eject[i].style.width = "92%";
//         bottom_button[i].style.color = "black";

//         j = (i + 1) % eject.length;
//         eject[j].style.width = "0%"
//         bottom_button[j].style.color = "gray";

//         j = (i + 2) % eject.length;
//         bottom_button[j].style.color = "gray";
//         eject[j].style.width = "0%"


//         if (event.target.innerText == "ASIA") {
//             tag.style.left = "0px"
//             tag.style.width = "60px"
//         }
//         if (event.target.innerText == "EUROPE") {
//             tag.style.left = "125px"
//             tag.style.width = "80px"
//         }
//         // console.log(event.target.innerText)
//         if (event.target.innerText == "NORTH AMERICA") {
//             tag.style.left = "275px"
//             tag.style.width = "140px"
//         }
//     })
// }

