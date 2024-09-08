class Main implements EventListenerObject{
    private mensaje:string = "Hello world";
    handleEvent(object: Event): void {
        alert(this.mensaje);
    }
}

window.addEventListener("load", () => {
    let btn=document.getElementById('btn')
    let objeto_main = new Main();
    btn.addEventListener('click',objeto_main);

});
