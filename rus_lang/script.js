window.onload = function (){
    let pay_descr = document.querySelectorAll('.pay_descr__card'),
        btn_tab = document.querySelectorAll('.btn_tab');

    let active_modal = document.querySelectorAll('.active_modal'),
        modal_bg = document.querySelector('.modal_bg'),
        modal_content = document.querySelector('.modal_content');
        del = document.querySelector('.del');

    modal_content.onclick = function(event){
        if(event.target== del && !(modal_bg.classList.contains('hidden') && modal_content.classList.contains('hidden'))){
            modal_bg.classList.add('hidden');
            modal_content.classList.add('hidden'); 
         }
    };
    modal_bg.onclick = function(e){
        if(!(modal_bg.classList.contains('hidden') && modal_content.classList.contains('hidden'))){
            modal_bg.classList.add('hidden');
            modal_content.classList.add('hidden'); 
         }  
    };
    for(let i=0; i< active_modal.length; i++){
        active_modal[i].onclick = function(e){
                 if(modal_bg.classList.contains('hidden') && modal_content.classList.contains('hidden')){
                    modal_bg.classList.remove('hidden');
                    modal_content.classList.remove('hidden'); 
                 }       
        }
    }

    for(let i=0; i< btn_tab.length; i++){
        btn_tab[i].onclick = function(e){
            removeClass(btn_tab, 'active');
            addClass(pay_descr, 'hidden');
            pay_descr[i].classList.remove('hidden');
            btn_tab[i].classList.add('active');            
        }
    }


    function removeClass(elem, clas){
        for(let i =0; i<elem.length; i++ ){
            if(elem[i].classList.contains(clas)){
                elem[i].classList.remove(clas)
            }
        }
    }
    function addClass(elem, clas){
        for(let i =0; i<elem.length; i++ ){
            if(!(elem[i].classList.contains(clas))){
                elem[i].classList.add(clas)
            }
        }
    }
}