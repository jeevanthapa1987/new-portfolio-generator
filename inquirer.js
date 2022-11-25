


const fs = require('fs');
const inquirer = require('inquirer');
//prompt the user
inquirer.prompt([
  {
    type:'input',
    name:'name',
    message:'What is your name?'
  },
  {
    type:'list',
    name:'contact',
    message:'Wha is your preferred methods of communication?',
    choices:['email','phone','slack','smoke signal']
  },
  {
    type:'checkbox',
    name:'stack',
    message:'What language do you know?',
    choices:['html','css','javascript','jquery']
  }
])
//write the user response to a file by chaining the below call back method to the prompt above
.then(function(data){
  //Bonus:generate the name of your user file from their input
  const filename = 
  data.name
  .toLowerCase()
  .split(" ")
  .join(" ") + " .json";

  fs.writeFile(filename,JSON.stringify(data,null,'/t'),function(err) {
if(err) {
  return console.log(err);
}
console.log('success');
  });
});
inquirer.prompt([
    /*pass your question in here*/
])
.catch((error) => {
  if(error.isTyError){
    //Prompt can't be rendered in the current environment
  }
  else{
    //something went wrong
  }
})