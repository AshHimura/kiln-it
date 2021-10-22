import { ClayHTML } from "./Clays.js";
import { GlazeHTML } from "./Glazes.js";
import { KilnHTML } from "./Kilns.js";
import { OrderButtonHTML } from "./OrderButton.js";
import { ShapeHTML } from "./Shapes.js";
import { OrderList } from "./Orders.js";

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    mainContainer.innerHTML = `
    <section class="allOptions">
    ${ClayHTML()}
    ${KilnHTML()}
    ${GlazeHTML()}
    ${ShapeHTML()}

    </section>
    ${OrderButtonHTML()}
    ${OrderList()}
`
}

renderHTML()

document.addEventListener("ordersStateHasChanged",
    () => {
        renderHTML()
    }
)