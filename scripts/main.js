import { ClayHTML } from "./Clays.js";
import { GlazeHTML } from "./Glazes.js";
import { KilnHTML } from "./Kilns.js";
import { OrderButtonHTML } from "./OrderButton.js";
import { ShapeHTML } from "./Shapes.js";

const mainContainer = document.querySelector("#container")

mainContainer.innerHTML = `
    <section class="allOptions">
    ${ClayHTML()}
    ${KilnHTML()}
    ${GlazeHTML()}
    ${ShapeHTML()}

    </section>
    ${OrderButtonHTML()}
`

