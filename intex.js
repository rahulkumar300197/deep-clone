function deepClone(object) {
    var newObject;
    if (Array.isArray(object)) {
        newObject = object.map(function (o) {
            return deepClone(o);
        });
    } else if (object && typeof object == "object") {
        newObject = {};
        Object.keys(object).forEach(function (key) {
            if (typeof object[key] != "object") {
                newObject[key] = object[key];
            } else {
                newObject[key] = deepClone(object[key]);
            }
        });
    } else {
        newObject = object;
    }
    return newObject;
}

module.exports.deepClone = deepClone;