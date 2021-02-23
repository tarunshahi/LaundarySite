$(function () {

    $(window).on('scroll', function() {
        if($(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      $("#contact-form").on('submit',(e) => {
            console.log("form submit is clicked");
            buildString();
            document.getElementById('contact-form').reset();
      })


      function buildString(){
        var to = 'tarunarya1993@gmail.com', // enter the email addrress where you want to send mail
            name = encodeURIComponent(document.getElementById('name').value),
            email = encodeURIComponent(document.getElementById('email').value),
            body = encodeURIComponent(document.getElementById('body').value);
            // link = document.getElementById('link'),

            message = 'mailto:'+to
            name||email||body ? message+='?':false;
            name || email ? message+=`subject=Contact-${name}-${email}`:false;
            body ? message+=`&body=${body}`:false
            console.log("message",message);

            var a = document.createElement('a');
            a.target = '_blank';
            a.href = message;
            a.click();

      }

});