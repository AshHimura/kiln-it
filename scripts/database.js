/*
    All of the hard-coded data is immutable
*/

const database = {
    clays: [
        {
            id: 1,
            clay: "Earthenware",
            pricePerPound: 5.03
        },
        {
            id: 2,
            clay: "Stoneware",
            pricePerPound: 3.89
        },
        {
            id: 3,
            clay: "Bentonite",
            pricePerPound: 7.41
        },
        {
            id: 4,
            clay: "Porcelain",
            pricePerPound: 4.96
        }
    ],
    glazes: [
        {
            id: 1,
            glaze: "Crackle",
            pricePerPint: 12.33
        },
        {
            id: 2,
            glaze: "Matte",
            pricePerPint: 11.68
        },
        {
            id: 3,
            glaze: "Sparkly",
            pricePerPint: 16.09
        }
    ],
    kilns: [
        {
            id: 1,
            kiln: "Electric",
            hourlyRate: 3.09
        },
        {
            id: 2,
            kiln: "Gas",
            hourlyRate: 6.88
        },
        {
            id: 3,
            kiln: "Wood",
            hourlyRate: 10.55
        },
    ],
    customers: [],
    orders: [

    ],
    shapes: [
        {
            id: 1,
            shape: "Umbrella",
            difficultyLevel: 9
        },
        {
            id: 2,
            shape: "Star",
            difficultyLevel: 5
        },
        {
            id: 3,
            shape: "Unicorn",
            difficultyLevel: 7
        },
        {
            id: 4,
            shape: "Mug",
            difficultyLevel: 2
        },
        {
            id: 5,
            shape: "Bowl",
            difficultyLevel: 1
        },
        {
            id: 6,
            shape: "Vase",
            difficultyLevel: 4
        },
        {
            id: 7,
            shape: "Paperweight",
            difficultyLevel: 1
        }
    ],
    potBuilder: {

    }
}

// function to add potBuilder object to the orders array

export const placeOrder = () => {
    // capture timestamp and add it to the potBuilder
    const date = new Date()

    database.potBuilder.timestamp = date.toLocaleDateString()

    // add a unique identifier (id) to the potBuilder
    if ( database.orders.length === 0 ) {

        database.potBuilder.id = 1

    } else {

        const lastIndex = database.orders.length - 1

        const newId = database.orders[lastIndex].id + 1

        database.potBuilder.id = newId

    }

    // add potBuilder object (transient state) to the orders array (permanent state)

    database.orders.push(database.potBuilder)

    database.potBuilder = {}

    debugger
}

// Track what the user clicked on when they choose a clay
export const setClay = ( clayId ) => {
    // add the clayId property to the potBuilder object using dot notation
    database.potBuilder.clayId = clayId
}
export const setGlaze = ( glazeId ) => {
    // add the glazeId property to the potBuilder object using dot notation
    database.potBuilder.glazeId = glazeId
}
export const setKiln = ( kilnId ) => {
    // add the kilnId property to the potBuilder object using dot notation
    database.potBuilder.kilnId = kilnId
}
export const setShape = ( shapeId ) => {
    // add the shapeId property to the potBuilder object using dot notation
    database.potBuilder.shapeId = shapeId
}

export const getClays = () => {
    return database.clays.map(clay => ({...clay}))
}

export const getKilns = () => {
    return database.kilns.map(kiln => ({...kiln}))
}

export const getShapes = () => {
    return database.shapes.map(shape => ({...shape}))
}

export const getGlazes = () => {
    return database.glazes.map(glaze => ({...glaze}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const getCustomers = () => {
    return database.customers.map(customer => ({...customer}))
}

