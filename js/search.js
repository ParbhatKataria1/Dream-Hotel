



for (let i = 0; i < 49; i++) {
    let opt = document.createElement("option");
    opt.value = 1;
    opt.innerHTML = (i + 2) + " guests"
    document.querySelector("#guest").append(opt);
}

document.querySelector("#buttons").addEventListener("click", getdata);

function getdata() {
    localStorage.clear()
    let name = document.querySelector("#location").value;
    if (name == "") {

        let p = document.createElement("p");
        p.innerHTML = "Location Required";
        document.querySelector("#alert-msg").innerHTML = ""
        document.querySelector("#alert-msg").append(p);
        return
    }
    let checkin = document.querySelector("#checkin").value;
    let checkout = document.querySelector("#checkout").value;
    let guest = document.querySelector("#guest").value;
    let obj = {
        name, checkin, checkout, guest
    }
    console.log(1)
    localStorage.setItem("data", JSON.stringify(obj));
    window.location.replace('../search.html');

}


