function merge() {
    const len = arguments.length;
    if (len == 0) return "";
    let str = "";

    for (let i = 0; i < len; i++) {
        const arg = arguments[i];
        if (!arg) continue

        if (typeof arg == "string") {
            str && (str += " ");
            str += arg;
            continue;
        }

        if (typeof arg == "object") {
            if (!Array.isArray(arg)) {
                const keys = Object.keys(arg);
                let obj_len = keys.length;
                for (let j = 0; j < obj_len; j++) {
                    if (arg[keys[j]]) {
                        str && (str += " ");
                        str += keys[j];
                    }
                }
            } else {
                str && (str += " ")
                str += merge(...arg)
            }
        }
    }
    return str;
}
module.exports = merge;