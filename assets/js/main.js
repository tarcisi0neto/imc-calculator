const form = document.querySelector('#form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const peso = e.target.querySelector('#peso')
    const altura = e.target.querySelector('#altura')
    pValue = Number(peso.value);
    aValue = Number(altura.value);
    
    if(!pValue){
        resultadoImc('Peso inválido!',false)
        return;
    }
    if(!aValue){
        resultadoImc('Altura inválida!',false)
        return;
    }

    const imc =getImc(pValue,aValue)
    const nivel = getNivel(imc)
    const msg = `Seu IMC é : ${imc}  - Nível ${nivel}`

    resultadoImc(msg,true)
    console.log(aValue);
});

function getImc(peso,altura){
    const imc = peso/(altura**2)
    return imc.toFixed(2)
}

function getNivel(imc){
    const nivel = ['Magreza','Normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']
    if( imc >=39.9) return nivel[5]
    if( imc >=34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 24.9) return nivel[2]
    if(imc >= 18.5) return nivel[1]
    if(imc<18.5)    return nivel[0]
}

function criaP(className){
    const p = document.createElement('p');
    return p;
}

function resultadoImc(msg,isValid){
    const resul = document.querySelector('#resul');
    resul.innerHTML = '';
    const p = criaP()
    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resul.appendChild(p)

};

