import Iterator from "./iterator.js";

const itens = ["Num", 9, true, "Ala", "Assim"];
const iterator = new Iterator(itens);

for(let item = iterator.proximo(); iterator.verificaSeguinte(); item = iterator.proximo()) {
    console.log(item);
}

console.log("");

iterator.each(function (item) {
    console.log(item);
});