const findTheOldest = function(people) {
  return people.reduce((oldestPerson,currentPerson)=>{
    let oldestAge=getAge(oldestPerson.yearOfBirth,oldestPerson.yearOfDeath);
    let currentAge=getAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
    return oldestAge<currentAge?currentPerson:oldestPerson;
 }); 



};

function getAge(birth,death) {

    if (!death) {

        death = new Date().getFullYear();
        
    }
    return death-birth;
}

// Do not edit below this line
module.exports = findTheOldest;
