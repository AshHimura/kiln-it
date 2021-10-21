/*
    Responsibility:
        Generate the HTML representations of kilns

        State = Data as it exists right now
*/

import { getKilns } from "./database.js";

// State variable (copy of the data)
const allTheKilns = getKilns()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "kiln") {
            const primaryKey = changeEvent.target.value

        }
    }
)

export const KilnHTML = () => {
    let html = `
    <article class="optionGroup">
        <header> <h2>Choose a glaze</h2> </header>
    `

    // Iterate over our copy of the kiln object array
    for (const kilnObj of allTheKilns) {
        // Build up a string while iterating (radio buttons for each kiln)
        html += `
        <div>
            <input type="radio" name="kiln" value="${kilnObj.id}" />
            ${kilnObj.kiln}
        </div>
        `
    }

    html += "</article>"

    return html
}
