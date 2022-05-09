var submit2= document.querySelector(".desencriptar");
submit2.addEventListener("click",function(event){
    event.preventDefault();

    var text = document.getElementById("entrada").value;
    var salida = "";
    for(i=0;i<text.length;i++){
        if(text[i]=='a'){
            salida=salida.concat('a');
            i++;
        }else if(text[i]=='o'){
            salida=salida.concat('o');
            i+=3;
        }else if(text[i]=='e'){
            salida=salida.concat('e');
            i+=4;
        }else if(text[i]=='i'){
            salida=salida.concat('i');
            i+=3;
        }else if(text[i]=='u'){
            salida=salida.concat('u');
            i+=3;
        }else salida=salida.concat(text[i]);
    }
    if(salida!=""){
        document.getElementById("myId").style.display = "none";
        document.getElementById("result").value = salida;
        document.getElementById('result').style.display = 'block';
        document.getElementById('copiar').style.display = 'block';
    }else{
         document.getElementById("myId").style.display = "contents";
         document.getElementById('result').style.display = 'none';
    }
});