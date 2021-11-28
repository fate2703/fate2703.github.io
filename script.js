console.log("Hi");

$(document).ready(function() {
    console.log("ready!");
    $(".side-scroll").on('click', function(event){ 
        event.preventDefault();
        var o =  $( $(this).attr("href") ).offset();   
        var sT = o.top - $(".nav-dark").outerHeight(true); // get the fixedbar height
        // compute the correct offset and scroll to it.
        window.scrollTo(0,sT);
    });

    window.onscroll = function() {scrollFunction()};
    let mybutton = document.getElementById("back-to-top-id");

    function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    $("#back-to-top-id").click(function(){    
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

