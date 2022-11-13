let money = JSON.parse(localStorage.getItem("money")) || [];

if (money.length) {
    document.querySelector("#curr_value").innerHTML = money[money.length - 1]
}


let hei = window.innerHeight - document.querySelector(".nav").style.height;
console.log(`${hei}px`)
document.querySelector(".map").style.height = `${hei}px`


// ask in the stanup
window.addEventListener("resize", function (event) {
    hei = window.innerHeight - document.querySelector(".nav").style.height;
    document.querySelector(".map").style.height = `${hei}px`
})


let outterdata = [];
let data = JSON.parse(localStorage.getItem("data"));

fetch("https://636c87a7ad62451f9fcc651b.mockapi.io/locations")
    .then((res) => res.json())
    .then((dat) => display(dat));

let results = [];

function display(dat) {
    console.log(dat)
    results = dat.filter((elem) => {
        if (data == undefined) {
            return true;
        }
        let temp = data.name.toLowerCase();
        return elem.name.toLowerCase().includes(temp);
    })
    outterdata = results
    showresult(results)
}


function showresult(result) {
    let result_data = document.querySelector(".map-cards");
    result_data.innerHTML = "";
    document.querySelector("#total_results").innerHTML = `Total ${result.length} Results`;
    for (let i = 0; i < result.length; i++) {
        let maindiv = document.createElement("div");

        //  img 
        let img = document.createElement("img");
        img.src = result[i].image;
        let div = document.createElement("div");
        div.setAttribute("class", "data")
        // 1st div
        let div1 = document.createElement("div");
        div1.setAttribute("class", "content-hover");
        let h1 = document.createElement("h1");
        h1.innerHTML = result[i].name;
        let p1 = document.createElement("p");
        p1.innerHTML = result[i].city + "-" + result[i].state;
        div1.append(h1, p1);

        // 2nd div
        let div2 = document.createElement("div");
        let button1 = document.createElement("button");
        button1.setAttribute("class", "content-hover")
        button1.innerHTML = "STUDIO";

        let button2 = document.createElement("button");
        button2.setAttribute("class", "content-hover")
        button2.innerHTML = "GUESTS";

        let button3 = document.createElement("button");
        button3.setAttribute("class", "content-hover")
        button3.innerHTML = "WIFI";

        let button4 = document.createElement("button");
        button4.setAttribute("class", "content-hover")
        button4.innerHTML = "TV";

        div2.append(button1, button2, button3, button4);

        // 3rd div
        let div3 = document.createElement("div");
        div3.setAttribute("class", "align");
        div3.setAttribute("class", "content-hover");
        let h3 = document.createElement("h3");
        h3.innerHTML = document.querySelector("#curr_value").innerHTML + " " + result[i].price;
        let span3 = document.createElement("span");
        span3.style.color = "gray";
        span3.style.padding = "8px 0 0 9px";
        span3.innerHTML = "per night";
        div3.append(h3, span3);

        document.querySelector("#total_results").innerHTML = "Total " + result.length + " Results"

        div.append(div1, div2, div3);
        maindiv.append(img, div);
        result_data.append(maindiv)
    }
}
let change = false;
let valuesort = document.querySelector("#valuesort");
window.addEventListener("mouseup", function (event) {
    let elem = document.querySelector("#sort");

    if (event.target == elem || event.target.parentNode == elem) {
        if (change == false) {
            valuesort.style.width = "216px"
            valuesort.style.padding = "5px 17px 9px 11px"
            change = true;
        }
        else {
            valuesort.style.width = "0"
            valuesort.style.padding = "0"
            change = false;
        }
    }
    else {
        valuesort.style.width = "0"
        valuesort.style.padding = "0"
        change = false;
    }
})

document.querySelector("#sortinc").addEventListener("mouseup", () => {

    fetch("https://636c87a7ad62451f9fcc651b.mockapi.io/locations?sortBy=price")
        .then((res) => res.json())
        .then((dat) => display(dat));
})

document.querySelector("#sortdec").addEventListener("click", () => {
    let newdata = []
    fetch("https://636c87a7ad62451f9fcc651b.mockapi.io/locations?sortBy=price")
        .then((res) => res.json())
        .then((dat) => {
            newdata = dat;
            let temp;
            for (let i = 0; i < newdata.length / 2; i++) {
                temp = newdata[i];
                newdata[i] = newdata[newdata.length - 1 - i];
                newdata[newdata.length - 1 - i] = temp;
            }
            display(newdata)
        });
})





// for toggle

let email = JSON.parse(localStorage.getItem("email")) || [];

function open1() {
    document.querySelector(".curtain").style.width = "300px"
}
function x() {
    document.querySelector(".curtain").style.width = "0%"
}


// for currency
let change1 = false;
let currency = document.querySelector("#currency-elements");


window.addEventListener("mouseup", function (event) {
    let elem = document.querySelector("#inr");
    if (event.target == elem || event.target.parentNode == elem) {
        if (change1 == false) {
            currency.style.width = "300px"
            change1 = true;
        }
        else {
            currency.style.width = "0"
            change1 = false;
        }
    }
    else if (event.target != currency && event.target.parentNode != currency) {
        currency.style.width = "0";
        change1 = false;
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

if (email.length) {
    console.log(email)
    console.log(email[email.length - 1])
    let h4 = document.createElement("h4").innerHTML = email[email.length - 1]
    document.querySelector("#login-icon").append(h4)
}


// document.querySelector("#form").addEventListener("submit", (event) => {
//     event.preventDefault()
//     let flag = false;
//     let email = document.querySelector("#email").value;


//     if (email == "") {
//         alert("Please Enter Your Email ID")
//     }
//     else {
//         document.querySelector(".signin").style.height = "0";
//         localStorage.setItem("email", JSON.stringify(email));
//         let heading = document.querySelectorAll("#login-icon>h4");
//         for (let i = 0; i < heading.length; i++) {
//             heading[i].remove()
//         }
//         let h4 = document.createElement("h4");
//         h4.innerHTML = email;
//         h4.style.marginLeft = "23px"

//         document.querySelector("#login-icon").append(h4);

//     }
// })

window.addEventListener("click", (event) => {
    let value = document.querySelector("#login-form");
    // let form = document.querySelector("#form");
    if (event.target == value || event.target.parentNode == value) {
        document.querySelector(".signin").style.height = "100vh";
    }
    // else if ((event.target != form && event.target.parentNode != form)) {
    //     document.querySelector(".signin").style.height = "0";
    // }
})

window.addEventListener("click", (event) => {
    let value = document.querySelector("#login-form");
    if (event.target == value || event.target.parentNode == value) {

        document.querySelector("#login-form").style.width = "0";
        document.querySelector("#login-form").style.padding = "0";
    }
})


// code for the index slider footer

let eject = document.querySelectorAll("#eject_country>div");
// console.log(eject)
let bottom_button = document.querySelectorAll(".bottom-section>ul>li");




