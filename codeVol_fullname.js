function fullNames(names) {
  let string = [];
  names.forEach((element) => {
    string.push(`${element.firstname} ${element.lastname}`);
  });
  return string;
  // return names.map((name) => `${name.firstname} ${name.lastname}`); // better solution
}

let names = [
  { firstname: 'Bruce', lastname: 'Wayne' },
  { firstname: 'Clark', lastname: 'Kent' },
];

console.log(fullNames(names));
