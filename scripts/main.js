import { ClayHTML } from "./Clays.js";
import { GlazeHTML } from "./Glazes.js";
import { KilnHTML } from "./Kilns.js";
import { ShapeHTML } from "./Shapes.js";

const mainContainer = document.querySelector("#container")

mainContainer.innerHTML = `
    ${ClayHTML()}
    ${KilnHTML()}
    ${GlazeHTML()}
    ${ShapeHTML()}
`
