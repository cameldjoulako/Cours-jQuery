/*
	Apprendre jQuery 
	Copyright Camel Léonce Djoulako Mars 2019 - Software Engineer

	"Ecrire moins, faire plus"
 */
/*Quand le document(la page html ) est chargé(prête) alors la fonction suivante est executé:*/
$(document).ready(function(){
	console.log('jquery.js bien chargé');

	/* Les Sélecteurs: $('element a selectionner')*/
	$("#title2").hide();

	/*selecteur de class*/
	$(".par1").hide();

	/*Pseudo selecteur: nth-child*/
	/*$("p:nth-child").hide();*/


	/*Les évenements*/

	/*Selection d'un paraphe et ajout d'une fonction au click*/
	$("#p1").click(function(){
		console.log('click sur souris');
		$('#p5').hide();
	});	


	//entrer sur un element
	$("#p1").mouseenter(function(){
		console.log('enter sur le paragraphe');
		$('#p5').hide();
	});	

	//sortir sur un element
	$("#p1").mouseleave(function(){
		console.log('sortir sur le paragraphe');
		$('#p5').hide();
	});	

	//survol d'un élement
	$("#p1").hover(function(){
		console.log('survol du paragraphe');
		$('#p2').hide();
	},
	function() {
		console.log('fin du survol');
		$('#p5').show();		
	}
	);	

	//l'evenement on
	$("#p3").on("click", function(){
			console.log('click sur p2');
	});

	/*L'évenement in sous forme d'objet*/
	$("#p2").on({
		mouseenter: function () {
			console.log('entrer sur p2 avec on->');
		},
		click: function () {
			console.log("click en utilisant on->");
		}
	});


	/*Les différents effects qu'on peut faire avec jQuery*/
	$("#p6").click(function(){
		console.log('click sur p6');
		//cache l'élément de maniere progressive ("slow")
		//il peut prendre aussi un call back pour faire autre chose
		$('#p5').hide(2000, function(){
			$("#p6").hide(5000);
		});
	});	

	/*Effet de floue*/
	$("#p7").click(function() {
		$("#p8").fadeOut();
		$()
	});

	//toggle effect: affiche lors du clic
	//
	$("#p8").click(function(){
		$("#p6").toggle();
		$("#p7").toggleIn(200, 0.4);
	});
	

	/*Les animations*/
	$("#button1").click(function(){
		$("div").animate({
			left:'200px',
			opacity: 0.5,
			width: "+=100px",
			height: "+=00px"
		}, 3000, function(){
			$("#start").hide(function () {
				$("#start").show();
				left: "+="
			});
		});

		$("div").animate(
		{backgroundColor: "red", borderCollapse: 'collapse'},3000
		);
	});

	//stopper l'animation
	$("#stop").click(function(){
		$("div").stop();
	});

	/*effet slide + annimation*/

	// $(".slider").clic
	// 	$(".sliderdiv").slideUp(3000).slideDow(2000).fadeOut(2000);
	// });


	/*Interraction entre jQuey et HTML*/

	/*Extraire le texte dans un paragraphe par exemple*/

	let java = $("#java").text();
	console.log(java);

	/*etraire le contenu html*/
	let html = $("#htmltext").html();
	console.log(html);


	/*Recuperation et affichage de valeur d'un input*/
	$(".start").click(function(){
		var nom = $("#myname").val();
		console.log(nom);	
	});

	/*Voir le contenu d'un attribut spécifique*/
	$(".start").click(function(){
		var attrib = $("div").attr();
		console.log(attrib);	
	});

	/*Modification des élémnts de notre html*/

	//Modifier le texte d'un paragraph
	$("#java1").click(function(){
		$("#java1").text("JAVA is an Object Oreinted Programming language");
	});

	//modifier le contenu html
	$("#php1").click(function(){
		$("#php1").html("<b>PHP</b> is an Object Oreinted Programming language");
	});

	//modifier un attribut

	/*Ajouter des nouveaux elements html a notre page*/

	//ajout paragraphe dans le div ayant pour class .love


	$(".addparagraph").click(function(){
		$(".love").append("<p>My favorites languages: Java, PHP, JavaScript</p>");
				  /*
				  .prepend()
				  .after()
				  .before()

				  */		
	});


	/*Retirer un element html et son contenu*/

	$(".retirer").click(function(){
		$(".removeElements").remove();
				  
	});

	/*Vider le contenu d'un element*/
	$(".retirer").click(function(){
		$(".removeElements").empty();
	});


 	/*JQuery et le CSS*/

 	/*Ajout  d'une classe */

 	$("#ajoutClass").click(function(){
 		$("#pa1, #pa2").addClass("green bold");
 	});


	/*Retrait  d'une classe */

 	$("#retirerClass").click(function(){
 		$("#pa1, #pa2").removeClass("green bold");
 	});

 	//ajout et retrait
 	$("#ajoutRetrait").click(function(){
 		$("#pa3").toggleClass("green bold");
 	});


	/*jQuery et l'arboressance*/
	$("#manage").click(function(){
		//alert("Bonjour");

		//*modification de la couleur de bordeure du parent du paragraphe 1 au click*/
		//$("#paragraphe1").parent().css("border-color", "green");

		//*modification de la couleur de bordure de tous les ancêtresdu paragraphe 1 au click*/
		//$("#paragraphe1").parents().css("border-color", "green");


		/*selection des enfants d'un div*/
		//$("#div1").children().css("border-color", "green");

		/*selection des enfants specifique*/
		//$("#main").find("p").css("border-color", "green");

		/*Selection des elements qui partagent le meme parent*/
		//$("#paragraphe1").siblings().css("border-color", "green");

		/*Selection du frere suivant imediat*/
		//$("#paragraphe1").next().css("border-color", "green");

		/*Selection de tous les paragraphes*/
		//$("p").css("border-color", "green");

		/*Selection du premier paragraph parmi plusieurs*/
		//$("p").first().css("border-color", "green");

		/*Selection du dernier paragraph parmi plusieurs*/
		//$("p").last().css("border-color", "green");

		/*Selection d'un  paragraph en un idex precis*/
		//$("p").last().css("border-color", "green");

		/*filtrer la selection*/
		//selection des paragraphe avec une classe precise
		$("p").filter(".filter").css("border-color", "green");
	});


	/*Ajax et jQuery*/
	$("#testAjax").click(function(){
		$("#ajax").load("demo.txt");
	});

});
