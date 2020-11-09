let cevre = 0
let kenar = 0
function CevreHesapla (kenar: number) {
    cevre = kenar * 4
    return cevre
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(CevreHesapla(alandanKenarBul(36)))
})
function alandanKenarBul (alan: number) {
    kenar = Math.sqrt(alan)
    return kenar
}
