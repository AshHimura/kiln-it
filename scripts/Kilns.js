/*
    Responsibility:
        Generate the HTML representations of kiln
*/

import { getKilns } from "./database.js"


// State variable (copy of the data)
const allTheKilns = getKilns()

export const KilnHTML = () => {
    let html = ""

    // Iterate over our copy of the kiln object array
    for (const kilnObj of allTheKilns) {
        // Build up a string while iterating (radio buttons for each kiln)
        html += `
            ${kilnObj.kiln}
        `
    }

    return html
}
