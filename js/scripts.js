
function newItem() {

    //jQuery
    //1. Adding a new item to the list of items: 

    // create list item
    let li = $('<li></li>');

    // define list
    let list = $('#list');

    // define input value as the value of the input element
    let inputValue = $('#input').val();

    // define text as the input value appended to the list item
    li.append(inputValue);

    // if else that alerts if nothing is entered, else appends text as list item to list
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        list.append(li)
    }

    //2. Crossing out an item from the list of items:

    function crossOut() {
        li.toggleClass("strike");
    }

    li.on('dblclick', crossOut);

    //3(i). Adding the delete button "X": 

    let crossOutButton = $('<crossOutButton>x</crossOutButton>');
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

    function deleteListItem() {
        li.addClass("delete");
    };

    // 4. Reordering the items: 
    $('#list').sortable();

}










