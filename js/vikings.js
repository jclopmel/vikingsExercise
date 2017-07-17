var Vikings = function(name, health, strengh){

  this.name 	= name;
  this.health 	= health;
  this.strengh  = strengh;

}

viking1 = new Vikings ('Ragnar', 100, 9);
viking2 = new Vikings ('Loky', 90, 7);
viking3 = new Vikings ('Lagertha', 110, 5);
viking4 = new Vikings ('Bjorn', 120, 3);
viking5 = new Vikings ('Lohtbruck', 80, 11);


function train (Vikings,Vikings) {
	var primero


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
