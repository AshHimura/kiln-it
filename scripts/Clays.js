/*
    Responsibility:
        Generate the HTML representations of clays

        State = Data as it exists right now
*/

import { getClays } from "./database.js";

// State variable (copy of the data)
const allTheClays = getClays()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "clay") {
            const primaryKey = changeEvent.target.value

        }
    }
)

export const ClayHTML = () => {
    let html = `
    <article class="optionGroup">
        <header> <h2>Choose a glaze</h2> </header>
    `

    // Iterate over our copy of the clay object array
    for (const clayObj of allTheClays) {
        // Build up a string while iterating (radio buttons for each clay)
        html += `
        <div>
            <input type="radio" name="clay" value="${clayObj.id}" />
            ${clayObj.clay}
        </div>
        `
    }

    html += "</article>"

    return html
}
