const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Central', 20)

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Central');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinosaurs();
    
    assert.strictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function(){
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
      const actual = park.numberOfDinosaurs();
      assert.strictEqual(actual, 2);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
      park.addDinosaur(dinosaurOne);
      park.addDinosaur(dinosaurTwo);
      park.removeDinosaurByName('Diplodocus');
      const expected = 1;
      const actual = park.numberOfDinosaurs();
      assert.deepStrictEqual(actual, expected);

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
    const dinosaurThree = new Dinosaur('Velociraptor', 'carnivore', 64);
    const dinosaurFour = new Dinosaur('Tyrannosaurus', 'carnivore', 56);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.addDinosaur(dinosaurFour);
    const actual = park.attractsMostGuests();
    expected = 'Velociraptor';
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
    const dinosaurThree = new Dinosaur('Velociraptor', 'carnivore', 64);
    const dinosaurFour = new Dinosaur('Tyrannosaurus', 'carnivore', 56);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.addDinosaur(dinosaurFour);
    actual = park.listOfSpecies('carnivore');
    expected = 2;
    assert.deepStrictEqual(actual, expected);


  });

  it('should be able to calculate the total number of visitors per day',function() {
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
    const dinosaurThree = new Dinosaur('Velociraptor', 'carnivore', 64);
    const dinosaurFour = new Dinosaur('Tyrannosaurus', 'carnivore', 56);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.addDinosaur(dinosaurFour);
    actual = park.totalGuestsPerDay();
    assert.strictEqual(actual, 195);
  });


  it('should be able to calculate the total number of visitors per year', function(){
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
    const dinosaurThree = new Dinosaur('Velociraptor', 'carnivore', 64);
    const dinosaurFour = new Dinosaur('Tyrannosaurus', 'carnivore', 56);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.addDinosaur(dinosaurFour);
    // actual = 365 * park.totalGuestsPerDay();
    actual = park.totalGuestsPerYear();
    assert.strictEqual(actual, 71175)
  });

  it('should be able to calculate total revenue for one year', function(){
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
    const dinosaurThree = new Dinosaur('Velociraptor', 'carnivore', 64);
    const dinosaurFour = new Dinosaur('Tyrannosaurus', 'carnivore', 56);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.addDinosaur(dinosaurFour);
    actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 1423500)
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
    const dinosaurThree = new Dinosaur('Velociraptor', 'carnivore', 64);
    const dinosaurFour = new Dinosaur('Tyrannosaurus', 'carnivore', 56);
    const dinosaurFive = new Dinosaur('Velociraptor', 'carnivore', 62);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.addDinosaur(dinosaurFour);
    park.addDinosaur(dinosaurFive);
    park.removeDinosaurBySpecies('Velociraptor');
    actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 3);

  })
  it('should be able to remove all dinosaurs of a particular speciesTwo', function(){
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
    const dinosaurThree = new Dinosaur('Velociraptor', 'carnivore', 64);
    const dinosaurFour = new Dinosaur('Tyrannosaurus', 'carnivore', 56);
    const dinosaurFive = new Dinosaur('Velociraptor', 'carnivore', 62);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.addDinosaur(dinosaurFour);
    park.addDinosaur(dinosaurFive);
    park.removeDinosaurBySpecies('Barosaurus');
    actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 4);

  })

  it('should be able to remove all dinosaurs of a particular speciesThree', function(){
    const dinosaurOne = new Dinosaur('Barosaurus', 'herbivore', 50);
    const dinosaurTwo = new Dinosaur('Diplodocus', 'herbivore', 25);
    const dinosaurThree = new Dinosaur('Velociraptor', 'carnivore', 64);
    const dinosaurFour = new Dinosaur('Tyrannosaurus', 'carnivore', 56);
    const dinosaurFive = new Dinosaur('Tyrannosaurus', 'carnivore', 62);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    park.addDinosaur(dinosaurThree);
    park.addDinosaur(dinosaurFour);
    park.addDinosaur(dinosaurFive);
    park.removeDinosaurBySpecies('Tyrannosaurus');
    actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 3);

  })

});
