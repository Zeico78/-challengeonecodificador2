var submit= document.querySelector(".encriptar");
var escritura = document.querySelector(".escritura");

submit.addEventListener("click",function(event){
    event.preventDefault();
    var form = document.querySelector("#entrada"); 
    var text = document.getElementById("entrada").value;
    var salida = "";
    for(i=0;i<text.length;i++){
        if(text[i]=='a'){
            salida = salida.concat("ai");
        }else if(text[i]=='e'){
            salida = salida.concat("enter");
        }else if(text[i]=='i'){
            salida = salida.concat("imes");
        }else if(text[i]=='o'){
            salida = salida.concat("ober");
        }else if(text[i]=='u'){
            salida = salida.concat("ufat");
        }else salida = salida.concat(text[i]);
    }
    if(salida!=""){
        document.getElementById("myId").style.display = "none";
        document.getElementById("result").value = salida;
        document.getElementById('result').style.display = 'block';
        document.getElementById('copiar').style.display = 'block';
    }else {
        document.getElementById("myId").style.display = "contents";
        document.getElementById('result').style.display = 'none';
    }
});