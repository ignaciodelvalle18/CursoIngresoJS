function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje; 


switch (mesDelAño)

	{	
		case "Enero":
			mensaje = "Que comiences bien el año!"
			break;
		case "Marzo":
			mensaje = "A clases!"
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones :D!"
			break;
		case "Diciembre":
			mensaje = "Felices fiestas bro"
			break;



	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN