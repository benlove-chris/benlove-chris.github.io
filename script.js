//$(document).ready(function function_name(argument) {}) '<div class="text-secondary"> <h1>Ao acordar</h1> </div>'
const d = new Date();
let hour = d.getHours();

$(document).ready(function() {
	if (hour > 12 ){
		$("#texto").html('\
		<div id="noite" class="text-light  container-fluid p-5 text-white text-center">\
			<h1>Fica Senhor comigo - Padee Pio</h1>\
			<blockquote>\
			\
				<strong>Fica Senhor comigo,</strong> pois preciso da tua presença para não te esquecer.<br>\
				<strong>Sabes quão facilmente posso te abandonar</strong>.<br>\
				<strong>Fica Senhor comigo,</strong> porque sou fraco e preciso da tua força para não cair.<br>\
				<strong>Fica Senhor comigo,</strong> porque és minha vida, e sem ti perco o fervor.<br>\
				<strong>Fica Senhor comigo</strong>, porque és minha luz, e sem ti reina a escuridão.<br>\
				<strong>Fica Senhor comigo,</strong> para me mostrar tua vontade.<br>\
				<strong>Fica Senhor comigo,</strong> para que ouça tua voz e te siga.<br>\
				<strong>Fica Senhor comigo,</strong> pois desejo amar-te e permanecer sempre em tua companhia.<br>\
				<strong>Fica Senhor comigo,</strong> se queres que te seja fiel.<br>\
				<strong>Fica Senhor comigo</strong>, porque, por mais pobre que seja minha alma,\
				quero que se transforme num lugar de consolação para ti, um ninho de amor.<br>\
				<strong>Fica comigo, Jesus,</strong> pois se faz tarde e o dia chega ao fim; a vida passa,\
				e a morte, o julgamento e a eternidade se aproximam. Preciso de ti para renovar minhas energias e não parar no caminho.\
				Está ficando tarde, a morte avança e eu tenho medo da escuridão, das tentações, da falta de fé, da cruz, das tristezas. \
				Oh, quanto preciso de ti, meu Jesus, nesta noite de exílio.<br>\
				<strong>Fica comigo nesta noite, Jesus,</strong> pois ao longo da vida,\
				com todos os seus perigos, eu preciso de ti. Faze, Senhor, que te reconheça como te reconheceram teus discípulos ao partir do pão,\
				a fim de que a Comunhão Eucarística seja a luz a dissipar a escuridão, a força a me sustentar, a única alegria do meu coração.<br>\
				<strong>Fica comigo, Senhor,</strong> porque na hora da morte quero estar unido a ti,\
				se não pela Comunhão, ao menos pela graça e pelo amor.<br>\
				<strong>Fica comigo, Jesus.</strong> Não peço consolações divinas, porque não as mereço,\
				mas apenas o presente da tua presença, ah, isso sim te suplico!<br>\
				<strong>Fica Senhor comigo</strong>, pois é só a ti que procuro, teu amor, tua graça, tua vontade, teu coração, \
				teu Espírito, porque te amo, e a única recompensa que te peço é poder amar-te sempre mais. \
				Com este amor resoluto desejo amar-te de todo o coração enquanto estiver na terra, para continuar \
				a te amar perfeitamente por toda a eternidade. <strong>Amém.</strong><br>\
				<strong>São Padre Pio, rogai por nós!</strong>\
			\
			</blockquote>\
		</div>'

		); 
		

	}
	else if (hour  < 10  ){
		$("#texto").html('\
				<div id="manha" class="container-fluid p-5  text-center bg-white">\
				\
						<h1>Ladainha da humildade</h1>\
				     <strong> Ó Jesus, manso e humilde de coração</strong>, ouvi-me.<br>\
					 <strong> Do desejo de ser estimado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do desejo de ser amado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do desejo de ser conhecido</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do desejo de ser honrado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do desejo de ser louvado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do desejo de ser preferido</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do desejo de ser consultado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do desejo de ser aprovado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do receio de ser humilhado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do receio de ser desprezado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do receio de sofrer repulsas</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do receio de ser caluniado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do receio de ser esquecido</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do receio de ser ridicularizado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do receio de ser difamado</strong>, livrai-me, ó Jesus.<br>\
					 <strong> Do receio de ser objeto de suspeita</strong>, livrai-me, ó Jesus.<br>\
					\
	  				Que os outros sejam amados mais do que eu, Jesus, dai-me a graça de desejá-lo.\
	  				Que os outros sejam estimados mais do que eu, Jesus, dai-me a graça de desejá-lo.\
	  				Que os outros possam elevar-se na opinião do mundo, e que eu possa ser diminuído, Jesus, dai-me a graça de desejá-lo.\
	  				Que os outros possam ser escolhidos e eu posto de lado, Jesus, dai-me a graça de desejá-lo.\
	  				Que os outros possam ser louvados e eu desprezado, Jesus, dai-me a graça de desejá-lo. \
	  				Que os outros possam ser preferidos a mim em todas as coisas, Jesus, dai-me a graça de desejá-lo. \
	  				Que os outros possam ser mais santos do que eu, embora me torne o mais santo quanto me for possível, Jesus, dai-me a graça de desejá-lo.\
			\
			</div>'
			);
		
	}
	else{
	$("body").html('\
				<div id="q_outro" class="container-fluid p-5 text-center">\
				\
				<iframe width="80%" height="300" src="https://www.youtube.com/embed/kp7wNDZ6nhM">\
				</iframe>\
			</div>'
			);

	}
	// end if
	
	
	
})