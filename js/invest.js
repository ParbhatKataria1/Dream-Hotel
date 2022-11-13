let data = [];
let change = false;
let email_list = JSON.parse(localStorage.getItem("email")) || [];


fetch("https://636e0580182793016f33d214.mockapi.io/locations")
    .then((res) => res.json())
    .then((res) => display(res));



function display(dat) {
    let main = document.querySelector(".invest-card");
    main.innerHTML = "";

    for (let i = 0; i < dat.length; i++) {


        let div = document.createElement("div");
        div.setAttribute("class", "invest-cards");

        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = dat[i].image;
        div1.append(img);



        let div2 = document.createElement("div");
        div2.setAttribute("class", "invest-content");


        let div21 = document.createElement("div"); //
        div21.setAttribute("class", "heading");

        let h21 = document.createElement("h2");
        h21.setAttribute("class", "blur")
        h21.innerHTML = dat[i].title;

        let button21 = document.createElement("button");
        button21.innerHTML = "Unlock";
        button21.addEventListener("click", (event) => {
            event.preventDefault();
            window.addEventListener("click", (event) => {
                let value = document.querySelector("#form");
                if (event.target == button21 || event.target.parentNode == button21) {
                    document.querySelector(".signin").style.height = "100vh";
                }
                else if ((event.target != value && event.target.parentNode != value)) {
                    document.querySelector(".signin").style.height = "0";
                }
            })

        })


        div21.append(h21, button21);
        div2.append(div21);

        let h22 = document.createElement("h3");
        h22.innerHTML = dat[i].address;
        h22.setAttribute("class", "blur")
        div2.append(h22);

        let p21 = document.createElement("p"); //
        p21.style.marginTop = "23px";
        p21.innerHTML = dat[i].desc
        div2.append(p21);

        let hr21 = document.createElement("hr");//
        div2.append(hr21);


        let div22 = document.createElement("div");
        div22.setAttribute("class", "content-moreinfo")

        let div221 = document.createElement("div");
        let h221 = document.createElement('h2');
        h221.innerHTML = "$ " + dat[i].price + "k"
        let p221 = document.createElement("p");
        p221.innerHTML = "Starting Price";
        div221.append(h221, p221);
        div22.append(div221);

        let div222 = document.createElement("div");
        let h222 = document.createElement('h2');
        h222.innerHTML = dat[i].count + "+";
        let p222 = document.createElement("p");
        p222.innerHTML = "Homes In A Community";
        div222.append(h222, p222);
        div22.append(div222);

        let div223 = document.createElement("div");
        let h223 = document.createElement('h2');
        h223.innerHTML = "NA%";
        let p223 = document.createElement("p");
        p223.innerHTML = "Target Yield";
        div223.append(h223, p223);
        div22.append(div223);

        let div224 = document.createElement("div");
        let h224 = document.createElement('h2');
        h224.innerHTML = dat[i].count / 1000 + "%";
        let p224 = document.createElement("p");
        p224.innerHTML = "Target 7 Year IRR";
        div224.append(h224, p224);
        div22.append(div224);

        div2.append(div22);

        let p23 = document.createElement("p");
        p23.innerHTML = dat[i].word;
        div2.append(p23);

        div.append(div1, div2);
        main.append(div);
    }
}
document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault()
    let flag = false;
    let email = document.querySelector("#email").value;
    for (let i = 0; i < email_list.length; i++) {
        if (email_list[i] == email) {

            flag = true;
        }
    }
    if (!flag) {
        alert("Please Enter the valid email ID or Sign-Up")
    }
    else {
        document.querySelector(".signin").style.height = "0";
        let arr = document.querySelectorAll(".blur");
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.textShadow = "none";
            arr[i].style.color = "black"
        }
    }
})