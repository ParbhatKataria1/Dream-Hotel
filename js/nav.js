// for toggle

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
console.log(eject)
let j;
for (let i = 0; i < eject.length; i++) {
    eject[i].addEventListener("click", () => {
        eject[i].style.width = "92%";
        j = (i + 1) % eject.length;
        eject[j].style.width = "0%"
        j = (i + 1) % eject.length;
        eject[j].style.width = "0%"
    })
}

