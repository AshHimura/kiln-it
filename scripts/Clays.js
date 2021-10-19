/*
    Responsibility:
        Generate the HTML representations of clays
*/

import { getClays } from "./database.js";

// State variable (copy of the data)
const allTheClays = getClays()

export const ClayHTML = () => {
    let html = ""

    // Iterate over our copy of the clay object array
    for (const clayObj of allTheClays) {
        // Build up a string while iterating (radio buttons for each clay)
        html += `
            ${clayObj.clay}
        `
    }

    return html
}
