function greeting(name){
    const elementoSaluto = document.getElementById('saluto');
    elementoSaluto.textContent = `Ciao, ${name}! Benvenuto nella nostra pagina.`;
    
}

//document.addEventListener('DOMContentLoaded', greeting("Daniel"));