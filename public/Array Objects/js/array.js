function showall() {
        const list = document.getElementById('list');
        let nameList = "";
        names.forEach(element => {
            nameList += element + "<br/>";
    });
    list.innerHTML = nameList;
}

function add() {
    const name = document.getElementById('name').value;
    names.push(name);
    console.log(name);
    showall();
    document.getElementById("name").value = "";

}
