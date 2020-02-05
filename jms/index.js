window.onload = ()=>{
    let getData = document.querySelector('button[type="submit"]');
        selectUser = document.querySelector('select'),
        userOption = '';  
    let container = document.createElement('div');
        container.classList.add('lang');
        document.body.appendChild(container);
        


    selectUser.addEventListener('change',(e)=>{
        if(selectUser.value == ''){
            return false;
        }else{
            return userOption = selectUser.value;
        }        
    });

    getData.addEventListener('click',(e)=>{
        e.preventDefault();
        let endpiont = ''
            if(userOption == ''){
                endpiont = 'https://frontend-test-api.alex93.now.sh/api/languages';
            }else{
                endpiont = 'https://frontend-test-api.alex93.now.sh/api/languages?group=';
            }
        
        let url = endpiont + userOption;
                
            ajaxGet(url, function (data){
                let obj = data;
                let z = JSON.parse(obj);                 
                createVueElem(getLogo(z.data));
            });
    });

    function createVueElem(arr){ 
    let elemArr = [];
       while (container.firstChild) {
        container.removeChild(container.firstChild);
        } 
        for(let i =0; i < arr.length; i++){  
            let showObj = arr[i];
            let section = document.createElement('div');
            let img =     document.createElement('img');
            let section2 = document.createElement('div');
            let h1 =      document.createElement('h1');
            let p =       document.createElement('p');
            let p2 =       document.createElement('p');
            let a =       document.createElement('a');            
                section.appendChild(img).setAttribute('src', showObj.logo);
                section.appendChild(section2);
                    section2.appendChild(h1).innerHTML = showObj.name;
                    section2.appendChild(p).innerHTML = `Основан в ${showObj.year} <br> ${showObj.projectsCount} проектов на Github`;
                    section2.appendChild(a).setAttribute('href', showObj.docs);
                    section2.children[2].innerHTML = "Документация";
            elemArr.push(section.innerHTML);            
        }
        for(let i =0; i < elemArr.length; i++){
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML =  elemArr[i];
            container.appendChild(item);
        }
    }

    function ajaxGet (url, callback){
        let request = new XMLHttpRequest();
        let f = callback || function(data){};
    
        request.onreadystatechange = ()=>{
            if(request.readyState == 4 && request.status == 200){
                f(request.responseText);
            }
        };    
        request.open('GET', url);
        request.send();
    }
    
    function getLogo (arr){
        let myArr = [];
            for(let i=0; i<arr.length;i++){
                    let p = arr[i];
                        if(p.logo){
                            myArr.push(arr[i])
                        }
                }
        return myArr;    
    }
};

