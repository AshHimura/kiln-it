// Generate HTML for placed orders

import { getOrders } from "./database.js";


export const OrderList = () => {
    const orders = getOrders()
    let html = "<ul>"

    for (const order of orders) {
        html += `<li>
                    Order: ${order.id}
                 </li>`
    }

    html += "</ul>"
    return html
}


