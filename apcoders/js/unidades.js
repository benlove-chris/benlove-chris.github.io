$(document).ready(function(){
    // listar unidades ao carregar o documento
    
    $.ajax({
        url: link_backend+"/listar/Unidade",
        type: "GET",
        dataType: "json",
        success: listar_unidades,
        error: function(){
            alert("Os unidades não puderam ser listadas \nVerifique o backend"); //melhorar
        }
    });
    function listar_unidades(unidades){

        for (var i in unidades){
            //para cada unidade
            linha = "<tr id= 'tr_Unidade" +  unidades[i].idUnidade+"' >" + 
                        "<td>" + unidades[i].idUnidade+ "</td>" + 
                        "<td>" + unidades[i].proprietario+ "</td>" + 
                        "<td>" + unidades[i].condominio+ "</td>" +
                        "<td>" + unidades[i].endereco+ "</td>" +  
                    "</tr>"
            $("#corpoUnidade").append(linha)
        }

 
        }

        

    // cadastrar unidade
    $("#cadastrarUnidade").click(function(){
        var idUnidade = $("#idUnidade").val(); 
        var proprietario = $("#proprietario").val();
        var condominio = $("#condominio").val();
        var endereco = $("#endereco").val();
        
        

        var dados = JSON.stringify({
            idUnidade:  idUnidade,
            proprietario: proprietario,
            condominio: condominio,
            endereco: endereco
            })
        



        $.ajax({
                url : link_backend +'/cadastrar/Unidade',
                type : 'POST',
                contentType : 'application/json', // enviando dados em json
                dataType: 'json',
                data: dados,
                success: function(resposta){
                    if (resposta.resultado == "ok"){
                        $('#sucunidade').modal('toggle');
                                    
                        $("#ok_unidade").click(function(){
                            $('#sucunidade').modal('hide');
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
