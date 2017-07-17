var Vikings = function(name, health, strengh){

  this.name 	= name;
  this.health 	= health;
  this.strengh  = strengh;

}

viking1 = new Vikings ('Ragnar', 100, 10);
viking2 = new Vikings ('Loky', 90, 20);


//function train (viking1,viking2) {

var result; 
	while(viking1.health > 0){

	viking1.health = viking1.health-viking2.strengh;
	}

	console.log('El resultado es ' + viking1.health);

//}





