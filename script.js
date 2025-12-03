const barvy = ["#252627", "#E7DFDF", "#097ed8"];
let index = 1;

function barva() {
    document.body.style.backgroundColor = barvy[index];
    index = (index + 1) % barvy.length;
}

function insta() {
    window.open("https://www.instagram.com/petr_skarv/", "_blank");
}

function vysledek() {
    const vstup = parseFloat(document.getElementById("vstup").value);
    const vybran1 = document.getElementById("vyber1").value;
    const vybran2 = document.getElementById("vyber2").value;
    const vystup = document.getElementById("vystup");

    if (isNaN(vstup)) {
        vystup.value = "neplatné!";
        return;
    }

    let result;

    // Převodník času
    const jednotky = {
        "sekundy": 1,
        "minuty": 60,
        "hodiny": 3600,
        "dny": 86400,
        "tydny": 604800,
        "mesice": 2630016,
        "roky": 31536000
    };

    result = vstup * jednotky[vybran1] / jednotky[vybran2];
    vystup.value = result;
}
