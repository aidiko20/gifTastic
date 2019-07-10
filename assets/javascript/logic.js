$(document).ready(function () {


    var topics = ["Avengers", "Friends", "Harry Potter", "How I met your mother", "Beauty and the Beast", "Pride and Predjudice"]

    console.log(topics);
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>").text(topics[i]);
        $("#display-buttons").append(button);
    }

});