function toggle() {
    let button = document.querySelector('.button');
    let text = document.getElementById('extra');

        if(button.textContent == 'Less'){
            text.style.display = 'none'
            button.textContent = 'More'
        }else if(button.textContent == 'More'){
            text.style.display = 'block'
            button.textContent = 'Less'
        }
}