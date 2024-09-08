class Main implements EventListenerObject{
    public mensaje:string;
    public usuario:Usuario;
    constructor(mensaje:string, usuario:Usuario)
    {
        this.mensaje = mensaje;
        this.usuario = usuario;
        let btn = this.recuperarElemento("btn");
        btn.addEventListener('click',this);
    }
    handleEvent(object: Event): void {
        let alerta:string = `El usuario:${this.usuario.usuario} que tiene ${this.usuario.edad} anios dice: ${this.mensaje}`;
        alert(alerta);
    }
    private recuperarElemento(id:string):HTMLInputElement
    {
        return <HTMLInputElement> document.getElementById(id); 
    }
}

window.addEventListener("load", () => {
    let user1 = new Usuario("Maydrummer",27);
    let objeto_main = new Main("NO PAIN NO GAIN",user1);
});
