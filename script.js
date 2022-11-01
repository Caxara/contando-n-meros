function contar() {
    let inicio = document.getElementById('txtIni')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpass')
    let resultado = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML += `Impossível contar!`
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        resultado.innerHTML += ` Contando:</br></br>`

        if(p <= 0) {
            window.alert(`Passo inválido! Considerando PASSO 1`)
            p = 1
        }
        if(i > f){
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c}, `
            }
        } else {
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c}, `
            }
        }
    } resultado.innerHTML += `.`
}