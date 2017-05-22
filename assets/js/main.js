//Borrar cada panda haciendo click en el icono
function borrar1() {
    var img = document.getElementById("panda1");
    document.getElementById("btn1").addEventListener("click", function() {
        img.style.display = 'none';
    });
}

function borrar2() {
    var img = document.getElementById("panda2");
    document.getElementById("btn2").addEventListener("click", function() {
        img.style.display = 'none';
    });
}

function borrar3() {
    var img = document.getElementById("panda3");
    document.getElementById("btn3").addEventListener("click", function() {
        img.style.display = 'none';
    });
}

function borrar4() {
    var img = document.getElementById("panda4");
    document.getElementById("btn4").addEventListener("click", function() {
        img.style.display = 'none';
    });
}


/*Restaurar todos los pandas... no me funciona aun
function retaurar() {
    forEach(document.getElementsByClassName("foto")) {
        document.getElementById("data3").addEventListener("click", function() {
            foto.style.display = 'inline-block';
        });
    }

    function restaurar() {
        var pandas = [panda1, panda2, panda3, panda4];
        document.getElementById("data3").addEventListener("click", function() {
            pandas.style.display = 'inline-block';
        });
    }*/