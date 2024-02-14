var player1 = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};
var player2 = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};
var player3 = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: "chess",
};
var FigureNames;
(function (FigureNames) {
    FigureNames["Rect"] = "rect";
    FigureNames["Triangle"] = "triangle";
    FigureNames["Line"] = "line";
    FigureNames["Circle"] = "circle";
})(FigureNames || (FigureNames = {}));
function calculateAmountOfFigures(figure) {
    var amount = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };
    figure.forEach(function (fig) {
        switch (fig.name) {
            case FigureNames.Rect:
                amount.squares++;
                break;
            case FigureNames.Circle:
                amount.circles++;
                break;
            case FigureNames.Triangle:
                amount.triangles++;
                break;
            default:
                amount.others++;
        }
    });
    return amount;
}
var data = [
    {
        name: FigureNames.Rect,
        data: { a: 5, b: 10 },
    },
    {
        name: FigureNames.Rect,
        data: { a: 6, b: 11 },
    },
    {
        name: FigureNames.Triangle,
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: FigureNames.Line,
        data: { l: 15 },
    },
    {
        name: FigureNames.Circle,
        data: { r: 10 },
    },
    {
        name: FigureNames.Circle,
        data: { r: 5 },
    },
    {
        name: FigureNames.Rect,
        data: { a: 15, b: 7 },
    },
    {
        name: FigureNames.Triangle,
    },
];
console.log(calculateAmountOfFigures(data));
