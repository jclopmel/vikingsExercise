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

  this.health 	= Math.random()*80;
  this.strengh  = Math.random()*25;

}

saxon1 = new Saxons ();
saxon2 = new Saxons ();



//Calculo del % victoria segun victimas


function fight (numero1,numero2) {

/*  -------------------------------------- creacion de las armadas    -------------------------------------------------  */

	var army = [];												//Creación de army de vikingos
	for(var i = 0; i <numero1; i++){

		army.push(viking = new Vikings ());
	}


	var army2 = [];												//Creación de army de saxons
	for(var i = 0; i <numero2; i++){

		army2.push(saxon = new Saxons ());
	}

	/*  -------------------------------------- Bucle for para el combate    -------------------------------------------------  */

	var turns= Math.floor(Math.random() * (8 - 5) + 5);

	var vikingCasualties=0;
	var saxonCasualties=0;

	for (var i = 0; i < turns; i++) {
		var fighter1=army[[Math.floor(Math.random()*10)]];
		var fighter2=army2[[Math.floor(Math.random()*10)]];
	

	/*  -------------------------------------- Bucle while para el duelo entre dos    -------------------------------------------------  */

		while(fighter1 > -10 && fighter2 > -10){

			fighter1.health = fighter1.health-fighter2.strengh;
			

			fighter2.health = fighter2.health-fighter1.strengh;
			
			}

		if (fighter1.health>fighter2.health){
			console.log(fighter1.name+" ha ganado el combate");
			saxonCasualties++;
		}else if (fighter1.health<fighter2.health) {
			console.log("El sajón ha ganado el combate");
			vikingCasualties++;
		}else{
			console.log("El combate ha sido igualado");
		}

	}
	var winner;

	if(vikingCasualties>saxonCasualties){
		winner="saxons";
		}else{
			winner="vikings"
		}

		console.log("Los ganadores son los "+winner+" tras "+turns+" turnos de combate. Ha habido "+vikingCasualties+" vikingos muertos frente a "+saxonCasualties+" sajones muertos.");

}

