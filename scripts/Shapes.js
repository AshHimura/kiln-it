/*
    Responsibility:
        Generate the HTML representations of shape
*/

import { getShapes } from "./database.js"


// State variable (copy of the data)
const allTheShapes = getShapes()

export const ShapeHTML = () => {
    let html = ""

    // Iterate over our copy of the shape object array
    for (const shapeObj of allTheShapes) {
        // Build up a string while iterating (radio buttons for each shape)
        html += `
            ${shapeObj.shape}
        `
    }

    return html
}
