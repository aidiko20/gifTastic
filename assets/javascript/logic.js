$(document).ready(function () {

    // My variables
    var topics = ["Avengers", "Friends", "Harry Potter", "How I met your mother", "Beauty and the Beast", "Pride and Predjudice"]

    console.log(topics);
    //looping on topics
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>").text(topics[i]);
        $("#display-buttons").append(button);
    }
        $(document).click("button", function () {
            var movie = $(this).attr("#data-movie")
            var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=6FeZkmjXbl4mABjEJ76VZMnA3pOdhYNB&&limit=10";
            $.ajax({
                url: queryUrl,
                method: "GET"
            }).then(function (response) {
                var results = response.data
                for (var i = 0; i < topics.length; i++) {

                    var showDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var showImage = $("<img>");
 
                    showImage.attr("src", results[i].images.fixed_height.url);

                    showDiv.append(p);
                    showDiv.append(showImage);

                    $("#display-images").prepend(showDiv);
                }
                console.log(response)
            });
        });
    });





