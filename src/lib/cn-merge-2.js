function merge() {
    const len = arguments.length;
    arguments = [...arguments].flat(Infinity).filter(Boolean)
    if (len == 0) return "";
    let str = "";

    for (let i = 0; i < len; i++) {
        const arg = arguments[i];

        if (typeof arg == "string" || typeof arg == "number") {
            str && (str += " ");
            str += arg;
            continue;
        }

        if (typeof arg == "object") {
            const keys = Object.keys(arg);
            let obj_len = keys.length;
            for (let j = 0; j < obj_len; j++) {
                if (arg[keys[j]]) {
                    str && (str += " ");
                    str += keys[j];
                }
            }
        }
    }
    return str;
}
module.exports = merge;
