
$(document).ready(function(){


    // listar despesa ao carregar o documento
    const d = new Date();
    if ((d.getMonth()+1) < 10){
        var data_hoje = d.getFullYear() +"-0"+ (d.getMonth()+1) +"-"+ d.getDate();

    }else{
        var data_hoje = d.getFullYear() +"-"+ (d.getMonth()+1) +"-"+ d.getDate();
    }
    
    
    var dados = JSON.stringify({data_hoje: data_hoje});
    
    
    
    $.ajax({
        url: link_backend+"/filtrar_vencidas",
        type : 'POST',
        contentType : 'application/json', // enviando dados em json
        dataType: 'json',
        data: dados,
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
                        
                    "</tr>"
            $("#corpoDespesa").append(linha)
        }

 
        }

        



    

    
});