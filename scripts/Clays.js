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
            const primaryKey = changeEvent.target.value   // "4"

            // find() array method is for finding a single item in the array
            const theChosenClay = allTheClays.find(
                (clayObj) => {
                    if (parseInt(primaryKey) === clayObj.id) {
                        return true
                    }
                    return false
                }
            )

            window.alert(theChosenClay.clay)
        }
    }
)

export const ClayHTML = () => {
    let html = "<header> <h2>Choose a clay</h2> </header>"

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

    return html
}
