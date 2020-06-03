// Heart or wish Button

$(document).ready(function(){
    $(".wish-icon i").click(function(){
        $(this).toggleClass("fa-heart fa-heart-o");
    });
});


// Start rating Button
$(document).ready(function(){
    $(".star-rating i").click(function(){
        $(this).toggleClass("fa-star fa-star-o");
    });
});

