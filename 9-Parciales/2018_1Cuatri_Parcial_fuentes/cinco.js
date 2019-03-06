function mostrar()
{

	var sistemasolar;
	var mensaje;

	sistemasolar = prompt("Ingrese un planeta del sistema solar");

	switch(sistemasolar)
	{
		case "mercurio":
		mensaje="acá hace más calor";
		break;
		case "venus":
		mensaje="acá hace más calor";
		break;
		case "tierra":
		mensaje="acá vivimos";
		break;
		case "marte":
		mensaje="acá hace más calor";
		break;
		case "júpiter":
		mensaje="acá hace más frio";
		break;
		case "saturno":
		mensaje="acá hace más frio";
		break;
		case "urano":
		mensaje="acá hace más frio";
		break;
		case "neptuno":
		mensaje="acá hace más frio";
		break;
		default:
			mensaje = "ERROR No ingresó un planeta válido";
			break;
	}
	alert(mensaje);

}
