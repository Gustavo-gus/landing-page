function insert(num){
    const result = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = result +  num;

}
function clean(){
    document.querySelector("#resultado").innerHTML = ""
}
function erase(){
    let resultado = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function calc(){
    let resultado = document.querySelector("#resultado").innerHTML;
    if(resultado){
        document.querySelector("#resultado").innerHTML= eval(resultado)
    }else{
        alert("Faça uma operação válida")
    }
    
}


