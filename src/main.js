const loginbutton = document.getElementById("loginsubmit");
const logininfo = document.getElementById("login");

loginbutton.addEventListener("click", () => {
    const username = login.username.value;
    const pass = login.password.value;

    if (username === "JOHNSMITH" && pass === "test") {
        window.location.href = `/test`
        alert("Success")
    } else {
        alert("Fail")
    }
})