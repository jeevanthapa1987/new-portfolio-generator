/*
  const fs = require('fs');
  const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});

*/
//const inquirer = require('inquirer');





const inquirer = require('inquirer');
const promptProject = portfolioData => {
  //if there is no 'projects' array property,create one
  if(!portfolioData.projects){
  portfolioData.projects = [];
  }
  console.log(`
  ================================
  add a new project
  `);

 return inquirer 
.prompt ([
  {
    type:'input',
    name:'name',
    message:'what is your name?(required)',
    validate:nameInput => {
      if(nameInput){
        return true;
      }
      else{
        console.log("please enter your name!");
        return false;
      }
    }
  }
{
  type:'input',
  name:'name',
  message:'What is your name of your project ?'
},
{
  type:'input',
  name:'description',
  message:'Provide a description of the project (Required) '
},
{
  type:'checkbox',
  name:'languages',
  message:'What did you build this project with ? (Check all that apply)',
  choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'] 
},
{
  type: 'input',
  name: 'link',
  message: 'Enter the GitHub link to your project. (Required)'
},
{
  type: 'confirm',
  name: 'feature',
  message: 'Would you like to feature this project?',
  default: false
},
{
  type: 'confirm',
  name: 'confirmAddProject',
  message: 'Would you like to enter another project?',
  default: false
} 
]);
};


promptUser()
.then(promptProject)
.then(portfolioData => {
  console.log(portfolioData);
});


promptUser()
.then(answers => console.log(answers))
.then(promptProject)
//.then(projectAnswers => console.log(projectAnswers));
.then(projectData => {
portfolioData.projects.push(projectData);
if(projectData.confirmAddProject) {
  return promptProject(portfolioData);
}
else{
  return portfolioData;

}
});

/*
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
*/