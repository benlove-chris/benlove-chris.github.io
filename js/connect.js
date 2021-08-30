

const dadosFormulario = () => {
    

    let dados = {   
        

        nome: document.getElementById('nome').value,
        cargoPretendido: document.getElementById('cargoPretendido').value,
        profissao: document.getElementById('profissao').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        genero: document.getElementById('genero').value,
        cepCandidato: document.getElementById('cepCandidato').value,
        logradouro: document.getElementById('logradouro').value,
        numeroCasa: document.getElementById('numeroCasa').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        uf: document.getElementById('uf').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        contato: document.getElementById('contato').value,
        email: document.getElementById('email').value,
        identidade: document.getElementById('identidade').value,
        cpfCandidato: document.getElementById('cpfCandidato').value,
        possuiVeiculo: document.getElementById('possuiVeiculo').value,
        habilitacao: document.getElementById('habilitacao').value 

        
        
        
        
    };

    console.log(dados);
    return dados


}



const cadastrarCandidato = async(candidate) => {

    const candidato = await fetch('https://banco-backend-a.herokuapp.com/register', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosFormulario())
    });
    if (candidato.status === 200) {
        alert("Cadastro realizado com sucesso! ");
    }else if(candidato.status === 500){
        alert("Certifique se de que esses dados estaõ corretos ou não foram cadastrado.");
    }


}




