const { Suite } = require("benchmark");
const cnMerge = require("./lib/cn-merge");
const cnMerge2 = require("./lib/cn-merge-2");
const clsx = require("clsx");

function bench(name, ...args) {
    console.log(`\n# ${name}`);
    new Suite()
        .add("clsx        ", () => clsx.apply(clsx, args))
        .add("merge2      ", () => cnMerge.apply(cnMerge, args))
        .add("merge2      ", () => cnMerge2.apply(cnMerge2, args))
        .on("cycle", (e) => console.log("  " + e.target))
        .run();
}

bench(
    "String",
    "this",
    "good awesome",
    "laptop",
    "desktop",
    "android",
    "iphone"
);
bench("Object", { name: "awesome", this: 2 + 2 > 2 });
bench("mix", {
    name: "truthy",
    age: false,
    temp: "desktop",
    run: 2 + 2 > 2,
    exp: 0,
});

bench(
    "mix with falsy",
    false,
    "ashish",
    null,
    "awesome",
    undefined,
    { name: "ashish", age: false },
    "",
    0,
    NaN,
    "temp"
);

bench("falsy values", null, undefined, false, "", NaN, [null, undefined]);
