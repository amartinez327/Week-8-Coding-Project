console.log("Week 8 project");
//Coming up with an array, creating the first class using Pascl notion. 

//Vehicle make, Vehicle year, Vehicle color, Vehicle availability 
//Inventory = Class A
//vehicleMake = a (lowercase)
//Available = Class B
//Model = b (lowercase)
//ColorOfVehicle = c (lowercase)
//make = x (lowercase)
//Options = Class C
//VehicleCategories = D
//TintedWindows = d (lowercase)
//MainMenuOptions = E
//nonInspection = e
//CategoryMenuOptions = F
//CategoryInfo = f (lowercase)
//VehicleCatString = Y
//CategoryPreference = M
class Inventory {
constructor (vehicleMake) {   //creating and initializing the objects with the second class called Inventory
    this.vehicleMake = [];
    //creating a blank array for this.vehicleYear. 
    }
    
}
class Available  {   //next class is vehicle, this will contain an array for vehicles since there could be multiple vehicles in each category. 
    constructor (model, colorOfVehicle) 
    {  //creating and initializing the objects with my first class called vehicle.  
        this.colorOfVehicle = colorOfVehicle;  //calling the objects
        this.model = [];
    }  //describes or prints out the vehicle 
            describe(){ 
    return `${this.model} are avilabile in these ${this.colorOfVehicle}`
    }



addAvailable(make){ //add vehicle year by creating the following method. 
    if(make instanceof Available){ //adding a check to see if our vehicle year is an instance of the availability class (second class)
    this.make.push(make);// adding an error message so if users add the wrong thing, they will know. 
}else {
    throw new Error (`You can only add an instance Available. Argument is not available;
${make}`);
   }
}

describe(){
    return `${vehicleMake} has ${this.make.length} color of vehicle`;
  }
}

class Options{//creating class which is the Options menu. it will drive the applicaiton and all the choices
    constructor(){//leaving the constructor open. 
        this.tintedWindows = [];//initiatlizing one category at a time but inializing on the category that is selected. 
        this.nonInspection = null;
    }       

start(){//adding a method that will be the entry point of this menu application
   console.log("car app has started.....");
    let selection = this.showMainMenuOptions();//declaring selection variable to get user input
    console.log("This is my selection:", selection);

    while(selection !=0){//If selection does not equal zero the while loop will run, if anything other than options selected
//the default is set, the selection equal to zero and the loop will stop.
    switch(selection){//using switch to do something off of what the user selects, below are the options within the menu. 
    case '1':
        this.createInventory();
        break;
    case '2':
        this.viewInventory();
        break;
    case '3':
        this.deleteInventory();
        break;
    case '4':
        this.displayInventorys();
        break;

    default:
        selection = 0;
}
selection = this.showMainMenuOptions();//shows menu the selected menu option
}
alert('You are now out of the menu!');//placing the alert outside the while loop
}
showMainMenuOptions(){//creating a prompt for the user to see and to select
    console.log("showing main menu options...");
   
    return prompt(`
    0) exit
    1) create Inventory
    2) view Inventory
    3) delete Inventory
    4) display all Inventory
    `);
    
}
showCategoryMenuOptions(categoryInfo){//creating Category Menu Options, takes the describe of the category and print out the info and returns to the prompt. 
    return prompt (`
    0) back
    1) create Available
    2) delete Available
    ------------------
    ${categoryInfo}
    `);
}
displayVehicleCategories(){//Impliment the cases in switch, Display Vehicle Categories' method
    let vehicleCatString = '';

    for(let i = 0; c<this.tintedWindows.length; i++){
        vehicleCatString += i + ')' + this.tintedWindows[i].category +'\n';
    }
    alert(vehicleCatString);
}
createInventory(){//create vehicle category method,
    let categoryPreference = prompt('Enter Vehilce Category(such as Ford, Chevy, Dodge, Toyota, or Nissan:');
//create a vehilce categroy prompt so user can enter the name of the vehicle category they are interested in purchaseing. 
    this.tintedWindows.push(new Inventory(categoryPreference));//pushes new vehicle category to the vehicle category array. 
}
viewInventory(){//create a view inventory method
    let index = prompt('Enter the index(number) of the Inventory you wish to view');//code to validate the input
        if(index > -1 && index < this.tintedWindows.length){//set selected category class property to the categroy inputed by the user
            this.nonInspection = this.tintedWindows[index];//creating a descript to print show, '\n' is to put in a new line. 
    let description = 'Vehicle Category:' + this.nonInspection.vehicleMake + '\n';//creating a loop to ask for all the types of vehicles on that categroy.
    for(let b =0; b<this.nonInspection.model.length; b++){
        description +=b + ')' + this.nonInspection.model[b].vehicleMake
        +'-'+ this.nonInspection.make[b].colorOfVehicle+'\n';//'\n' equals new line
    }
    let selection = this.showCategoryMenuOptions(description);//this switch is for the submenu
    switch(selection){
        case '1':
            this.createAvailable();
            break;
        case '2':
            this.deleteAvailable();
           break;
    }
        }
}


createAvailable(){
    let model = prompt('Enter name of the model');//creating prompt for the name of brand of vehicle user is interested in
    let colorOfVehicle = prompt('Enter list of colors Available');//

    this.selectednonInspection.model.push(new Inventory(model,colorOfVehicle));
}
deleteAvailable(){//creating method to delete available has been entered
    let index = prompt('Enter the index(number) of Inventory you wish to delete:');//making sure the index is 0 or greater, and
        if(index > -1 && index < this.nonInspection.make.length){//that it is looking at the selected category. 
            this.selectednonInspection.make.splice(index, 1);
        }
}
deleteInventory(){//this deleted inventory when selected
    let index = prompt('Enter the index(number) of the inventory you wish to delete:');
        if(index > -1 && index < this.tintedWindows.length)//checking to make sure the index is valid, at least 0 but no longer
//than the number of categories in the array
        this.tintedWindows.splice(index, 1);
    }
}
    //creating an instance of our menu 00
let x = new Options();
//invoking the start method in our code
x.start();

//1. create a instance of the class
//let carApplication = new Options()
//console.log("This is my car app:", carApplication);

//carApplication.start()

//2. call on methods or actions of the class