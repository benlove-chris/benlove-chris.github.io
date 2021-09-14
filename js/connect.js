

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


        /*
        nome : 'Luiz',
        cargoPretendido : 'Chefao',
        profissao : 'Chefe nepai',
        dataNascimento : '20-22-2001',
        estadoCivil : 'Casado chefe',
        genero : 'macho alpha',
        cepCandidato : '890-70615',
        logradouro : 'Rua paulo sao',
        numeroCasa : 23 ,
        bairro : 'garcia',
        cidade : 'blumenau',
        uf : 'SC',
        telefone : 232321 ,
        celular : 3232323,
        contato : 3232323,
        email : 'ricardopai@gmail.com',
        identidade : 'G192312',
        cpfCandidato : 12921212,
        possuiVeiculo : 'Sim',
        habilitacao : "A"*/

        
        
        
        
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
        //$("#nome").val("");
        //$("#sobrenome").val("");
        $("#nome").value("");
        $("#cargoPretendido").value("");
        $("#profissao").value("");
        $("#dataNascimento").value("");
        $("#estadoCivil").value("");
        $("#genero").value("");
        $("#cepCandidato").value("");
        $("#logradouro").value("");
        $("#numeroCasa").value("");
        $("#bairro").value("");
        $("#cidade").value("");
        $("#uf").value("");
        $("#telefone").value("");
        $("#celular").value("");
        $("#contato").value("");
        $("#email").value("");
        $("#identidade").value("");
        $("#cpfCandidato").value("");
        $("#possuiVeiculo").value("");
        $("#habilitacao").value("");



    }else if(candidato.status === 500){
        alert("Certifique se de que esses dados estaõ corretos ou não foram cadastrado.");
    }


}




