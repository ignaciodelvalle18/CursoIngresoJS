function mostrar()
{

	var nota;
	var notaBaja;
	var promedio;
	var contador;
	var acumuladorNota;
	var sexo;
	var varonesMayor6;
	var sexoNotaBaja;
	var acumuladorAlumno;

	
	promedio = 0;
	contador = 0;
	varonesMayor6 = 0;


	while(contador<5)
	{
		contador = contador +1;
		nota = prompt("Ingrese nota del alumno");
		nota = parseInt(nota);

		while(nota>10 || nota<0)
		{
			nota = prompt("ERROR Indique nota de 0 a 10");
			nota = parseInt(nota);
		}

		sexo = prompt("Especifique sexo del alumno F o M");
		while (sexo!="f" && sexo!="m")
		{
			sexo = prompt("ERROR sexo F o M");
		}

		promedio=promedio+nota;

		if(contador==1)
		{
			notaBaja = nota;
			sexoNotaBaja = sexo;

		}
		else if (nota<notaBaja)
		{
			notaBaja = nota;
			sexoNotaBaja = sexo;
		}
		if(sexo="m" && nota>=6)
		{
			varonesMayor6 = varonesMayor6 + 1;
		}


	}	

	promedio = promedio /5;
	alert("El promedio de las notas es "+promedio+", la nota más baja "+notaBaja+" y el sexo de ese alumno es "+sexoNotaBaja+" y la cantidd de hombres con nota igual o mayor a 6 es de "+varonesMayor6);





}


