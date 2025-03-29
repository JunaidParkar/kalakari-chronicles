"use client"
import axios from 'axios'
import React, { useState } from 'react'

const Page = () => {
    const [images, setImages] = useState([])

    const hit = async () => {
        let form = new FormData()
        
        // Append all files to the "newImages" field (multer expects this name)
        images.forEach((image) => {
            if (image) {
                form.append("newImages", image)  // Field name must match multer's expectation
            }
        })
        
        form.append("name", "helo")
        
        try {
            const response = await axios.post(
                "http://localhost:5000/admin/editProduct", 
                form, 
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            )
            console.log(response.data)
        } catch (error) {
            console.error("Error uploading files:", error)
        }
    }

    const handleChange = (e, i) => {
        const newImages = [...images]
        newImages[i] = e.target.files[0]
        setImages(newImages)
    }

    return (
        <>
            <input type="file" onChange={e => handleChange(e, 0)} />
            <input type="file" onChange={e => handleChange(e, 1)} />
            <input type="file" onChange={e => handleChange(e, 2)} />
            <button onClick={hit}>Upload</button>
        </>
    )
}

export default Page