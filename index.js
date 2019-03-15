$(document).ready(function () {

 

    $("td").click(function () {
        // console.log(parseInt(prompt("Type number to insert.")));
        // playing();

        if ($(this).text() === "") {

            $(this).text(parseInt(prompt("Enter a number.")));
        }


    });




})

var random = function () {

    // document.getElementById("cell"+i).innerHTML =
    //     Math.floor(Math.random() * 10)+1;
    $("td").text( document.getElementById("cell"+i).innerHTML =
    Math.floor(Math.random() * 10)+1);
}

var board = [

    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []

]

var playing = function () {
    board[0].push(prompt("Type number to insert."));
    return board[0];
}

var printing = function (arr, ind) {
    board[i]
}