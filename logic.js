

window.onload = function() {
    
    const screenSize = window.innerWidth;

    if (screenSize > 850){
        const small = document.getElementById("small");
        small.style.display = 'none'
    }




    else{
        const big = document.getElementById("big")
        big.style.display = 'none';
    }
}

