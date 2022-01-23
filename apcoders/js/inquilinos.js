$(document).ready(function(){


    // listar inquilinos ao carregar o documento
    
    $.ajax({
        url: link_backend+"/listar/Inquilino",
        type: "GET",
        dataType: "json",
        success: listar_inquilinos,
        error: function(){
            alert("Os inquilinos não puderam ser listadas \nVerifique o backend"); //melhorar
        }
    });
    function listar_inquilinos(inquilinos){

        for (var i in inquilinos){
            //para cada inquilino
            
            linha = "<tr id= 'tr_Inquilino" +  inquilinos[i].idInquilino+"' >" + 
                        "<td>" + inquilinos[i].nome+ "</td>" + 
                        "<td>" + inquilinos[i].idade+ "</td>" + 
                        "<td>" + inquilinos[i].sexo+ "</td>" +
                        "<td>" + inquilinos[i].telefone+ "</td>" +  
                        "<td>" + inquilinos[i].email+ "</td>" + 
                        

                        
                        
                        
                    "</tr>"
            $("#corpoInquilino").append(linha)
        }

 
        }

        

    // cadastrar inquilino
    $("#cadastrarInquilino").click(function(){
        var nome = $("#nome").val(); 
        var idade = $("#idade").val();
        var sexo = $("#sexo").val();
        var telefone = $("#telefone").val();
        var email = $("#email").val();
        

        var dados = JSON.stringify({
            nome: nome,
            idade: idade,
            sexo: sexo,
            telefone: telefone,
            email: email})



        $.ajax({
                url : link_backend +'/cadastrar/Inquilino',
                type : 'POST',
                contentType : 'application/json', // enviando dados em json
                dataType: 'json',
                data: dados,
                success: function(resposta){
                    if (resposta.resultado == "ok"){
                        $('#sucinquilino').modal('toggle');
                                    
                        $("#ok_inquilino").click(function(){
                            $('#sucinquilino').modal('hide');
                            document.location.reload(true);
                        });

                        }else{
                            alert(resposta.resultado+ ":"+resposta.detalhes);
                        }

                },
                error: function(){
                        alert("Erro backend");
                    }

        });

    });










});
