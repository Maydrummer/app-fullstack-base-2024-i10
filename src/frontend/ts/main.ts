class Persona
{
    public nombre:string;
    public edad:number;
}

function SayHello(){
    let current_value = document.getElementById("textarea_1") as HTMLInputElement;
    let new_value = "Hello world!!!" + "\n" + current_value.value;
    document.getElementById("textarea_1").innerHTML = new_value;

}

function mostrar(per:Persona)
{
    alert(per.nombre + " " + per.edad);
}

window.addEventListener("load",  ()=> {
    SayHello();
    let persona1:Persona = new Persona();
    persona1.edad = 26;
    persona1.nombre = "Anthony Maisincho";
    mostrar(persona1);
});