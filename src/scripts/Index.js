function validarBandeiraCartao(numeroCartao) {
    // Remove espaços e hifens
    const numero = numeroCartao.replace(/[\s-]/g, '');

    if (!validarNumeroCartao(numero)) {
        return 'Número de cartão inválido';
    }

    // Mapeamento de bandeiras e seus padrões
    const bandeiras = [
        { nome: 'Visa', regex: /^4/ },
        { nome: 'MasterCard', regex: /^5[1-5]|^2(2[2-9]|[3-6][0-9]|7[0-1]|720)/ },
        { nome: 'Elo', regex: /^(4011|4312|4389|50[0-9]{2}|509[0-9]{2}|65[0-9]{2}|62[0-9]{2})/ },
        { nome: 'American Express', regex: /^3[47]/ },
        { nome: 'Discover', regex: /^(6011|65|64[4-9])/ },
        { nome: 'Hipercard', regex: /^6062/ },
        { nome: 'Diners Club', regex: /^36/ },
        { nome: 'EnRoute', regex: /^(2014|2149)/ },
        { nome: 'JCB', regex: /^35/ },
        { nome: 'Voyager', regex: /^8699/ },
        { nome: 'Aura', regex: /^50/ }
    ];

    // Identifica a bandeira correspondente
    const bandeira = bandeiras.find(b => b.regex.test(numero));
    return bandeira ? bandeira.nome : 'Bandeira desconhecida';
}

function validarNumeroCartao(numeroCartao) {
    let soma = 0;
    let alternar = false;

    for (let i = numeroCartao.length - 1; i >= 0; i--) {
        let digito = parseInt(numeroCartao[i], 10);

        if (alternar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        soma += digito;
        alternar = !alternar;
    }

    return soma % 10 === 0;
}

// Exemplo de uso:
const numeroCartao = '3725 763447 49428'; // Substitua pelo número do cartão
console.log(validarBandeiraCartao(numeroCartao)); // Retorna a bandeira ou 'Número de cartão inválido'