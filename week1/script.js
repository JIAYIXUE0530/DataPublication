function sayHello() {
    const name = prompt("What is your name?");

    console.log(name);

    const element = document.querySelector("#paragraph");
    element.innerHTML = "Hello ${name}!";
}