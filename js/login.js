link_backend = "https://benlove.pythonanywhere.com";

$(document).ready(function(){
	$("#botao").click(function(){
		usuario = $("#usuario").val();
	    senha = $("#senha").val();

		
	    var dados = JSON.stringify({usuario: usuario, senha: senha});
	    
	    
	    
	    
	      alert(dados);
	    
	    $.ajax({
	            url : link_backend +'/logar_usuario',
	            type : 'POST',
	            contentType : 'application/json', // enviando dados em json
	            dataType: 'json',
	            data: dados,
	            //success: loginEfetuado,
	            success: function(){
	            	alert("S9");

	            },
	        	error: errologinEfetuado
	    });






	    function loginEfetuado(resposta){

	        if (resposta.retorno == "OK") {
	        	var id_usuario = resposta.resultado;
	        	
	        	localStorage.setItem("usuario", id_usuario);
	            window.location.href = 'html/main.html';

	            	
	            
	            
	        } else{
	        	
	            document.getElementById('mensagem').style.display = 'block';
	            $("#usuario").val("");
	            $("#senha").val("");

	        }
	        
	    
	    }

	    function errologinEfetuado(resposta){
	        document.getElementById('mensagem').style.display = 'block';
	        $("#usuario").val("");
	        $("#senha").val("");
	        
	    }
		
	});
	



});



