// sintaksa za addEventListener : imepromenljive.addEventListener(event, function(){});

// shortcut za komentare : SHIFT + ALT + A

let prvoDugme = document.getElementById('add-btn-js');

prvoDugme.addEventListener("click", function (){

    document.body.style.backgroundColor = "gray";

});

/* 1.Dodaj novi tekst u paragraf prvo pravite promeljivu u koju smestite taj paragarf onda dodajete addEventListener
i u innerHTMl dodaj tekst
*/

let paragraf = document.getElementById("paragraph-js");

paragraf.addEventListener("mouseover", function (){

    paragraf.innerHTML = "NEKI DRUGI TEKST";

});

/* Napravi novo dugme i jos jedan paragraf, 
kad se klikne na dugme da se u paragrafu ispise tekst "Kliknuto je dugme" */

let dugme = document.getElementById("klikni");

let Paragraf = document.getElementById("paragraf");

dugme.addEventListener("click", function(){

    Paragraf.innerHTML = "Kliknuto je dugme";

});

// NAPRAVI BROJAC KLIKOVA NA STRANICI

let brojac = document.getElementById("brojac");

let brojac2 = document.getElementById("brojac2");

let suma = 0;

brojac.addEventListener("click", function (){

    brojac2.innerHTML = `Broj klikova : ${suma++}`;

});

let reset = document.getElementById("reset");

let smanji = document.getElementById("smanji");

reset.addEventListener("click", function(){

    suma = 0;
    brojac2.innerHTML = suma;

});

smanji.addEventListener("click", function(){

    suma--;
    brojac2.innerHTML = suma;
});
