
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
    const section01Toggle = document.getElementById('section01-toggle');
    section01Toggle.addEventListener('click', () => {
        section01Toggle.classList.toggle('section01-circle');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const num = 5;
    const winner = Math.floor(Math.random() * num);
    for(let i=0; i<num; i++){
        const fortune = document.createElement('div');
        fortune.classList.add('section01-box');
        fortune.addEventListener('click', () => {
            if ( i == winner ) {
                fortune.classList.add('section01-win');
                fortune.textContent = 'WIN';
            } else {
                fortune.classList.add('section01-lose');
                fortune.textContent = 'LOSE';
            }
        });
        const fortuneWrapper = document.getElementById('section01-fortune-wrapper');
        fortuneWrapper.appendChild(fortune);        
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('section01-btn');
    btn.addEventListener('click',() => {
        const results = ['大吉', '中吉', '小吉', '凶']
        const n = Math.floor(Math.random() * results.length);
        btn.textContent = results[n];
        // switch (n) {
        //     case 0:
        //         btn.textContent = '大吉';
        //         break;
        //     case 1:
        //         btn.textContent = '中吉';
        //         break;
        //     case 2:
        //         btn.textContent = '小吉';
        //         break;
        //     case 3:
        //         btn.textContent = '凶';
        //         break;
        // }
    });
});









                