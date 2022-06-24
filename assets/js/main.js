const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = form.querySelector('#peso');
    const inputAltura = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido');
        return;
    }
    if (!altura) {
        setResultado('Altura inválida');
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `<p>O seu IMC é ${imc}<br>${nivelImc}</p>`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Se eu fosse você começaria a comer um pouco mais!', 'Parabéns! Você está no seu peso ideal.', 'Emagreça amigo(a), está um pouco acima do que é o esperado para você!', 'Olha, você está no nível de obesidade grau 1, mas não se preocupe, faça regime que tudo vai se resolver!', 'Procure um médico com urgência!!! Seu nível de obesidade é grau 2', 'Pode colocar pra assar já.'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criarP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}