// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(name,string){
    for(i=0; i<name.length; i++){
        if(i != string){
            return false; 
        }
    }
    return name;
}
drivers.filter(findMathcing);
