    window.onload = function(){
        let Numerals = document.getElementsByClassName("Shulte_Numeral"),
            restart = document.getElementsByClassName("restart"),
            s = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],            
            m = 1;

        function compareRandom(a, b) {
                return Math.random() - 0.5;
              }

        function perem (){           
            m = 1;           
            s.sort(compareRandom);
            for(let i = 0; i < Numerals.length; i++ ) {
                Numerals[i].textContent = s[i];
            }
           }

        restart[0].addEventListener("click", function(){
              perem();
              restart[0].textContent = "Заново";
          });

          for(let i = 0; i < 25; i++ ) {
                Numerals[i].addEventListener("click", function(){
                      let nume = Numerals[i].textContent;                       
                      if(+nume === m){
                          console.log(m);
                          m++;
                          for(let i = 0; i < 25; i++ ){
                            Numerals[i].style.cssText = "background: #fff;";
                          }                          
                      }else{
                          Numerals[i].style.cssText = "background: #000;";
                          console.log("ошибка");
                      }                     
                });
            }       
    };
    

