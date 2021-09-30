//Agregamos la libreria Muuri al contenedor que contiene la clase .grid
const grid = new Muuri('.grid',{
    layout: {
        rounding: false 
    }
});

//Agregamos los listeners de los enlaces para seleccionar 
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    
    document.getElementById('grid').classList.add('refresh')
});