const express = require('express')
const app = express()
const port = 3000
const books = require('./data/books.json');

app.get('/', (req, res) => {

  res.send('Home')
})

//1
app.get('/all', (req, res) => {

  res.json(books);
});

//2
app.get('/first', (req, res) => {

  res.json(books[0]);
});

//3
app.get('/last', (req, res) => {
  const last = books.length - 1;
  res.json(books[last]);
});

//4
app.get('/middle', (req, res) => {
  const middle = books.length / 2;
  res.json(books[middle]);
});

//5
app.get('/author/dante-alighieri', (req, res) => {
  const dante = books.find(book => book.author === 'Dante Alighieri');
  if (dante) {
    res.json(dante.title);
  } else {
    res.status(404).send('No existe el libro.');
  }
});

//6
app.get('/country/charles-dickens', (req, res) => {
  const dickens = books.find(book => book.author === 'Charles Dickens');
  if (dickens) {
    res.json(dickens.country);
  } else {
    res.status(404).send('No existe el libro.');
  }
});

//7
app.get('/year&pages/cervantes', (req, res) => {
  const cervantes = books.find(book => book.author === 'Miguel de Cervantes');
  if (cervantes) {
    res.send({ pages: cervantes.pages, year: cervantes.year });
  } else {
    res.status(404).send('No existe el libro.');
  }
});

//8
app.get('/country/count/spain', (req, res) => {
  let count = 0;
  for (i = 0; i < books.length; i++) {
    if (books[i].country === 'Spain') {
      count += 1;
    };
  };
  res.json(count);
});

//9
app.get('/country/at-least/germany', (req, res) => {
  const germany = books.find(book => book.country === 'Germany');
  germany !== '' ? res.send(true) : false;
});

//10
app.get('/pages/all-greater/200', (req, res) => {
  let greaterThan200 = true;
  for (let i = 0; i < books.length; i++) {
    if (books[i].pages <= 200) {
      greaterThan200 = false;
    }
  }
  res.json(greaterThan200);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})