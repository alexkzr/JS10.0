document.addEventListener('DOMContentLoaded', ()=>{
    'use strict';
    
    const popupShow = () => {
        const body = document.querySelector('body'),
        giftBtn = document.getElementById('gift'),
        callback = document.getElementById('callback_form',),
        freeVisit = document.getElementById('free_visit_form'),
        closegift = document.querySelector('.close_icon');
        body.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target;
    
            if(target.matches('.fixed-gift img')){
                giftBtn.style.display = 'block';
            } 
            if(target.matches('.free-visit img') || target.matches('.open-popup')){
                freeVisit.style.display = 'block';
            }
            if(target.matches('.callback-btn')){
                callback.style.display = 'block';
            }
            if(target.matches('.close_icon') || target.matches('.overlay') || target.matches('.close-btn')){
                giftBtn.style.display = 'none';
                freeVisit.style.display = 'none';
                callback.style.display = 'none';
            }
        })
    
    
    };
    popupShow();
    
    
    
    
    
    
    });