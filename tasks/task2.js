
var totalData = {
    jackets: 5,
    hats: "empty",
    socks: "empty",
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: "empty",
    mixers: 14,
    deficit: true,
    date: new Date(),
};

function printReport(data) {
    var result = Object.entries(data)
        .filter(function (item) { return item[1] === "empty"; })
        .reduce(function (res, item) { return "".concat(res, " ").concat(item[0], ","); }, "");
    if (result.trim().length) {
        return "We need this items:".concat(result.slice(0, -1));
    }
    else {
        return "Everything fine";
    }
}
console.log(printReport(totalData));
