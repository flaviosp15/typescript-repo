// PRIMITIVES
(() => {
  const id: number = 12;
  const user: string = 'Tom Brady';
  const injured: boolean = false;
})();

// ARRAYS
(() => {
  const individualStats: number[] = [1650, 4.5, 125, 48.56, 0.456];
})();

// ANY
(() => {
  let obj: any = { x: 10, y: 15 };
  // obj.foo();
  // obj();
  obj.far = 100;
  obj = 'hello';
  const n: number = obj;
})();

// DEFINING PARAMETER TYPE ANNOTATION
(() => {
  const sum = (n1: number, n2: number) => {
    return n1 + n2;
  };
})();

// DEFINING RETURN TYPE ANNOTATION
(() => {
  const showTheDate = (date: Date): string => `Today is ${new Date()}!`;
})();

// OBJECT TYPES
(() => {
  const printCoordinates = (coord: { x: number; y: number }): any => {
    return `The coordinates are x: ${coord.x} and y: ${coord.y}`;
  };
  printCoordinates({ x: 45, y: 87 });
})();

// OPTIONAL PROPERTIES
(() => {
  const showProfile = function (obj: { name: string; nickname?: string }) {
    return obj;
  };
  showProfile({ name: 'Allen', nickname: 'The Answer' });
  showProfile({ name: 'Steve' });
})();

// UNION TYPE
(() => {
  function printId(id: number | string): string {
    return `ID nº: ${id}`;
  }
  printId(23856);
  printId('78945');
  // printId({ myId: 456848 }); // ERROR
})();

// TYPE ALIASES

type Profile = {
  user: string;
  birth: Date;
};

type ID = number | string;

(() => {
  function printBirthday(profile: Profile, id: ID) {
    return `The birthday's ${profile.user} (ID: ${id}) is ${profile.birth}`;
  }
  printBirthday({ user: 'Malcom', birth: new Date() }, 1025);
})();

// INTERFACES

interface Animal {
  name: string;
  type: string;
}

(() => {
  function printAnimal(animal: Animal) {
    return `The ${animal.name} is ${animal.type} animal.`;
  }
  printAnimal({ name: 'cat', type: 'domestic' });
})();
