var recb = []
var desp = []

function addRecb() {

    var vRecb = (document.getElementById('recb').value)
    recb.push(vRecb)
    document.getElementById('recb').value=''

    var optRec = new Option(vRecb);
    var select = document.getElementById("tbrecb");
    select.add(optRec);
}

function addDesp() {

    var vDesp = (document.getElementById('desp').value)
    desp.push(vDesp)
    document.getElementById('desp').value=''

    var optDesp = new Option(vDesp);
    var select = document.getElementById("tbdesp");
    select.add(optDesp);
}

console.log(recb)
console.log(desp)

function calc() {

    let totDesp = 0
    let totRecb = 0

    for (var posR = 0; posR < recb.length; posR++) {

        totRecb += parseInt(recb[posR])
    } 
  
    for (var posD = 0; posD < desp.length; posD++) {

        totDesp += parseInt(desp[posD])
    } 
    
    var recbfim = totRecb
    var despfim = totDesp

    var balTotal = recbfim - despfim

    res = document.getElementById('res')
    res.innerHTML = `O balanço total é R$${balTotal}`

    if (balTotal > 0) {
        res.innerHTML += `<br>Seu saldo está positivo.`
    } else {
        res.innerHTML += `<br>Seu saldo está negativo.`
    }
    
}

function limpar1() {
    var limp = document.getElementById("tbrecb")

    limp.innerHTML = "";

    recb = []

}

function limpar2() {
    var limp = document.getElementById("tbdesp")

    limp.innerHTML = "";

    desp = []

}
