"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var username = "Serge";
var age = 1024;
function myName(name) {
    if (name) {
        return "My name is ".concat(name);
    }
    else {
        return "Error";
    }
}
console.log(myName(username));
var currRate = "1.05";
var fetchCurr = function (response) {
    var data = JSON.parse(response);
    return data;
};
function transferEurToUsd(available, amount, commission) {
    if (available) {
        var res = fetchCurr(currRate) * amount * commission;
        console.log(res);
    }
    else {
        console.log("Unavailable");
    }
}
transferEurToUsd(true, 500, 1.05);
var creasteError = function (msg) {
    throw new Error(msg);
};
// -------------------
var someData = {
    name: "Serge",
    isCoder: true,
    justNum: 110,
};
var showData = function (data) {
    return "Name ".concat(data.name, ", is coder = ").concat(data.isCoder, " and just number is ").concat(data.justNum, ".");
};
console.log(showData(someData));
var strings = ["dev", "design", "bi"];
var nums = [1, 2, 3];
var nums2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// ------------------------
var userDataTuple = [true, 40, "John"];
var bthd = userDataTuple[0], userAge = userDataTuple[1], userName = userDataTuple[2];
// ------------------------
// Union type
var msg = 5;
// ------------------------
// Narrowing
function printMsg(message) {
    if (typeof message === "string") {
        console.log(message.toLowerCase());
    }
    else {
        console.log(message + 1);
    }
}
printMsg("Hello");
printMsg(2);
// ---------------- Literal types ----------------
var message2 = "Serge";
function startServer(protocol, port) {
    console.log("Server was started on ".concat(protocol, "://server:").concat(port));
    return "Server srarted";
}
startServer("https", 3001);
function sayHeyName(name) {
    console.log("Hey, ".concat(name, "!"));
}
sayHeyName("Lada");
var serverConfig = {
    protocol: "https",
    port: 3000,
};
var backupConfig = {
    protocol: "http",
    port: 3001,
};
var serverConfigWithRole = {
    protocol: "https",
    port: 3000,
    role: "admin",
};
var startServer2 = function (protocol, port) {
    console.log(protocol, port);
    return "Server started";
};
var serverConfigWithRoleAndTest = {
    protocol: "https",
    port: 3000,
    role: "admin",
    test: "test test test",
};
var styles = {
    position: "absolute",
    top: "20px",
    left: "20px",
};
var serverConfig2 = {
    protocol: "https",
    port: 3000,
};
var backupConfig2 = {
    protocol: "http",
    port: 3001,
    test: "test",
};
var startNewServer = function (config) {
    console.log("Server was started on ".concat(config.protocol, "://server:").concat(config.port));
    return "Server started";
};
startNewServer(serverConfig2);
// will be ok even if we are not using all values from backupConfig2
startNewServer(backupConfig2);
var user = {
    login: "admin",
    pass: "qwerty",
    age: 99,
};
user.pass = "new_pass";
// Cannot assign new value to 'login' because it is a read-only property.
// user.login = "new_login";
var user2 = {
    login: "admin2",
    pass: "qwerty2",
    age: 992,
};
// Cannot assign to 'age' because all values are read-only property.
// user2.age = 1;
// All data in arr is readonly, you can't change existing value or push new value
var basicPorts = [3000, 3001, 5000];
// ---------- Enums ----------
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGHT"] = 1] = "RIGHT";
    Directions[Directions["LEFT"] = 2] = "LEFT";
    Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
})(Directions || (Directions = {}));
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease in";
    TimingFunc["LINEAR"] = "linear";
})(TimingFunc || (TimingFunc = {}));
function frame(elem, dir, tFunc) {
    console.log(elem, dir, tFunc);
}
frame("id", Directions.RIGHT, TimingFunc.EASE_IN);
// ---------- Unknown type ----------
var someUserData = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';
function safeParse(s) {
    return JSON.parse(s);
}
var data = safeParse(someUserData);
function transferData(d) {
    if (typeof d === "string") {
        console.log(d.toLocaleLowerCase());
    }
    else if (typeof d === "object" && d !== null) {
        console.log(d);
    }
    else {
        console.error("Some Error");
    }
}
transferData(data);
// ------------------------
var PI = 3.14;
var PIClone;
var department = {
    name: "FED",
    budget: 100000,
};
function transformDepartment(department, amount) {
    return {
        name: department.name,
        projectBudget: amount,
    };
}
var myProject = transformDepartment(department, 150000);
console.log(myProject);
// ---------- Type Guard ----------
function isNumber(n) {
    return typeof n === "number";
}
console.log(isNumber(5));
var myCar = {
    engine: "diesel",
    wheels: {
        season: "winter",
        amount: 4,
    },
};
var myExBoat = {
    engine: "absent",
    sail: "absent",
};
function isCar(car) {
    var _a;
    // Now not working without ?. Do not know why.
    return ((_a = car.wheels) === null || _a === void 0 ? void 0 : _a.amount) !== undefined;
}
function isShip(ship) {
    return ship.sail !== undefined;
}
function aboutVehicle(vehicle) {
    if (isCar(vehicle)) {
        console.log("This car has ".concat(vehicle.wheels.season, " wheels."));
    }
    else if (isShip(vehicle)) {
        console.log("This ship has ".concat(vehicle.sail, " sail."));
    }
    else {
        // Type never
        return vehicle;
    }
}
aboutVehicle(myCar);
aboutVehicle(myExBoat);
function calculateArea(a, b) {
    if (b) {
        var rect = {
            a: a,
            b: b,
            area: a * b,
        };
        return rect;
    }
    else {
        var square = {
            side: a,
            area: a * a,
        };
        return square;
    }
}
// Наводячи на функцію зразу видно її опис завдяки тому що всі можливі варіанти було описано безпосередньо перед функцією
console.log(calculateArea(2, 3));
console.log(calculateArea(2));
// ---------- Generics types and interfaces ----------
var numbers = [1, 2, 3];
function processing(data) {
    return data;
}
var newFunc = processing;
// тип віку зазначений заздалегідь, а тип для login створюємо в момент безпосереднього створення юзера
var user123 = {
    login: "some str",
    age: 25,
};
var data123 = [5, 5];
var user1234 = {
    login: "some str",
    age: 25,
    parents: {
        mother: "best in the world",
        father: null,
        married: false,
    },
};
// ----------
var depositMoney = function (amount) {
    console.log("req to the server with amount ".concat(amount));
    return amount;
};
console.log(depositMoney(500));
console.log(depositMoney("500$"));
// ERROR. Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// console.log(depositMoney(false));
// ---------- Generics classes ----------
var ClassUser = /** @class */ (function () {
    function ClassUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return ClassUser;
}());
var Carl = new ClassUser("Carl", 30);
function action(state) {
    // Error. Cannot assign to 'data' because it is a read-only property.
    // state.data = "new data";
}
// завдяки Partial всі властивості всередині обʼєкту не є обовʼязковими. тут ми використовуємо лише data і не використовуємо tag
// Required назпаки робить всі властивості обовʼязковими, навіть якщо раніше вони такими не було(наприклад було tag?: string;)
var state = {
    data: "smth",
};
// const keys: CompanyKeys = 'debts'
function printDebts(company, name, debts) {
    console.log("Company ".concat(company[name], ", debts: ").concat(company[debts]));
}
var hh = {
    name: "HH",
    debts: 500,
};
printDebts(hh, "name", "debts");
// ---------- Operator typeof ----------
var google = {
    name: "Google",
    debts: 1000,
};
// "name" | "debts"
var keys = "name";
var mySmth = {
    name: "IDK",
    debts: 350,
    departments: {
        sales: "sales",
        developer: "dev",
    },
    managements: {
        owner: "John",
    },
};
// const test123: IDataFromDataBase
var test123 = {
    calories: 123,
};
var sam = {
    name: "Sam",
    age: "20",
    role: "hobbit",
};
var gameData = {
    john: {
        customUsa: "string",
        customChina: "string",
        customUkraine: "string",
    },
    karl: {
        customUsa: "string",
        customChina: "string",
        customUkraine: "string",
    },
};
// ----------
function calculate(a, b) {
    return a * b;
}
var anotherRes = 7;
// ---------- Working with server, JSON ----------
var toDoList = [];
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) { return response.json(); })
    .then(function (json) {
    if ("id" && "userId" in json) {
        toDoList.push(json); // if one obj
    }
    else if (Array.isArray(json)) {
        toDoList = json; // if arr of obj
    }
    else {
        console.log("Ouuu. SMTH!");
    }
    console.log(toDoList);
})
    .catch(function (error) { return console.log(error); });
// ---------- promise
var promise = new Promise(function (resolve, reject) {
    resolve("Test");
});
promise.then(function (value) {
    console.log(value.toLocaleLowerCase());
});
// ---------- Classes ----------
// class Box {
//   width: number;
//   height: number;
//   volume: string;
//   // додаємо перевантаження(overload) для кращої читабельності
//   constructor(volume: string);
//   constructor(width: number);
//   constructor(widthOrVolume: number | string) {
//     if (typeof widthOrVolume === "number") {
//       this.width = widthOrVolume;
//     } else {
//       this.volume = widthOrVolume;
//     }
//   }
// }
var Box = /** @class */ (function () {
    function Box(width, volume, content) {
        this.width = width;
        this.volume = volume;
        //символ лодаш( '_' ) це вказівка для інших розробників що дане значення не можна змінювати вручну. Але це лише вказівка, фізично це все ще можна зробити.
        this._content = content;
        this.height = 500;
    }
    Box.prototype.calculateVolume = function () {
        if (!this.volume) {
            this.volume = this.width * this.height;
            console.log("Package volume: ".concat(this.volume, " "));
        }
        else {
            console.log("Package volume: ".concat(this.volume, " "));
        }
    };
    Box.prototype.checkBoxSize = function (transport) {
        var _this = this;
        if (typeof transport === "number") {
            return transport >= this.width ? "Ok" : "Not ok";
        }
        else {
            return transport.some(function (t) { return t >= _this.width; }) ? "Ok" : "Not ok";
        }
    };
    Object.defineProperty(Box.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = "Date: ".concat(new Date().toTimeString(), ", Content: ").concat(value);
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var firstBox = new Box(300);
// console.log(firstBox.checkBoxSize([100, 330]));
console.log((firstBox.content = "Test"));
console.log(firstBox.content);
var User78 = /** @class */ (function () {
    function User78() {
    }
    return User78;
}());
var carl = new User78();
carl.name = "Carl";
console.log("Carl's name: ", carl.name);
var PresentBox = /** @class */ (function (_super) {
    __extends(PresentBox, _super);
    function PresentBox(wrap, width) {
        var _this = _super.call(this, width) || this;
        _this.wrap = wrap;
        return _this;
    }
    return PresentBox;
}(Box));
var presentBox = new PresentBox("yellow", 1);
console.log(presentBox);
var UserForm = /** @class */ (function () {
    function UserForm() {
        this.valid = false;
    }
    UserForm.prototype.isValid = function (login) {
        return login.length > 3;
    };
    return UserForm;
}());
// ----------
var Player = /** @class */ (function () {
    function Player() {
        // на відміну від private(який існує тільки в TS і зникає після компеляції в JS), використовуючи # значення не можна змінити навіть в JS після компеляції. Але може не підтримуватися в більш старих стандартах(в старших за ES2015)
        _Player_login.set(this, void 0);
    }
    Object.defineProperty(Player.prototype, "pass", {
        get: function () {
            return this._pass;
        },
        set: function (newPass) {
            // Validation
            this._pass = newPass;
        },
        enumerable: false,
        configurable: true
    });
    var _Player_login;
    _Player_login = new WeakMap();
    Player.game = "COD";
    return Player;
}());
var CompetitivePlayer = /** @class */ (function (_super) {
    __extends(CompetitivePlayer, _super);
    function CompetitivePlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompetitivePlayer.prototype.isConsented = function () {
        this.consent ? "Yes" : "No";
    };
    return CompetitivePlayer;
}(Player));
var player = new Player();
// Error. Property 'login' is private and only accessible within class 'Player'.
// player._pass = "qwerty";
player.pass = "new_pass";
console.log(player.pass);
var test99 = new Player();
// Error. Property '#login' is not accessible outside class 'Player' because it has a private identifier.
// test99.#login;
console.log(Math.PI);
var AbstractVehicle = /** @class */ (function () {
    function AbstractVehicle() {
    }
    AbstractVehicle.prototype.stopEngine = function (time) {
        this.startEngine(new Date());
        return "Engine Stopped";
    };
    return AbstractVehicle;
}());
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startEngine = function (time) {
            return "Started";
        };
        return _this;
    }
    return Vehicle;
}(AbstractVehicle));
var myCar123 = function () {
    var _classDecorators = [changeDoorStatus(true)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var myCar123 = _classThis = /** @class */ (function () {
        function myCar123_1() {
            this.fuel = "50%";
            this.open = true;
        }
        myCar123_1.prototype.isOpen = function () {
            console.log(this.fuel);
            return this.open ? "open" : "close";
        };
        return myCar123_1;
    }());
    __setFunctionName(_classThis, "myCar123");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        myCar123 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return myCar123 = _classThis;
}();
function changeDoorStatus(status) {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.open = status;
                return _this;
            }
            return class_1;
        }(constructor));
    };
}
function openCar(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return class_2;
    }(constructor));
}
function addFuel(car) {
    car.fuel = "100%";
    return car;
}
// const car456 = new myCar123();
// console.log(car456.isOpen())
