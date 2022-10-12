
function add1(identificador) {
    console.log(identificador)
    
    let elemento = document.querySelector(identificador);
    let cantidad= elemento.innerText;
    
    console.log(cantidad)
    
    cantidad++
    elemento.innerText=cantidad

}




//const megusta = document.querySelectorAll("#count");
//console.log(count, "AQUI LOS ELEMENTOS ME GUSTA")

//let counter = 0;
//let counter2 = 0;
//let counter3 = 0;


//function like(num) {
//    if (num == 1) {
//        console.log("like 1 cliked");
//        counter++;
//        megusta[0].innerText = counter;

//    } else if (num == 2) {
//        console.log("like 2 cliked");
//        counter2++;
//        megusta[1].innerText = counter2;

//    } else {
//        console.log("like 3 cliked");
//        counter3++;
//        megusta[2].innerText = counter3;
//    }