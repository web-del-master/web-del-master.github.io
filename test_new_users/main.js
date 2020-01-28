window.onload = function(){
    let self_rating_result =        document.querySelector('.self_rating_result');
    let self_acceptance_result =    document.querySelector('.self_acceptance_result');
    let scope_result =              document.querySelector('.scope_result');
    let emotion_result =            document.querySelector('.emotion_result');
    let sexuality_result =          document.querySelector('.sexuality_result');
    let fear_result =               document.querySelector('.fear_result');
    let past_relationships_result = document.querySelector('.past_relationships_result');
    let communication_result =      document.querySelector('.communication_result');

    let get_result =                document.querySelector('.get_result');

    let self_rating_item =  0;
    let self_acceptance_item =  0;
    let scope_item=  0;
    let emotion_item=  0;
    let sexuality_item=  0;
    let fear_item=  0;
    let past_relationships_item=  0;
    let communication_item=  0;

    get_result.addEventListener('click', result);

      
    function result(){
        let check = document.querySelectorAll('input:checked'); 

        if(check.length == 33 ){
            for(let i=0; i< check.length; i++){
                if(check[i].classList.contains('self-rating_item')){
                    self_rating_item += +(check[i].id);
                }else if(check[i].classList.contains('self-acceptance_item')){
                    self_acceptance_item += +(check[i].id);
                }else if(check[i].classList.contains('scope_item')){
                    scope_item += +(check[i].id);
                }else if(check[i].classList.contains('emotion_item')){
                    emotion_item += +(check[i].id);
                }else if(check[i].classList.contains('sexuality_item')){
                    sexuality_item += +(check[i].id);
                }else if(check[i].classList.contains('fear_item')){
                    fear_item += +(check[i].id);
                }else if(check[i].classList.contains('past_relationships_item')){
                    past_relationships_item += +(check[i].id);
                }else if(check[i].classList.contains('communication_item')){
                    communication_item += +(check[i].id);
                }                
            }  
            inpur_disable();
            set_summ();
        } else {
            console.log('вы ответили не на все вопросы')
        }          
    }

    function inpur_disable(){
        let input_disable = document.querySelectorAll('input');
            for(let i=0; i < input_disable.length; i++){
                input_disable[i].disabled = true;
            }
    }

    function set_summ(){ 
        self_rating_result.innerHTML =          self_rating_item;
        self_acceptance_result.innerHTML =      self_acceptance_item;
        scope_result.innerHTML =                scope_item;
        emotion_result.innerHTML =              emotion_item;
        sexuality_result.innerHTML =            sexuality_item; 
        fear_result.innerHTML =                 fear_item;
        past_relationships_result.innerHTML =   past_relationships_item;
        communication_result.innerHTML =        communication_item;      

    }

    // // получаем псевдомассивы элементов 
    // let self_rating = document.querySelectorAll('.self-rating_item');
    // let self_acceptance = document.querySelectorAll('.self-acceptance_item');


    // // Считаем баллы по каждой категории 
    // let self_rating_summ = 0;    
    // let self_acceptance_summ = 0;    


    // // Получаем элементы html для сохранения ответов
    // let self_rating_result = document.querySelector('.self_rating_result');
    // let self_acceptance_result = document.querySelector('.self_acceptance_result');


    // for(let i = 0; i < self_rating.length; i++){
    //     self_rating[i].addEventListener('click', get_result);
    // }

    // for(let i = 0; i < self_acceptance.length; i++){
    //     self_acceptance[i].addEventListener('click', get_result);
    // }
    


    // function get_result(e){
    //     let check = document.querySelectorAll('input:checked');
        
    //     // проверяем на какой категории сработало событие
    //     if(e.target.classList.contains("self-rating_item")) {
    //                 // let get_all_instring = document.getElementsByName(e.target.name);
    //                 // console.log(get_all_instring)
    //                 // for(let i=0; i<get_all_instring.length; i++ ){
    //                 //     if(get_all_instring[i].checked){
    //                 //         console.log(self_rating_summ)
    //                 //         // self_rating_summ -= +get_all_instring[i].id
    //                 //     }
    //                 // }
    //         self_rating_summ += +(e.target.id); 
    //         console.log(self_rating_summ)
    //     }
    //     if(e.target.classList.contains("self-acceptance_item")) {
    //         self_acceptance_summ += +(e.target.id); 
    //     }          

    //     // Проверяем количество элементов с флагом checked 
    //     if(check.length == 8 ){

    //                 let input_disable = document.querySelectorAll('input');
    //                     for(let i=0; i < input_disable.length; i++){
    //                         input_disable[i].disabled = true;
    //                     }

    //         self_rating_result.innerHTML = self_rating_summ;
    //         self_acceptance_result.innerHTML = self_acceptance_summ;
    //     }
            
            
            
        // }
   

}


