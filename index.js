const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.use(express.json());

var classes = [
    {id: 01, slot: 3, subject: "Grade 10 English", group: 1, classroom: "A1"},
    {id: 02, slot: 2, subject: "Grade 10 English", group: 2, classroom: "C1"},
    {id: 03, slot: 1, subject: "Grade 10 Afrikaans", group: 1, classroom: "A2"},
    {id: 04, slot: 5, subject: "Grade 10 Afrikaans", group: 2, classroom: "C2"},
    {id: 05, slot: 4, subject: "Grade 10 History", group: 1, classroom: "Hall"},
    {id: 06, slot: 2, subject: "Grade 10 Mathematics", group: 1, classroom: "B1"},
    {id: 07, slot: 6, subject: "Grade 10 Physical Science", group: 1, classroom: "Lab"},
    {id: 08, slot: 1, subject: "Grade 10 Biology", group: 1, classroom: "Lab"},
    {id: 09, slot: 5, subject: "Grade 10 Accounting", group: 1, classroom: "Hall"},
    {id: 10, slot: 4, subject: "Grade 10 Life Orientation", group: 1, classroom: "B3"},
    {id: 11, slot: 1, subject: "Grade 11 English", group: 1, classroom: "A1"},
    {id: 12, slot: 6, subject: "Grade 11 English", group: 2, classroom: "C1"},
    {id: 13, slot: 3, subject: "Grade 11 Afrikaans", group: 1, classroom: "A2"},
    {id: 14, slot: 2, subject: "Grade 11 Afrikaans", group: 2, classroom: "C2"},
    {id: 15, slot: 1, subject: "Grade 11 History", group: 1, classroom: "Hall"},
    {id: 16, slot: 2, subject: "Grade 11 Mathematics", group: 1, classroom: "B1"},
    {id: 17, slot: 3, subject: "Grade 11 Physical Science", group: 1, classroom: "Lab"},
    {id: 18, slot: 4, subject: "Grade 11 Biology", group: 1, classroom: "Lab"},
    {id: 19, slot: 5, subject: "Grade 11 Accounting", group: 1, classroom: "Hall"},
    {id: 20, slot: 6, subject: "Grade 11 Life Orientation", group: 1, classroom: "B3"},
    {id: 21, slot: 4, subject: "Grade 12 English", group: 1, classroom: "A1"},
    {id: 22, slot: 5, subject: "Grade 12 English", group: 2, classroom: "C1"},
    {id: 23, slot: 6, subject: "Grade 12 Afrikaans", group: 1, classroom: "A2"},
    {id: 24, slot: 1, subject: "Grade 12 Afrikaans", group: 2, classroom: "C2"},
    {id: 25, slot: 2, subject: "Grade 12 History", group: 1, classroom: "Hall"},
    {id: 26, slot: 3, subject: "Grade 12 Mathematics", group: 1, classroom: "B1"},
    {id: 27, slot: 5, subject: "Grade 12 Physical Science", group: 1, classroom: "Lab"},
    {id: 28, slot: 6, subject: "Grade 12 Biology", group: 1, classroom: "Lab"},
    {id: 29, slot: 6, subject: "Grade 12 Accounting", group: 1, classroom: "Hall"},
    {id: 30, slot: 3, subject: "Grade 12 Life Orientation", classroom: "B3"}
];


//Return all classes
app.get('/api/classes', (req, res) => {
    res.send(classes);
});

//Return all classes with given id
app.get('/api/classes/:id', (req, res) => {
   const singclass = classes.find(c => c.id === parseInt(req.params.id));
   if (!singclass) res.status(404).send('Sorry! No class with that ID was found');
   res.send(singclass);
});

//Return all classes within a specfic timeslot
app.get('/api/classes/:slot', (req, res) => {
    const timeslot = classes.find(c => c.slot === parseInt(req.params.slot));
    if (!timeslot) res.status(404).send('Sorry! No class during that timeslot was found');
    res.send(timeslot);
 });

 //Return all classes taught in a specific classroom
app.get('/api/classes/:classroom', (req, res) => {
    const room= classes.find(c => c.id === parseInt(req.params.classroom));
    if (!room) res.status(404).send('Sorry! No class in that classroom was found');
    res.send(room);
 });

  //Return all classes belonging to a certain group
app.get('/api/classes/:classgroup', (req, res) => {
    const classgroup = classes.find(c => c.id === parseInt(req.params.classgroup));
    if (!classgroup) res.status(404).send('Sorry! No class in that group was found');
    res.send(classgroup);
 });
 
 

app.listen(3000, () => console.log('Listening on port 3000...'));