$(document).ready(function () {
    // All the button functions
    var topics = ["Avengers", "Friends", "Harry Potter", "How I met your mother", "Beauty and the Beast", "Pride and Predjudice", "Supernatural", "Game of Thrones", "Pirates of the Carribeans", "Goodwill Hunting"]
    createButtons();
    $("#submitButton").on("click", function () {
        event.preventDefault();
        var newShow = $("#user-input").val().trim();

        console.log(newShow);

        topics.push(newShow);
        createButtons();
    });
    //looping on topics

    function createButtons() {
        $('#display-buttons').empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>").text(topics[i]);
            button.addClass('newButton')
            button.attr("data-name", topics[i]);
            $("#display-buttons").append(button);
        }
    }
    $(document).on('click', function () {
        $(".newButton").on('click', function () {

            var movie = $(this).attr("data-name")
            var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=6FeZkmjXbl4mABjEJ76VZMnA3pOdhYNB&q=" + movie + "&limit=10";
            $.ajax({
                url: queryUrl,
                method: "GET"
            }).then(function (response) {
                var results = response.data
                console.log(results);
                for (var i = 0; i < topics.length; i++) {

                    var showDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var imageUrl = response.data[i].images.fixed_height.url;
                    var imageStillUrl = response.data[i].images.fixed_height_still.url;
                    var showImage = $("<img>");

                    showImage.addClass("gifPic");
                    showImage.attr("src", imageStillUrl);
                    showImage.attr('alt', 'gif');
                    showImage.attr('data-state', 'still');
                    showImage.attr('data-still', imageStillUrl);
                    showImage.attr('data-animate', imageUrl);

                    showDiv.append(p);
                    showDiv.append(showImage);
                    $("#display-images").prepend(showDiv);
                }
            });
        });
        // Setting animate and still functions
        function playGif() {
            var state = $(this).attr('data-state');
            if (state === 'still') {
                $(this).attr('src', $(this).attr('data-animate'));
                $(this).attr('data-state', 'animate');
            }
            else {
                $(this).attr('src', $(this).attr('data-still'));
                $(this).attr('data-state', 'still');
            }
        }
        $(document).on("click", ".gifPic", playGif);
    });
});





