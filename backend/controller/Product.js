const express = require('express');
const path = require('path');
const Product = require('../Model/CreateProduct');
const { pupload } = require('../multer'); // Fixed multer import
const User = require('../Model/user');

const Router = express.Router();

Router.post("/createProduct", pupload.array('file', 5), async (req, res) => {
    try {
        const { name, description, category, tags, price, stock, email } = req.body;

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "At least one image is required." });
        }

        const images = req.files.map(file => `/uploads/${file.filename}`);

        if (!name || !description || !category || !price || !stock || !email) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // const existUser = await User.findOne({ email });
        // if (!existUser) {
        //     return res.status(400).json({ error: "User doesn't exist." });
        // }

        const product = new Product({
            name,
            description,
            category,
            tags: tags ? tags.split(",") : [],
            price,
            stock,
            email,
            images
        });

        await product.save();
        res.status(201).json({ message: "Product created successfully!", product });

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ error: e.message });
    }
});
Router.put("/update-product/:id", pupload.array('file', 5), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, category, tags, price, stock, email } = req.body;

        if (!name || !description || !category || !price || !stock || !email) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const existProduct = await Product.findById(id);
        if (!existProduct) {
            return res.status(404).json({ error: "Product does not exist." });
        }

        let images = existProduct.images; // Keep old images if no new ones are uploaded
        if (req.files && req.files.length > 0) {
            images = req.files.map(file => `/products/${file.filename}`);
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name,
                description,
                category,
                tags: tags ? tags.split(",") : [],
                price,
                stock,
                email,
                images
            },
            { new: true }
        );

        res.status(200).json({ message: "Product updated successfully!", updatedProduct });

    } catch (e) {
        console.error("Update Error:", e.message);
        res.status(500).json({ error: "Internal Server Error." });
    }
});


Router.delete("/delete-product/:id",  async (req, res) => {
    try {
        const {id}=req.params
        


        const existProduct = await Product.findById(id)
        if(!existProduct)
            res.status(400).send('product not exist')


        


       const deleteProduct = await Product.findByIdAndDelete(id)
        res.status(201).json({ message: "Product deleted successfully!", deleteProduct });

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ error: e.message });
    }
});


Router.get("/Product", async (req, res) => {
    try {
        const products = await Product.find();

        // Ensure all image paths are properly formatted
        const productsWithImages = products.map(product => {
            return {
                ...product.toObject(), // Convert Mongoose document to plain object
                images: product.images.map(image => image) // Ensure images are accessible
            };
        });

        res.status(200).json(productsWithImages);
    } catch (e) {
        console.error("Error fetching products:", e);
        res.status(500).json({ error: "Internal Server Error." });
    }
});

module.exports = Router;
