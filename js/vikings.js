var names = ["Ragnar", "Loky", "Lagertha", "Bjorn","Lohtbruck", "Hans", "Jensen", "Olaf", "Sven", "Axe"];
var Vikings = function(name, health, strengh){

  this.name 	= names[Math.floor(Math.random()*10)];
  this.health 	= Math.random()*100;
  this.strengh  = Math.random()*30;

}

/*
viking1 = new Vikings ('Ragnar', 100, 9);
viking2 = new Vikings ('Loky', 90, 7);
viking3 = new Vikings ('Lagertha', 110, 5);
viking4 = new Vikings ('Bjorn', 120, 3);
viking5 = new Vikings ('Lohtbruck', 80, 11);
*/

function train (Vikings,Vikings) {

	while(viking1.health > 0 && viking2.health > 0){

		viking1.health = viking1.health-viking2.strengh;
		//console.log(viking2.name+" ha atacado a "+viking1.name+" y le quedan "+viking1.health+" puntos de vida");

		viking2.health = viking2.health-viking1.strengh;
		//console.log(viking1.name+" ha atacado a "+viking2.name+"  y le quedan "+viking2.health+" puntos de vida");
		}

	if (viking1.health>viking2.health){
		console.log(viking1.name+" ha ganado el combate");
	}else if (viking1.health<viking2.health) {
		console.log(viking2.name+" ha ganado el combate");
	}else{
		console.log("El combate ha sido igualado");
	}
}



var Saxons = function(health, strengh){

  this.health 	= Math.random()*60;
  this.strengh  = Math.random()*20;

}

saxon1 = new Saxons ();
saxon2 = new Saxons ();

//Batalla con vida por debajo de cero

//Duracion 5 a 8 turnos
//Lucha de sajones aleatoriamente
//Calculo del % victoria segun victimas


function fight (numero1,numero2) {

	var army = [];

	for(var i = 0; i <numero1; i++){

		army.push(viking = new Vikings ());
	}


	var army2 = [];

	for(var i = 0; i <numero2; i++){

		army2.push(saxon = new Saxons ());
	}



saxon  = new Saxons ();

	while(viking1.health > 0 && viking2.health > 0){

		viking1.health = viking1.health-viking2.strengh;
		

		viking2.health = viking2.health-viking1.strengh;
		
		}

	if (viking1.health>viking2.health){
		console.log(viking1.name+" ha ganado el combate");
	}else if (viking1.health<viking2.health) {
		console.log(viking2.name+" ha ganado el combate");
	}else{
		console.log("El combate ha sido igualado");
	}
}

