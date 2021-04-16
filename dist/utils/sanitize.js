"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sanitize(str) {
    if (!str || !str.length)
        return;
    var map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;",
    };
    var reg = /[&<>"'/]/gi;
    return str.replace(reg, function (match) { return map[match]; });
}
exports.default = sanitize;
//# sourceMappingURL=sanitize.js.map