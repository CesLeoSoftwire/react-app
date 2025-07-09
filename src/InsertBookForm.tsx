// import {useState} from "react";
import { updateCart } from './lib.js';

function InsertBookForm() {

    async function addToLibrary(formData) {
        'use server'
        const productId = formData.get('productId')
        await updateCart(productId)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={title}
            />
            <input
                type="number"
                name="author"
                author={input.author || ""}
                onChange={handleChange}
            />
            <button type="submit"> Add to library </button>
        </form>
    )
};

export default InsertBookForm;