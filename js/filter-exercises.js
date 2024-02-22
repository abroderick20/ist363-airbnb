//console.log('filter file ready');
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const filteredNumbers = numbers.filter((number) => {
  return number < 10;
});

console.log({ filteredNumbers });

const people = [
  { name: 'John', age: 25 },
  { name: 'Bill', age: 30 },
  { name: 'Dave', age: 22 },
  { name: 'Jill', age: 35 },
  { name: 'Katie', age: 28 },
  { name: 'Martha', age: 27 },
];

const filteredPeople = people.filter((person) => {
  return person.age < 30;
});

console.log({ filteredPeople });

const cars = [
  { make: 'Ford', model: 'Fusion', year: 2019 },
  { make: 'Chevrolet', model: 'Malibu', year: 2018 },
  { make: 'Ford', model: 'Focus', year: 2017 },
  { make: 'Chevrolet', model: 'Cruze', year: 2016 },
  { make: 'Ford', model: 'Taurus', year: 2015 },
  { make: 'Chevrolet', model: 'Impala', year: 2014 },
];

const filteredCars = cars.filter(() => {
  return cars.make === 'Ford';
});

console.log({ filteredCars });

//example 4
const filterGames = (games, monthIndex) => {
  const filterGames = games.filter((game) => {
    const dateObject = new Date(game.date);
    //return games.month === monthIndex;
    return dateObject.getMonth() === monthIndex;
  });
  console.log({ filterGames });
};
//import schedule.json
//then convert to json
//then do something with it
fetch('js/schedule.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log({ data });
    filterGames(data, 1);
  })
  .catch(); //promise
