

const obj = {
    name: 'Kawsar',
    email: 'kawsarahmed.dev@gmail.com'
}


// adding property in object O(1)
obj.profession = 'Developer';


// remove from object O(1)
delete obj.profession;


// searching element O(1)
console.log('email' in obj);


// loop O(n)
for (const key in obj) {
    console.log(key)
}


console.log(obj)


