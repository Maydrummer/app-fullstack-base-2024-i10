class Main implements EventListenerObject{
    public mensaje:string;
    public usuario:Usuario;
    constructor(mensaje:string, usuario:Usuario)
    {
        this.mensaje = mensaje;
        this.usuario = usuario;
        let btn_recargar = this.recuperarElemento("btn_devices");
        btn_recargar.addEventListener('click',this);
        let btn_agregar = this.recuperarElemento("btn_matricular");
        btn_agregar.addEventListener('click',this);
    }
    handleEvent(object: Event): void {
        let id_actual = (object.target as HTMLElement).id;
        if(id_actual == "btn_devices")
        {
            console.log("boton para enlistar dispositivos");
            this.obtener_dispositivos();

        }
        else if (id_actual == "btn_matricular")
        {
            console.log("Boton para matricular equipos");
        }

    }
    private recuperarElemento(id:string):HTMLInputElement
    {
        return <HTMLInputElement> document.getElementById(id); 
    }

    private obtener_dispositivos():void
    {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log(xhr.responseText);
                    let str_to_show : string='' ;
                    let div_refresh = this.recuperarElemento("list");
                    let lista: Array<Device> = JSON.parse(xhr.responseText);
                    for(let element of lista)
                    {
                        str_to_show += "<h4>"+element.name + "</h4> - " + element.description + " prendido=" + element.state;
                        str_to_show += "<br>"

                    }
                    div_refresh.innerHTML = str_to_show;

                }
            }
        }
        xhr.open("GET","http://localhost:8000/devices/", true);
        xhr.send();
    }

}

window.addEventListener("load", () => {
    let user1 = new Usuario("Maydrummer",27);
    let objeto_main = new Main("NO PAIN NO GAIN",user1);
});
