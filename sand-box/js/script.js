
/****************************************
*****************HEADER******************
****************************************/

$(function(){
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        return false;
    });
});

/****************************************
*****************MAIN********************
****************************************/

/* section 1 Fortune */

document.addEventListener('DOMContentLoaded', () => {
    const section01Target = document.getElementById('section01-target');
    const section01Toggle = document.getElementById('section01-toggle');
    section01Target.addEventListener('click', () => {
        section01Target.classList.add('section01-circle');
    });
    section01Toggle.addEventListener('click', () => {
        section01Toggle.classList.toggle('section01-circle');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fortune = document.createElement('div');
    fortune.classList.add('section01-box');
    fortune.addEventListener('click', () => {
        fortune.classList.toggle('section01-circle');
    });

    const fortuneWrapper = document.getElementById('section01-fortune-wrapper');
    fortuneWrapper.appendChild(fortune);
});
