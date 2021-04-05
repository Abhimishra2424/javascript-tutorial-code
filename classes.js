// in programming languages we often say "an Object is an instance of class"
// this means that, using a class , i can  create many
// objects and they all share methods and propeties

// since objects can be enhanced , there are many ways
// to create objects sharing methods and properties
// but we want the simplest one

// ECMAscript 6 2015 provides the keywords class, making it
// very east to create a CLAss......

// A class is a type of function but instead of using the keyword
// function to initiate  it we use the  keywords class and the
// properties are assigend inside a constructor()Method.

// A class is user defined blueprint or prototype from which
// objects are created it reprensents the set of properties or
// methods that are common to all object of one type.


class students {
  constructor(name, age, cls) {
    this.myname = name;
    this.myage = age;
    this.myclass = cls;
  }
  biodata() {
    return `hey my name is ${this.myname} and my age is ${this.myage} and my class is ${this.myclass}`;
  }
}
class player extends students {
  constructor(name, age, cls, game) {
    super(name, age, cls);
    this.mygame = game;
  }
  play_biodata() {
    return `${super.biodata()}. I am palyer of ${this.mygame}`;
  }
}


let obj1 = new player("abhi", 20, "bscit", "football");
console.log(obj1.play_biodata());
