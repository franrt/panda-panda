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


//Restaurar todos los pandas
function restaurar() {
    var pandas = [document.getElementById("panda1"), document.getElementById("panda2"), document.getElementById("panda3"), document.getElementById("panda4")];
    document.getElementById("data3").addEventListener("click", function() {
        pandas.style.display = 'inline-block';
    });
}