/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{



	var sueldo11;
	var aumento;
	var sueldofinal;
	var cuadroresultado	

	sueldo11 = sueldo.value;
	aumento = (sueldo11 * 10 / 100);
	sueldofinal = (sueldo11 + aumento);
	cuadroresultado = resultado.value ;

	sueldo11 = parseInt(sueldo11);


	

	cuadroresultado ("sueldofinal");

	
}
