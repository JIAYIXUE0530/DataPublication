const groceriesMap = new Map();

function addItem(){
    // 1) get value from input
    const name = document.querySelector("#name").value;
    const count = document.querySelector("#count").value;

    groceriesMap.set(name, Number(count));

    console.log(groceriesMap);

    // 2) create a new li element
    const listItem = document.createElement("li");
    listItem.innerText = 'name: ' + name + ', count: ' + count;

    // 3) append the new li element to the ul
    const list = document.querySelector("#list");
    list.appendChild(listItem);
}