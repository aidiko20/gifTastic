$(document).ready(function () {

    // My variables
    var topics = ["Avengers", "Friends", "Harry Potter", "How I met your mother", "Beauty and the Beast", "Pride and Predjudice"]

    console.log(topics);
    //
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>").text(topics[i]);
        $("#display-buttons").append(button);
    }


    $(document).click("button", function () {
        var movie = $(this).attr("data-movie")
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=6FeZkmjXbl4mABjEJ76VZMnA3pOdhYNB&q=" + movie + "&limit=10";
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response)
        });
    });
});


