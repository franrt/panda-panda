//Borrar cada panda haciendo click en el icono
function borrar1() {
    var panda = document.getElementById("panda1");
    document.getElementById("btn1").addEventListener("click", function() {
        panda.style.display = 'none';
    });
}

function borrar2() {
    var panda = document.getElementById("panda2");
    document.getElementById("btn2").addEventListener("click", function() {
        panda.style.display = 'none';
    });
}

function borrar3() {
    var panda = document.getElementById("panda3");
    document.getElementById("btn3").addEventListener("click", function() {
        panda.style.display = 'none';
    });
}

function borrar4() {
    var panda = document.getElementById("panda4");
    document.getElementById("btn4").addEventListener("click", function() {
        panda.style.display = 'none';
    });
}


//Restaurar todos los pandas... no me funciona aun
function restaurar() {
    document.getElementById('panda1').style.display = "inline-block";
    document.getElementById('panda2').style.display = "inline-block";
    document.getElementById('panda3').style.display = "inline-block";
    document.getElementById('panda4').style.display = "inline-block";
}