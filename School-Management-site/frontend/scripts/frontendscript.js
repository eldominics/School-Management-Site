 
function toggler() {

    const toggleItem = document.querySelectorAll('.toggle-item');
    toggleItem.forEach(item => item.classList.toggle('toggle-show') )
    toggleItem.forEach(item => item.classList.remove('toggle-off') )
    
    document.getElementById('menu-id').setAttribute('class', 'toggle-off') 
    document.getElementById('close-id').setAttribute('class', 'tog-div') 
}

function toggleOff(){

    const toggleItem = document.querySelectorAll('.toggle-item')
    toggleItem.forEach(item => item.classList.toggle('toggle-off') )
    toggleItem.forEach(item => item.classList.remove('toggle-show') )

    document.getElementById('close-id').setAttribute('class', 'toggle-off') 
    document.getElementById('menu-id').setAttribute('class', 'tog-div')   
}


document.getElementById('user').innerHTML = sessionStorage.getItem('userName');

        
   