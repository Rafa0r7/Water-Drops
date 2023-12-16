function calcular() {
    let peso = document.getElementById('peso')
    let vpeso = Number(peso.value)
    let resul = document.getElementById('resul')
    if( vpeso <= 0 || peso.lenght == 0) {
        alert('Digite seu peso!')
    }else{
        let litros = vpeso * 35
        resul.innerHTML = `A quantidade de água que você deve ingerir é de aproximadamente ${litros} litros por dia. `
    }
}
