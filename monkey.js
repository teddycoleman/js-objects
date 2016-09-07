function Monkey (name, species){
	this.name = name;
	this.species = species;
	this.foodEaten = [];

	this.eatSomething = function(food) {
		this.foodEaten.push(food);
	}
	this.introduce = function () {
		return "Hi my name is: " + name + ". I'm a " + species + "and I've eaten " + foodEaten;
	}
}

var monkey1 = new Monkey("george", "ape");
var monkey2 = new Monkey("mike","baboon");
var monkey3 = new Monkey("steve","howler monkey");

monkey1.species;
monkey1.eatSomething("banana");
monkey1.eatSomething("apple");
monkey1.foodEaten;
monkey2.name;
monkey3.name;
monkey3.introduce;

