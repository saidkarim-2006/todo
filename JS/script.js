const inputVal = document.getElementsByClassName('form__input')[0];

const addTaskBtn = document.getElementsByClassName('button')[0];


addTaskBtn.addEventListener('click', function () {


    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = []

    } else {
        taskList = localItems;
    }
    taskList.push(inputVal.value)
    localStorage.setItem('localItem', JSON.stringify(taskList));


    showItem()
})

function showItem() {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = []

    } else {
        taskList = localItems;
    }


    let html = '';
    let itemShow = document.querySelector('.toDoList');
    taskList.forEach((data, index) => {


        html += `
        <li>
        <p class="pText" style="display:inline">${data}</p>
        <button class="deleteTask button" onClick="deleteItem(${index})" style="display:inline"><span><i class="fa-solid fa-trash"></i></span~></button>
        </li>
   `
    })
    itemShow.innerHTML = html;
}
showItem()

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask() {

    localStorage.clear()
    showItem()
}