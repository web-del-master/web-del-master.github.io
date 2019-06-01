window.onload =function(){
    var sq = document.querySelectorAll('.square'); 
    var repeat_richt = [];
    var repeat_auto = [];   
    

    buildRanElement();

//цикл повторяется столько раз - чему равна переменная x и гененируя каждый раз случайное число применяет его к индексу псевдо м ассива sq
    function buildRanElement (){
                 // гунерация случайного количества повторейний цикла 
                var x = Math.floor((Math.random() * 12)+1);
                let i = 0;
                    while(i<x){
                        let z = Math.floor((Math.random() * 29));            
                        sq[z].style.backgroundColor ="green";
                        repeat_auto.push(z);
                        i++;
                    } 
                    // очищает все квадратики при этом у нас уже заполнен массив с  тем какие ячейки покрашены в в зеленый цвет   
                    setTimeout(function(){
                        for(let i = 0; i<sq.length; i++){            
                            sq[i].style.backgroundColor="#ffff";
                        }    
                    }, 2000);   
    }  


  



    function arrSum(arr){
        var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        }
        return sum;
    }

    // Обработчки событий на добавление зеленого цвета и зеленые заносим в массив
    for(let i = 0; i<sq.length; i++){
        sq[i].onclick = function(){           
                this.style.backgroundColor="green";
                repeat_richt.push(i);
                        
                if(repeat_richt.length >= repeat_auto.length){
                    let one = arrSum(repeat_richt);
                    let two = arrSum(repeat_auto);
                    
                    if(one == two){
                        buildRanElement();                        
                    } else{
                        alert("балбес")
                    } 
                    
               }
        };
    } 
  
    
      
};