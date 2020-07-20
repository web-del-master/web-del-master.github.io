window.onload = function (){
    let pay_descr = document.querySelectorAll('.pay_descr__card');
    let btn_tab = document.querySelectorAll('.btn_tab');

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