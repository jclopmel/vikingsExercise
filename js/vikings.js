
	var weapons 	= ["axe","spear","bow","shield"];
	var names 		= ["Ragnar", "Loky", "Lagertha", "Bjorn","Lohtbruck", "Hans", "Jensen", "Olaf", "Sven", "Axe"];

	function randomNumber (min, max){
		return Math.floor(Math.random() * (max - min) + min);
	}


	var Vikings = function(name, health, strengh){

	  this.name 	= names[randomNumber(10,1)];
	  this.health 	= randomNumber(100,80);
	  this.strengh  = randomNumber(30,10);
	  this.weapon 	= weapons[randomNumber(0,3)];

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

	  this.health 	= randomNumber(90,70);
	  this.strengh  = randomNumber(20,10);
	  this.weapon 	= weapons[randomNumber(0,3)];

	}

	saxon1 = new Saxons ();
	saxon2 = new Saxons ();

	function fight (num1,num2) {

	/*  -------------------------------------- creacion de las armadas    -------------------------------------------------  */

		var army = [];												//Creación de army de vikingos
		for(var i = 0; i <num1; i++){

			army.push(viking = new Vikings ());
		}


		var army2 = [];												//Creación de army de saxons
		for(var i = 0; i <num2; i++){

			army2.push(saxon = new Saxons ());
		}

		/*  -------------------------------------- Bucle for para el combate    -------------------------------------------------  */

		var turns= randomNumber(8,5);

		var vikingCasualties=0;
		var saxonCasualties=0;

		for (var i = 0; i < turns; i++) {
			var fighter1=army[randomNumber(num1,1)];					//Antes era variable random*10, comprobar funcionalidad
			var fighter2=army2[randomNumber(num2,1)];

//Meter un object.prototype para añadir el arma y su valor como fuerza de ataque			
		

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

