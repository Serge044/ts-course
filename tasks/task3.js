
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["VIDEO"] = "video";
    TypesOfMedia["AUDIO"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));

var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["MP4"] = ".mp4";
    FormatsOfMedia["MOV"] = ".mov";
    FormatsOfMedia["MKV"] = ".mkv";
    FormatsOfMedia["FLV"] = ".flv";
    FormatsOfMedia["WEBM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia(_a) {
    var _b = _a === void 0 ? {
        name: "example",
        type: TypesOfMedia.AUDIO,
        format: FormatsOfMedia.MOV,
    } : _a, name = _b.name, type = _b.type, format = _b.format, subtitles = _b.subtitles, marks = _b.marks;
    var marksLog;

    if (Array.isArray(marks)) {
        marksLog = marks.toString();
    }
    else if (typeof marks === "string") {
        marksLog = marks;
    }
    else {
        marksLog = "Unsupported type of marks";
    }
    console.log("Media ".concat(name).concat(format, " is ").concat(type, "\n      Marks: ").concat(marksLog, "\n      Subtitles: ").concat(subtitles !== null && subtitles !== void 0 ? subtitles : "none"));
    return "Media started";
}
playMedia({
    name: "WoW",
    format: FormatsOfMedia.MP4,
    type: TypesOfMedia.VIDEO,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"],
});
