// (() => { 
//     // state variables
//     let toDoListArray = [];
//     // ui variables
//     const form = document.querySelector(".form"); 
//     const input = form.querySelector(".form__input");
//     const ul = document.querySelector(".toDoList"); 

//     // event listeners
//     form.addEventListener('submit', e => {
//       // prevent default behaviour - Page reload
//       e.preventDefault();
//       // give item a unique ID
//       let itemId = String(Date.now());
//       // get/assign input value
//       let toDoItem = input.value;
//       //pass ID and item into functions
//       addItemToDOM(itemId , toDoItem);
//       addItemToArray(itemId, toDoItem);
//       // clear the input box. (this is default behaviour but we got rid of that)
//       input.value = '';
//     });

//     ul.addEventListener('click', e => {
//       let id = e.target.getAttribute('data-id')
//       if (!id) return // user clicked in something else      
//       //pass id through to functions
//       removeItemFromDOM(id);
//       removeItemFromArray(id);
//     });

//     // functions 
//     function addItemToDOM(itemId, toDoItem) {    
//       // create an li
//       const li = document.createElement('li')
//       li.setAttribute("data-id", itemId);
//       // add toDoItem text to li
//       li.innerText = toDoItem
//       // add li to the DOM
//       ul.appendChild(li);
//     }

//     function addItemToArray(itemId, toDoItem) {
//       // add item to array as an object with an ID so we can find and delete it later
//       toDoListArray.push({ itemId, toDoItem});
//       console.log(toDoListArray)
//     }

//     function removeItemFromDOM(id) {
//       // get the list item by data ID
//       var li = document.querySelector('[data-id="' + id + '"]');
//       // remove list item
//       ul.removeChild(li);
//     }

//     function removeItemFromArray(id) {
//       // create a new toDoListArray with all li's that don't match the ID
//       toDoListArray = toDoListArray.filter(item => item.itemId !== id);
//       console.log(toDoListArray);
//     }

//   })();



// const form = document.querySelector(".form");
// const input = form.querySelector(".form__input");
// const ul = document.querySelector(".toDoList");



// form.addEventListener('submit', e => {
//     e.preventDefault();
//     let localItems = JSON.parse(localStorage.getItem('localItem'))
//     if (localItems === null) {
//         taskList = []
//     }else {
//         taskList = localItems
//     }
//     taskList.push(input.value)
//     localStorage.setItem('localItem', JSON.stringify(taskList))

//     showList()
// })


// function showList() {
//     let outPut = ''
//     const taskListShow = document.querySelectorAll('.toDoList')

//     let localItems = JSON.parse(localStorage.getItem('localItem'))
//     if(localItems === nul){
//         taskList = []
//     }else{
//         taskList = localItems
//     }

//     taskList.forEach(data, index => {
//         outPut +=`
//         <li>${index}</li>
//         <button class="delete">Delete</button>
//         `
//     });

//     taskListShow.innerHtml = outPut
// }

// function deleteItem(index) {
//     let localItems = JSON.parse(localStorage.getItem('localItem'))
//     taskList.splice(index, 1)
//     localStorage.setItem('localItem', JSON.stringify(taskList))

//     showList()
// } 








const inputVal = document.getElementsByClassName('form__input')[0];

const addTaskBtn = document.getElementsByClassName('button')[0];


addTaskBtn.addEventListener('click', function () {

    if (inputVal.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem('localItem'))
        if (localItems === null) {
            taskList = []

        } else {
            taskList = localItems;
        }
        taskList.push(inputVal.value)
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }

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