/*
    Responsibility:
        Generate the HTML representations of glazes

        State = Data as it exists right now
*/

import { getGlazes, setGlaze } from "./database.js";

// State variable (copy of the data)
const allTheGlazes = getGlazes()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "glaze") {
            const primaryKey = changeEvent.target.value
            const primaryKeyAsInt = parseInt( primaryKey )

            setGlaze( primaryKeyAsInt )
        }
    }
)

export const GlazeHTML = () => {
    let html = `
    <article class="optionGroup">
        <header> <h2>Choose a glaze</h2> </header>
    `

    // Iterate over our copy of the glaze object array
    for (const glazeObj of allTheGlazes) {
        // Build up a string while iterating (radio buttons for each glaze)
        html += `
        <section class="option">
            <input type="radio" name="glaze" value="${glazeObj.id}" />
            ${glazeObj.glaze}
        </section>
        `
    }

    html += "</article>"

    return html
}
