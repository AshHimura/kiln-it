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
    orders: [],
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
    ]
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

