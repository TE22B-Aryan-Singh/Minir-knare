function plus() {
    const tal1 = parseInt(document.getElementById("tal1").value);
    const tal2 = parseInt(document.getElementById("tal2").value);
    const svar = tal1 + tal2;
    document.getElementById("svar").value = svar;
}

function minus() {
    const tal1 = parseInt(document.getElementById("tal1").value);
    const tal2 = parseInt(document.getElementById("tal2").value);
    const svar = tal1 - tal2;
    document.getElementById("svar").value = svar;
}

function ganger() {
    const tal1 = parseInt(document.getElementById("tal1").value);
    const tal2 = parseInt(document.getElementById("tal2").value);
    const svar = tal1 * tal2;
    document.getElementById("svar").value = svar;
}

function delat() {
    const tal1 = parseInt(document.getElementById("tal1").value);
    const tal2 = parseInt(document.getElementById("tal2").value);
    const svar = tal1 / tal2;
    document.getElementById("svar").value = svar;
}
