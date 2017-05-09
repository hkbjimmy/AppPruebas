var app={
	inicio: function(){
		var botonClaro = document.querySelector('#claro');
		var botonOscuro = document.querySelector('#oscuro');

		botonClaro.addEventListener('click',this.ponloClaro,false);
		botonOscuro.addEventListener('click',this.ponloOscuro,false);
	},

	ponloClaro: function(){
		document.body.className = 'claro';
	},

	ponloOscuro: function(){
		window.location.href = "https://apppruebas-d0c34.firebaseapp.com/";
	},

};

if ('addEventListener' in document){
	document.addEventListener('DOMContentLoaded', function(){
		FastClick.attach(document.body);
		app.inicio();
	}, false);
}
