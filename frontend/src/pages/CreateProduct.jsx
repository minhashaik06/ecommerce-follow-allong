import React, { useState } from 'react';
import axios from 'axios';

function CreateProduct() {
    const [images, setImages] = useState([]);
    const [preImage, setPreImage] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [email, setEmail] = useState("");
    const categoriesData =[
        {
          title:"Electronics"
        },
        {
          title:"Fashion"
        },
        {
          title:"Books"
        },
        {
          title:"Home Appliances"
        },
    ]
    const handleImage = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        setPreImage(files.map(file => URL.createObjectURL(file)));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !name || !description || !category || !price || !stock || images.length === 0) {
            alert("Please fill all fields and upload at least one image.");
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('tags', tags);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('email', email);
        images.forEach(image => formData.append("file", image));

        try {
            const response = await axios.post('http://localhost:5000/api/products/createProduct', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });

            if (response.status === 201) {
                alert("Product created successfully!");
                setImages([]);
                setPreImage([]);
                setName("");
                setDescription("");
                setCategory("");
                setTags("");
                setPrice("");
                setStock("");
                setEmail("");
            }
        } catch (err) {
            console.error("Error creating product:", err.response?.data || err.message);
            alert("Failed to create product.");
        }
    };

    return (
        <div>
            <h5>Create Product</h5>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label>Email *</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Name *</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <div>
                    <label>Category<span>*</span></label>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}required>
              <option>Select an option</option>
              {categoriesData.map((item,ind)=>(
                <option value={item.title} key={ind} > {item.title}</option>
              ))}
            </select>

                    </div>
                <div>
                    <label>Price *</label>
                    <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Stock *</label>
                    <input type='number' value={stock} onChange={(e) => setStock(e.target.value)} required />
                </div>
                    <label>Description *</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Upload Images *</label>
                    <input type='file' onChange={handleImage} required multiple />
                    <div>
                        {preImage.map((img, index) => (
                            <img src={img} key={index} alt="Preview" className="w-[100px] h-[100px] object-cover m-2" />
                        ))}
                    </div>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateProduct;
