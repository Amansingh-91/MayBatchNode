const { students } = require('./data');
const express = require('express');

const app = express();
const port = 8000;

app.get('/api/students', (req, res) => {
    /*ToDo 1: Return the students array which is imported from data.js file*/
    res.status(200).json(students);
    
    
});

app.get('/api/student/:name', (req, res) => {
	/*ToDo 2: Get the name from the request params and check whether the name is available in student array, if it
	          is present return the student object else return status of 404*/
	          const reqName = req.params.name;
	          const data = students.find(student => student.name.toLowerCase() === reqName);
	          if(data){
	              return res.status(200).json(data);
	          }
	          res.status(404).send();
	          
	          
});

app.get('/api/student', (req, res) => {
	/*ToDo 3: Get the field1 and field2 value from request query, if any of the field is not present return status 400, 
	          check whether the field2 value has a property in student object and assign it to a variable, if field2 value
			  is not present in student object return status 400*/
    /*ToDo 4: If the field1 value is topper return the object which has the highest field2 value else 
			  if the field1 value is lowest return the object which has the least field2 value*/
    console.log(req.query);

    const {field1, field2} = req.query;
    // console.log(field1,field2);
    
    if(!field1 || !field2){
        return res.status(400).send();
    }
    // console.log(students[0][field2]);
    if(students[0][field2] !== undefined){
        
        if(field1 === "topper"){
            
            let topStudent = null;
            let maxMarks = 0;
            students.forEach(student =>{
                if(student[field2] > maxMarks){
                    topStudent = student;
                    maxMarks = student[field2];
                }
            })
            return res.status(200).json(topStudent);

        }
        else if(field1 === "lowest"){
            let topStudent = null;
            let minMarks = 99999999;
            students.forEach(student =>{
                if(student[field2] < minMarks){
                    topStudent = student;
                    minMarks = student[field2];
                    
                }
            });
            return res.status(200).json(topStudent);
        }
        // console.log("I am here");
        res.status(400).send();
    }
    // res.send("hello World");




});

app.listen(port);

module.exports = app;