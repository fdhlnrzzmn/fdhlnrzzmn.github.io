window.onscroll = function(){
    const toTop = document.querySelector('#to-top');
    
    if (window.pageYOffset){
        toTop.classList.remove('hidden');
        toTop.classList.add('block');
    } else {
        toTop.classList.remove('block');
        toTop.classList.add('hidden');
    }
};