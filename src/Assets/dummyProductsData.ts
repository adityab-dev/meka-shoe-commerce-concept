const products: Product[] = [
    {
        id: 1,
        title: "iPhone 9",
        price: 549,
        brand: "Apple",
        colors: ["Red", "Blue", "Green"],
        sizes: [30, 31, 32],
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    },
    {
        id: 2,
        title: "iPhone X",
        price: 899,
        brand: "Apple",
        colors: ["Red", "Green"],
        sizes: [30, 32],
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
        id: 3,
        title: "Samsung Galaxy S9",
        price: 1249,
        brand: "Samsung",
        colors: ["Blue", "Green"],
        sizes: [31, 32],
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    },
    {
        id: 4,
        title: "OPPOF19",
        price: 280,
        brand: "Samsung",
        colors: ["Red", "Blue"],
        sizes: [30, 32],
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    },
    {
        id: 5,
        title: "Huawei P30",
        price: 499,
        brand: "Microsoft Surface",
        colors: ["Red", "Blue", "Green"],
        sizes: [30, 31, 32],
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    },
    {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        brand: "Apple",
        colors: ["Blue", "Green"],
        sizes: [30, 31],
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        brand: "Samsung",
        colors: ["Red", "Blue"],
        sizes: [30, 31, 32],
        thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    },
    {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        price: 1499,
        brand: "Microsoft Surface",
        colors: ["Red", "Blue", "Green"],
        sizes: [31, 32],
        thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    },
    {
        id: 9,
        title: "Infinix INBOOK",
        price: 1099,
        brand: "Microsoft Surface",
        colors: ["Red", "Green"],
        sizes: [30, 32],
        thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    },
];

export type Product = {
    id: number;
    title: String;
    price: number;
    brand: string;
    colors: string[];
    sizes: number[];
    thumbnail: string;
};

export default products;
