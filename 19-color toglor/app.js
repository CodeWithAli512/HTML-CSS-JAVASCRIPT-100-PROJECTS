let togglor = document.getElementById('switch');
togglor.addEventListener('click',()=>{
    if(togglor.checked === true){
        document.body.style.backgroundColor = 'black'
    }else{
        document.body.style.backgroundColor = 'white'

    }
})