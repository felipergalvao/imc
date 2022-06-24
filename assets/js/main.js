function main() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        pessoas.push({
            peso: peso.value,
            altura: altura.value
        });

        if (peso.value === "" || altura.value === ""){
            alert ("Digite seu peso e altura para prosseguir!")
            return
        }

        console.log(pessoas);

        resultado.innerHTML += `<p>${peso.value}Kg ${altura.value}m</p>`;

        let imc = peso.value / (altura.value * altura.value);
        if (imc < 18.5) {
            imcNome = 'Se eu fosse você começaria a comer um pouco mais!';
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            imcNome = 'Parabéns! Você está no seu peso ideal.';
        }
        else if (imc >= 25 && imc <= 29.9) {
            imcNome = 'Emagreça amigo(a), está um pouco acima do que é o esperado para você!';
        }
        else if (imc >= 30 && imc <= 34.9) {
            imcNome = 'Procure um médico, mas sem pressa... Vocês está Obeso! :(';
        }
        else if (imc >= 35 && imc <= 39.9) {
            imcNome = 'Procure um médico com urgência!!!';
        } else {
            imcNome = 'Pode colocar pra assar já.'
        }
        resultado.innerHTML += `<p>O seu IMC é ${Math.round(imc)}<br>${imcNome}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);

}
main();