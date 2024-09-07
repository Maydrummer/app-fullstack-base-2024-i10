class Persona
{
    public nombre:string;
    private edad:number;
    constructor(edad:number,nombre:string)
    {
        this.edad = edad;
        this.nombre = nombre;
    }
    public mostrar():string
    {
        return this.nombre + " Edad:" + this.edad;
    }
}

function SayHello(){
    let current_value = document.getElementById("textarea_1") as HTMLInputElement;
    let new_value = "Hello world!!!" + "\n" + current_value.value;
    document.getElementById("textarea_1").innerHTML = new_value;

}


window.addEventListener("load",  ()=> {
    SayHello();
    let persona1:Persona = new Persona(26,"Anthony Maisincho");
    alert(persona1.mostrar());
    
});