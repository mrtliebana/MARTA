$(function(){

    function actual() {

         fecha=new Date();
         hora=fecha.getHours();
         minuto=fecha.getMinutes();
         segundo=fecha.getSeconds();

         	 if (hora<10) { hora="0"+hora; }

	         if (minuto<10) { minuto="0"+minuto; }

	         if (segundo<10) { segundo="0"+segundo; }


     //para que el color del fondo sea el RGB que forman los 6 digitos de la hora en cada segundo

	    color = "#"+hora+minuto+segundo;

	    $ ("body" ). css("background-color", color ) ;
	
	    setInterval(color, 1000);


    }

	function actualizar() { 

		   mihora=actual();  

		   $("#reloj").html(`${hora}:${minuto}:${segundo}`);}


	setInterval(actualizar,1000);

    actual()


});