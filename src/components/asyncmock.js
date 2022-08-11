const products = [
    {
        id: "1",
        name: "Leather Jacket",
        price: 2000,
        category: "jackets",
        img: "https://m.media-amazon.com/images/I/61VWq7qUvzL._AC_UX679_.jpg",
        stock: 10,
        description: "Descripcion chamarra piel"
    },
    {
        id: "2",
        name: "Boots",
        price: 2000,
        category: "boots",
        img: "https://m.media-amazon.com/images/I/812Dr4-403L._AC_UY575_.jpg",
        stock: 10,
        description: "Descripcion botas"
    },
    {
        id: "3",
        name: "Hoodie",
        price: 500,
        category: "jackets",
        img: "https://m.media-amazon.com/images/I/71ZE0VUjkSL._AC_UX679_.jpg",
        stock: 10,
        description: "Descripcion sudadera"
    },
    {
        id: "4",
        name: "Long boots",
        price: 2000,
        category: "boots",
        img: "https://m.media-amazon.com/images/I/81C8KyU41gL._AC_UY695_.jpg",
        stock: 10,
        description: "Descripcion botas largas"
    },
    {
        id: "5",
        name: "Black Jeans",
        price: 800,
        category: "jeans",
        img: "https://m.media-amazon.com/images/I/71RMfpVBJIL._AC_UY606_.jpg",
        stock: 10,
        description: "Descripcion pantalon negro"
    },
    {
        id: "6",
        name: "Leather Jeans",
        price: 1200,
        category: "jeans",
        img: "https://m.media-amazon.com/images/I/51AvkNR1ysL._AC_UX679_.jpg",
        stock: 10,
        description: "Descripcion pantalon piel negro"
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
};

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}