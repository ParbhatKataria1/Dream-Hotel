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

        let temp = data.name.toLowerCase();
        return elem.name.toLowerCase().includes(temp);
    })
    outterdata = results
    showresult(results)
}


function showresult(result) {
    let result_data = document.querySelector(".map-cards");
    result_data.innerHTML = "";
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