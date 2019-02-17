function mostrar() {
	//tomo la edad

	var edad18;
	edad18 = edad.value;
	edad18 = parseInt(edad18);

	if (edad18 >= 18) {
		alert("sos mayor");
	} else if (edad18 >= 13 && edad18 <= 17) {
		alert("sos adolescente");
	} else {
		alert("sos un niño");
	}



}//FIN DE LA FUNCIÓN