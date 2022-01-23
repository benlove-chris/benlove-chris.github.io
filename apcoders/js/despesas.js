

$(document).ready(function(){


    // listar despesa ao carregar o documento
    
    $.ajax({
        url: link_backend+"/listar/Despesa",
        type: "GET",
        dataType: "json",
        success: listar_despesas,
        error: function(){
            alert("As despesas não puderam ser listadas \nVerifique o backend"); //melhorar
        }
    });
    function listar_despesas(despesas){

        for (var i in despesas){
            //para cada despesas
            
            linha = "<tr id= 'tr_Despesa" +  despesas[i].idDespesa+"' >" + 
                        "<td>" + despesas[i].descricao+ "</td>" + 
                        "<td>" + despesas[i].tipo_despesa+ "</td>" +
                        "<td>" + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(despesas[i].valor)+ "</td>" +  
                        "<td>" + despesas[i].vencimento_fatura+ "</td>" + 
                        "<td>" + despesas[i].unidade.idUnidade+ "</td>" + 
                        "<td>" + despesas[i].status_pagamento+ "</td>" +

                        // btn btn-primary btn-sm rounded-0 - edit/Editar class
                        
                        
                        "<td>"+                             
                            '<ul class="list-inline m-0">'+
                                '<li class="list-inline-item ">'+
                                  '<i class="bi bi-pencil-fill" data-toggle="modal" data-target="#modalEditarDespesa" type="button" data-toggle="tooltip" data-placement="top" title="Editar"  onclick="chamarModalEditarDespesa('+despesas[i].idDespesa+ '); "></i>'+
                                '</li> '+
                  
                                
                            '</ul>'+
                        "</td>"+
                        
                    "</tr>"
            $("#corpoDespesa").append(linha)
        }

 
        }

        // listar unidade para selecionar

        $.ajax({
            url: link_backend + '/listar/Unidade',
            type: 'GET', 
            dataType: 'json',
            success: function(unidades){
                for  (var i in unidades){
                    option = "<option value= '" + unidades[i].idUnidade+"'>"+ unidades[i].idUnidade+ "</option>";
                
                    $("#selectUnidade").append(option);
                    $("#selectUnidadeEditar").append(option);
                }


            },
            error: function(){
                alert("As unidade não puderam ser escolhidas");

            }
        })


    // cadastrar despesa
    $("#cadastrarDespesa").click(function(){

        var descricao = $("#descricao").val(); 
        var tipo_despesa = $("#tipo_despesa").val();
        var valor = $("#valor").val();
        var vencimento_fatura = $("#vencimento").val();
        var status_pagamento = $('input[name="status"]:checked').val();
        
        var unidade_despesa = $("#selectUnidade").val();

        var dados = JSON.stringify({
            descricao: descricao,
            tipo_despesa: tipo_despesa,
            valor: valor,
            vencimento_fatura: vencimento_fatura,
            status_pagamento:  status_pagamento,
            unidade_despesa: unidade_despesa});



        $.ajax({
                url: link_backend +'/cadastrar/Despesa',
                type: 'POST',
                contentType: 'application/json', // enviando dados em json
                dataType: 'json',
                data: dados,
                success: function(resposta){
                    if (resposta.resultado == "ok") {
                    //mensagem
                        
                        $('#sucdespesa').modal('toggle');
                        
                        $("#ok_despesa").click(function(){
                            $('#sucdespesa').modal('hide');
                            document.location.reload(true);
                        });
                        


                    }
                    else{
                        alert(resposta.resultado);
                    }
                },
                error: function(){
                        alert("Erro backend");
                    }


        });


    });
    // cadastrar despesa -end

    // filtrar
    $("#filtrarUnidade").click(function(){
        var unidade = $("#unidade").val();

        var dados = JSON.stringify({unidade: unidade});
        

        $.ajax({
            url: link_backend+"/filtrar_despesa_unidade",
            type : 'POST',
            contentType : 'application/json', // enviando dados em json
            dataType: 'json',
            data: dados,
            success: listar_despesa_unidade,
            error: function(){
                // erro na comunicação com o backend
                alert("A despesa não pôde ser filtrado \nVerifique o backend");
            }
        });
        function listar_despesa_unidade(despesas){
            
            linhas = "";

            for (var i in despesas){
                //para cada despesas
                
                linha = "<tr id= 'tr_Despesa" +  despesas[i].idDespesa+"' >" + 
                            "<td>" + despesas[i].descricao+ "</td>" + 
                            "<td>" + despesas[i].tipo_despesa+ "</td>" +
                            "<td>" + Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(despesas[i].valor)+ "</td>" +  
                            "<td>" + despesas[i].vencimento_fatura+ "</td>" + 
                            "<td>" + despesas[i].unidade.idUnidade+ "</td>" + 
                            "<td>" + despesas[i].status_pagamento+ "</td>" +

                            // btn btn-primary btn-sm rounded-0 - edit/Editar class
                            
                            
                            "<td>"+                             
                                '<ul class="list-inline m-0">'+
                                    '<li class="list-inline-item ">'+
                                      '<i class="bi bi-pencil-fill" data-toggle="modal" data-target="#modalEditarDespesa" type="button" data-toggle="tooltip" data-placement="top" title="Editar"  onclick="chamarModalEditarDespesa('+despesas[i].idDespesa+ '); "></i>'+
                                    '</li> '+
                      
                                    
                                '</ul>'+
                            "</td>"+
                            
                        "</tr>"
                linhas = linhas +linha;
                
            }

            
            $("#corpoDespesa").html(linhas) 

                 
            }
            return false;



        });
    // filtar unidade -end




    

    
});




//editar receita
function chamarModalEditarDespesa(idDespesa){
    $("#btnEditarDespesa").attr('onClick', ("editarDespesa('"+idDespesa+"')"));
    
    $.ajax({
        url: link_backend+"/listar_despesa/"+idDespesa,
        method: "GET",
        dataType: "json",
        success: function(resposta){
            // Mostrar os dados para editar
            
            
            $("#descricaoEditar").val(resposta.descricao);
            $("#tipo_despesa_editar").val(resposta.tipo_despesa);
            $("#valorEditar").val(resposta.valor);
            $("#vencimentoEditar").val(resposta.vencimento_fatura);
            $("input[name=statusEditar][value="+ resposta.status_pagamento +"]").prop("checked",true);
            $('#selectUnidadeEditar option').removeAttr('selected').filter("[value="+resposta.unidade.idUnidade+"]").attr('selected', true);
            
            
            
        },
        error: function(){
            alert("Erro ao receber os dados :) \nverifique o backend!");
        }
    });
    
}



function editarDespesa(idDespesa) {
    
    //editar
    var nova_descricao = $("#descricaoEditar").val();
    var novo_tipo_despesa = $("#tipo_despesa_editar").val();
    var novo_valor = $("#valorEditar").val();
    var novo_vencimento = $("#vencimentoEditar").val();
    var novo_status = $('input[name="statusEditar"]:checked').val();
    var nova_unidade = $("#selectUnidadeEditar").val();
    

    var dados = JSON.stringify({nova_descricao: nova_descricao,
        novo_tipo_despesa: novo_tipo_despesa,
        novo_valor: novo_valor,
        novo_vencimento: novo_vencimento,
        novo_status: novo_status,
        nova_unidade: nova_unidade});
        
    
   

    $.ajax({
        url: link_backend +'/editar_despesa/'+idDespesa,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: dados,
        success: function(resposta){
            if (resposta.resultado == "ok"){
            $('#sucdespesaEditar').modal('toggle');
                        
            $("#ok_despesa_editar").click(function(){
                $('#sucdespesa').modal('hide');
                document.location.reload(true);
            });

            }else{
                alert(resposta.resultado+ ":"+resposta.detalhes);
            }

        },
        error: function(){
            alert("Erro ao receber os dados :) \nverifique o backend! ");

        }
    });



}
//editar despesa -end

