$(document).ready(function () {

    $('#menu').click(function () {
        if ($('#mobile').is(':visible'))
            $('#mobile').hide()
        else
            $('#mobile').show()
    })

    window.onresize = function (event) {
        $('#mobile').hide()
    }

    window.onresize = function (event) {
        $('#block').animate();
    }

    $(window).scroll(function () {

        if ($(window).scrollTop() > 680) {

            $('a').css('color', 'rgb(218, 218, 218)')
        }
        else
            $('a').css('color', 'rgb(56, 56, 56)')
    })

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#totop').fadeIn();
            } else {
                $('#totop').fadeOut();
            }
        });
        
        $('#totop').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 800);
        });
    });

})

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop+outerHeight/1.22,
        behavior: 'smooth'
    })
}

var b1 = document.querySelector('.toill');
var to1 = document.querySelector('#ill');
b1.addEventListener('click', () => {
    scrollTo(to1);
})

var b2 = document.querySelector('.tologos');
var to2 = document.querySelector('#logos');
b2.addEventListener('click', () => {
    scrollTo(to2);
})

var b3 = document.querySelector('.tosets');
var to3 = document.querySelector('#sets');
b3.addEventListener('click', () => {
    scrollTo(to3);
})

var b4 = document.querySelector('.tome');
var to4 = document.querySelector('#proj');
b4.addEventListener('click', () => {
    scrollTo(to4);
})
//-----------------------------------
var b5 = document.querySelector('.mtoill');
b5.addEventListener('click', () => {
    scrollTo(to1);
})

var b6 = document.querySelector('.mtologos');
b6.addEventListener('click', () => {
    scrollTo(to2);
})

var b7 = document.querySelector('.mtosets');
b7.addEventListener('click', () => {
    scrollTo(to3);
})

var b8 = document.querySelector('.mtome');
b8.addEventListener('click', () => {
    scrollTo(to4);
})