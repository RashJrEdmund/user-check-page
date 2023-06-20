let arrayOfUsers = [
  { name: 'Rash Oracle', age: 20 },
  { name: 'Nana Otto', age: 20 },
  { name: 'Jr Jr', age: 21 },
  { name: 'Edmund Son', age: 22 },
  { name: 'Orashus F.', age: 17 },
  { name: 'Luciernaga Ndi', age: 19 },
  { name: 'The Godfather', age: 20 },
  { name: 'Storm King', age: 16 },
  { name: 'Brandy Jonathan', age: 21 },
  { name: 'Marry Anne', age: 20 },
  { name: 'Alaric Mboma', age: 21 },
  { name: 'Shey Emma', age: 29 },
  { name: 'Tata Malone', age: 20 },
  { name: 'Abu Bea', age: 24 },
  { name: 'Charles Peterson', age: 24 },
  { name: 'Mr. Gaston', age: 31 },
  { name: 'Mr. Leonard', age: 30 },
  { name: 'Mme Faith', age: 28 },
  { name: 'Gran Humphry', age: 20 },
  { name: 'Mr Arrey', age: 26 },
  { name: 'Ashley Jones', age: 15 },
  { name: 'Kilian Mbappe', age: 26 },
  { name: 'Christiano Ronaldo', age: 37 },
  { name: 'Leonel Messi', age: 35 },
  { name: 'Zlatan Ibrahim', age: 41 },
  { name: 'Lebron James', age: 38 },
  { name: 'Jamel Morant', age: 23 },
  { name: 'Steve Dogllas', age: 19 },
  { name: 'Steve Rogers', age: 30 },
  { name: 'Vin Diesel', age: 28 },
  { name: 'Jack Sparrow', age: 59 },
  { name: 'Senior Dev', age: 19 },
  { name: 'F Kelmith', age: 20 }
]

export const resetData = [
  { name: 'Rash Oracle', age: 20 },
  { name: 'Nana Otto', age: 20 },
  { name: 'Jr Jr', age: 21 },
  { name: 'Edmund Son', age: 22 },
  { name: 'Orashus F.', age: 17 },
  { name: 'Luciernaga Ndi', age: 19 },
  { name: 'The Godfather', age: 20 },
  { name: 'Storm King', age: 16 },
  { name: 'Brandy Jonathan', age: 21 },
  { name: 'Marry Anne', age: 20 },
  { name: 'Alaric Mboma', age: 21 },
  { name: 'Shey Emma', age: 29 },
  { name: 'Tata Malone', age: 20 },
  { name: 'Abu Bea', age: 24 },
  { name: 'Charles Peterson', age: 24 },
  { name: 'Mr. Gaston', age: 31 },
  { name: 'Mr. Leonard', age: 30 },
  { name: 'Mme Faith', age: 28 },
  { name: 'Gran Humphry', age: 20 },
  { name: 'Mr Arrey', age: 26 },
  { name: 'Ashley Jones', age: 15 },
  { name: 'Kilian Mbappe', age: 26 },
  { name: 'Christiano Ronaldo', age: 37 },
  { name: 'Leonel Messi', age: 35 },
  { name: 'Zlatan Ibrahim', age: 41 },
  { name: 'Lebron James', age: 38 },
  { name: 'Jamel Morant', age: 23 },
  { name: 'Steve Dogllas', age: 19 },
  { name: 'Steve Rogers', age: 30 },
  { name: 'Vin Diesel', age: 28 },
  { name: 'Jack Sparrow', age: 59 },
  { name: 'Senior Dev', age: 19 },
  { name: 'F Kelmith', age: 20 }
];

(() => {
  const sessionData = JSON.parse(window?.sessionStorage.getItem('users'))
  if (!sessionData) {
    window.sessionStorage.setItem('users', JSON.stringify(arrayOfUsers))
    return
  }

  arrayOfUsers = sessionData
})()

export default arrayOfUsers
