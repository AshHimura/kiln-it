/*
    Responsibility:
        Generate the HTML representations of shapes

        State = Data as it exists right now
*/

import { getShapes } from "./database.js";

// State variable (copy of the data)
const allTheShapes = getShapes()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "shape") {
            const primaryKey = changeEvent.target.value

        }
    }
)

export const ShapeHTML = () => {
    let html = `
    <article class="optionGroup">
        <header> <h2>Choose a shape</h2> </header>
    `

    // Iterate over our copy of the shape object array
    for (const shapeObj of allTheShapes) {
        // Build up a string while iterating (radio buttons for each shape)
        html += `
        <div>
            <input type="radio" name="shape" value="${shapeObj.id}" />
            ${shapeObj.shape}
        </div>
        `
    }

    html += "</article>"

    return html
}
