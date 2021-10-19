/*
    Responsibility:
        Generate the HTML representations of glaze
*/

import { getGlazes } from "./database.js"


// State variable (copy of the data)
const allTheGlazes = getGlazes()

export const GlazeHTML = () => {
    let html = ""

    // Iterate over our copy of the glaze object array
    for (const glazeObj of allTheGlazes) {
        // Build up a string while iterating (radio buttons for each glaze)
        html += `
            ${glazeObj.glaze}
        `
    }

    return html
}
