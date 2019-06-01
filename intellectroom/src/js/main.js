let chislo = document.querySelector(".span-chislo");
let nomer = document.querySelectorAll(".nomer-chislo");
let btn = document.querySelectorAll(".nomer");
let x;
let vibor;
restart();

function restart(){
    chislo.style.color = '#FFFFFF'
    x = Math.floor((Math.random() * 98) +1);
    vibor = Math.floor(Math.random() * 8);

    chislo.innerHTML = x;

for(let i=0; i<8; i++){
    let gener = Math.floor(Math.random() * 100);  
        if(i==vibor){
            nomer[i].innerHTML = x;
        }else{
            nomer[i].innerHTML = gener;
        }
    }
}
for(let i=0; i<8; i++){
        btn[i].addEventListener('click',()=>{
            if(x==nomer[i].innerHTML){
                chislo.style.color = 'green';
                setTimeout(restart(), 3000);
                                
            }else{
                chislo.style.color = 'red';
                setTimeout(restart(), 3000) ;               
            }
        });
    }