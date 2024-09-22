$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
    
            const scriptURL = '<https://script.google.com/macros/s/AKfycbzYVZcCUxOqkh6GxpoWGSkPoCsT6uF4TAhjx_j9MTyWf6wKtMV8BsjVLR_VF-pZkGYxlg/exec>'
            const form = document.forms['submit-to-google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
            })
            
});

 //Clear form
             
 function clearForm() {
    document.getElementById("myForm").reset();
};

 // Download Button
           
 document.getElementById("downloadBtn").addEventListener("click", function() {
    // Image URL
    var imageUrl = "https://drive.google.com/file/d/1XTSOzXMde2rvDiibTseLqhVtd-QZVwbC/view?usp=sharing";

    // Create a temporary <a> element
    var link = document.createElement("a");
    link.href = imageUrl;
    link.download = "CV.jpg"; // Specify the desired file name

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
});

    //To open in new tab Hire me Button


    function NewTab() {
        window.open(
        "form.html", "_blank");
    };
               
                