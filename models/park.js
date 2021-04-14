const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function (){
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurByName = function(dinosaur){
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.removeDinosaurBySpecies = function(species){
   for (let i = this.dinosaurs.length - 1; i >= 0; --i){
       if (this.dinosaurs[i].species === species){
           this.dinosaurs.splice(i,1);
       }
   }
    
}

Park.prototype.attractsMostGuests = function(){
    let array = [];
    let array2 = [];
    let mostGuests;
   

    for (let currentDinosaur of this.dinosaurs){
        array.push(currentDinosaur.guestsAttractedPerDay);
    }
    let largest = Math.max(...array);
    for (let currentDinosaur of this.dinosaurs){
        if (currentDinosaur.guestsAttractedPerDay === largest)
       mostGuests = currentDinosaur.species;
       
    }
    return mostGuests;
 
}

Park.prototype.listOfSpecies = function(species){
    let array = [];
    
    for (let currentDinosaur of this.dinosaurs){
        if (currentDinosaur.diet === species){
            array.push(currentDinosaur.species);
        }
        
    }
    return array.length;
}

Park.prototype.totalGuestsPerDay = function(){
    let total = 0;
        
    for (let currentDinosaur of this.dinosaurs){
       total += currentDinosaur.guestsAttractedPerDay;
        
    }
    
    return total;
    
}



Park.prototype.totalRevenuePerYear = function(){
   let total = 0;
   let guests = 0;

   guests = 365 * this.totalGuestsPerDay();
   total = guests * 20;
   return total;
    
}

Park.prototype.totalGuestsPerYear = function(){
    return this.totalGuestsPerDay() * 365;
}


module.exports = Park;
