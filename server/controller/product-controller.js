import Product from '../model/productSchema.js';
import { products } from '../constants/product.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    } catch (error) {

    }
}

export const getProductById = async (request, response) => {
    try {
        const products = await Product.findOne({ 'id': request.params.id });
        response.json(products);
    } catch (error) {

    }
}

export const seedProducts = async (request, response) => {
    try {
        // Clear existing products
        await Product.deleteMany({});

        // Insert all products from constants
        await Product.insertMany(products);

        response.status(201).json({
            message: '✅ Products seeded successfully!',
            count: products.length
        });
    } catch (error) {
        response.status(500).json({
            message: '❌ Error seeding products',
            error: error.message
        });
    }
}
