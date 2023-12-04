const express = require('express');
const sql = require('./conn');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world again!\n')
});

app.get('/people/html', async (req, res) => {
  const people = await getPeople();

  let response = '<h3>People List</h3><ul>';
  people.forEach(p => response += `<li>${p.name}, age ${p.age}</li>`);
  response += '</ul>';
  
  res.send(response).end();
});

app.get('/people/json', async (req, res) => {
  const people = await getPeople();
  res.json(people).end();
})

const getPeople = async () => {
  return await sql`SELECT * FROM people`;
}

module.exports = app;