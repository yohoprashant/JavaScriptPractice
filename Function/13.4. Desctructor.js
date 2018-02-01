let person = {
  title: "Dr",
  name: "Anil Maharjan",
  age: 30,
  designation: "Sr. Web Developer"
}

let getPersonInfo = (function({name, designation, title="Mr"}){
  console.log( title +" " + name + " is a " + designation);
}(person))
