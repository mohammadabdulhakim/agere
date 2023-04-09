function abbText(text, maxLength, showThatWasRest = true) {
    if ((text === null || text === void 0 ? void 0 : text.length) <= Math.round(maxLength)) {
        return text;
    }
    else {
        return (text === null || text === void 0 ? void 0 : text.slice(0, Math.round(maxLength))) + (showThatWasRest ? "..." : "");
    }
}

module.exports = abbText