// PRIMITIVES
(function () {
    var id = 12;
    var user = 'Tom Brady';
    var injured = false;
})();
// ARRAYS
(function () {
    var individualStats = [1650, 4.5, 125, 48.56, 0.456];
})();
// ANY
(function () {
    var obj = { x: 10, y: 15 };
    // obj.foo();
    // obj();
    obj.far = 100;
    obj = 'hello';
    var n = obj;
})();
// DEFINING PARAMETER TYPE ANNOTATION
(function () {
    var sum = function (n1, n2) {
        return n1 + n2;
    };
})();
// DEFINING RETURN TYPE ANNOTATION
(function () {
    var showTheDate = function (date) { return "Today is ".concat(new Date(), "!"); };
})();
// OBJECT TYPES
(function () {
    var printCoordinates = function (coord) {
        return "The coordinates are x: ".concat(coord.x, " and y: ").concat(coord.y);
    };
    printCoordinates({ x: 45, y: 87 });
})();
// OPTIONAL PROPERTIES
(function () {
    var showProfile = function (obj) {
        return obj;
    };
    showProfile({ name: 'Allen', nickname: 'The Answer' });
    showProfile({ name: 'Steve' });
})();
// UNION TYPE
(function () {
    function printId(id) {
        return "ID n\u00BA: ".concat(id);
    }
    printId(23856);
    printId('78945');
    // printId({ myId: 456848 }); // ERROR
})();
(function () {
    function printBirthday(profile, id) {
        return "The birthday's ".concat(profile.user, " (ID: ").concat(id, ") is ").concat(profile.birth);
    }
    printBirthday({ user: 'Malcom', birth: new Date() }, 1025);
})();
(function () {
    function printAnimal(animal) {
        return "The ".concat(animal.name, " is ").concat(animal.type, " animal.");
    }
    printAnimal({ name: 'cat', type: 'domestic' });
})();
