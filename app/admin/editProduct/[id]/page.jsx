"use client";
import React, { useRef, useState, useMemo, useEffect, use } from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Page = ({ params }) => {
    const { id } = use(params);
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)

    const [realProductData, setRealProductData] = useState({
        name: "",
        price: 0,
        madeBy: "",
        category: "",
        description: "",
        images: [null, null, null, null],
        image_public_ids: [null, null, null, null]
    })

    const [newProductData, setNewProductData] = useState({
        name: "",
        price: 0,
        madeBy: "",
        category: "",
        description: "",
        images: [null, null, null, null],
        id_to_replace: [null, null, null, null]
    })

    const editor = useRef(null);
    const [description, setDescription] = useState("");
    const [productData, setProductData] = useState({
        name: "",
        price: 0,
        madeBy: "",
        category: "",
    });
    const [images, setImages] = useState([null, null, null, null]);

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            setLoading(true)
            try {
                const response = await axios.post("http://localhost:5000/admin/getCategories");
                if (response.data && response.data.categories) {
                    setCategories(Object.values(response.data.categories)); // Ensure categories is an array
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
            id ? setLoading(false) : setLoading(true)
            // console.log(newProductData.images)
        };
        getCategories();
    }, []);

    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: "Enter the description for the product...",
        }),
        []
    );

    useEffect(() => {
        let getProduct = async () => {
            if (id) {
                setLoading(true)
                if (id) {
                    let product = await axios.post("http://localhost:5000/admin/getProduct", { id })
                    let data = product.data
                    console.log(data)
                    if (data) {
                        setRealProductData({ ...realProductData, name: data.product.name, category: data.product.category, description: data.product.description, price: data.product.price, madeBy: data.product.madeBy, image_public_ids: data.product.image_public_ids, images: [...data.product.images] })
                        setNewProductData({ ...newProductData, name: data.product.name, category: data.product.category, description: data.product.description, price: data.product.price, madeBy: data.product.madeBy })
                    } else {console.error("No product")}
                }
                setLoading(false)
                // axios.post()
            }
        }
        getProduct()
    }, [id]);

    const handleImageChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            newProductData
            let updatedImages = [...newProductData.images];
            updatedImages[index] = file;
            let updatedId = [...newProductData.id_to_replace]
            updatedId[index] = realProductData.image_public_ids[index]
            setNewProductData({ ...newProductData, images: updatedImages, id_to_replace: updatedId });
        }
    };

    const submitData = async (e) => {
        e.preventDefault();
        setUploading(true);

        if (
            newProductData.name.trim() === "" ||
            newProductData.price <= 0 ||
            newProductData.madeBy.trim() === "" ||
            newProductData.description.trim() === ""
        ) {
            alert(
                `Please Enter the ${newProductData.name.trim() === ""
                    ? "product name"
                    : newProductData.price <= 0
                        ? "Price of the product"
                        : newProductData.madeBy.trim() === ""
                            ? "name of the creator"
                            : "description of product"
                }`
            );
            setUploading(false);
            return;
        }

        if (newProductData.name == realProductData.name && newProductData.category == realProductData.category && newProductData.description == realProductData.description && newProductData.madeBy == realProductData.madeBy && newProductData.images.every(arr => arr === null)) {
            setUploading(false);
            alert("No changes detected")
            return
        }

        const formData = new FormData();
        if (newProductData.name != realProductData.name) {
            formData.append("name", newProductData.name)
        }
        if (newProductData.price != realProductData.price) {
            formData.append("price", newProductData.price)
        }
        if (newProductData.category != realProductData.category) {
            formData.append("category", newProductData.category)
        }
        if (newProductData.description != realProductData.description) {
            formData.append("description", newProductData.description)
        }
        if (newProductData.madeBy != realProductData.madeBy) {
            formData.append("madeBy", newProductData.madeBy)
        }
        newProductData.images.forEach((image, index) => {
            if (image) {
                formData.append(`images`, image); // Append only non-null images
                formData.append(`id_to_replace`, newProductData.id_to_replace[index]); // Append corresponding public_id
            }
        });

        axios.post("http://localhost:5000/admin/editProduct", formData, {headers: { "Content-Type": "multipart/form-data" }}).then(response => {
            console.log("Product edited successfully", response.status)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
        setUploading(false);
    };

    return (
        <>
            <div className='w-full h-[75px] px-[25px] flex justify-between items-center bg-white border-0 border-b border-white-border'>
                <h3 className='font-inter-bold text-[24px] leading-[32px] text-pink-accent'>Admin Panel</h3>
                <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Junaid Parkar</p>
            </div>

            <div className='w-full h-[calc(100dvh-75px)] overflow-x-hidden overflow-y-auto px-[25px] pt-[30px]'>
                <h3 className='font-inter-bold text-[24px] leading-[30px] text-text-normal-black'>Add a new product</h3>
                <form className='w-full mt-[30px]' onSubmit={submitData}>
                    <div className='w-full flex gap-[20px] flex-wrap'>
                        <div className='border-[1px] border-white-border px-[15px] py-[10px] rounded-[8px] w-[calc(50%-10px)]'><input className='w-full h-full outline-0 font-inter-regular text-[16px] leading-[24px]' type="text" name="" id="" placeholder='Enter the name of the poduct' value={newProductData.name} onChange={val => setNewProductData({ ...newProductData, name: val.target.value })} /></div>
                        <div className='border-[1px] border-white-border px-[15px] py-[10px] rounded-[8px] w-[calc(50%-10px)]'><input className='w-full h-full outline-0 font-inter-regular text-[16px] leading-[24px]' type="text" name="" id="" placeholder='Enter the category of the product' value={newProductData.category} onChange={val => setNewProductData({ ...newProductData, category: val.target.value })} list='categoryList' /></div>
                        <div className='border-[1px] border-white-border px-[15px] py-[10px] rounded-[8px] w-[calc(50%-10px)]'><input className='w-full h-full outline-0 font-inter-regular text-[16px] leading-[24px]' type="number" name="" id="" placeholder='Enter the price of the product' value={newProductData.price} onChange={val => setNewProductData({ ...newProductData, price: val.target.value })} /></div>
                        <div className='border-[1px] border-white-border px-[15px] py-[10px] rounded-[8px] w-[calc(50%-10px)]'><input className='w-full h-full outline-0 font-inter-regular text-[16px] leading-[24px]' type="text" name="" id="" placeholder='Product Made By' value={newProductData.madeBy} onChange={val => setNewProductData({ ...newProductData, madeBy: val.target.value })} /></div>
                        <datalist id='categoryList'>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}></option>
                            ))}
                        </datalist>
                    </div>
                    <div className='w-full mt-[20px]'>
                        <JoditEditor
                            ref={editor}
                            value={newProductData.description}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => setNewProductData({ ...newProductData, description: newContent })}
                        />
                    </div>
                    <div className='w-full mt-[20px] flex gap-[20px]'>
                        <label htmlFor="image1" className='w-[calc(25%-15px)] aspect-square border border-white-border flex justify-center items-center cursor-pointer rounded-[8px]'><p className='text-[16px] font-inter-regular leading-[24px] text-center' style={realProductData.images[0] != null ? { display: "none" } : { display: "block" }}>Select Image 1</p><img src={newProductData.images[0] ? URL.createObjectURL(newProductData.images[0]) : realProductData.images[0] ? realProductData.images[0] : "/assets/images/handcrafted.jpg"} className='w-full h-full aspect-square object-cover rounded-[8px]' style={realProductData.images[0] == null && newProductData.images[0] == null ? { display: "none" } : { display: "block" }} alt="" /></label>
                        <label htmlFor="image2" className='w-[calc(25%-15px)] aspect-square border border-white-border flex justify-center items-center cursor-pointer rounded-[8px]'><p className='text-[16px] font-inter-regular leading-[24px] text-center' style={realProductData.images[1] != null ? { display: "none" } : { display: "block" }}>Select Image 2</p><img src={newProductData.images[1] ? URL.createObjectURL(newProductData.images[1]) : realProductData.images[1] ? realProductData.images[1] : "/assets/images/handcrafted.jpg"} className='w-full h-full aspect-square object-cover rounded-[8px]' style={realProductData.images[1] == null && newProductData.images[1] == null ? { display: "none" } : { display: "block" }} alt="" /></label>
                        <label htmlFor="image3" className='w-[calc(25%-15px)] aspect-square border border-white-border flex justify-center items-center cursor-pointer rounded-[8px]'><p className='text-[16px] font-inter-regular leading-[24px] text-center' style={realProductData.images[2] != null ? { display: "none" } : { display: "block" }}>Select Image 3</p><img src={newProductData.images[2] ? URL.createObjectURL(newProductData.images[2]) : realProductData.images[2] ? realProductData.images[2] : "/assets/images/handcrafted.jpg"} className='w-full h-full aspect-square object-cover rounded-[8px]' style={realProductData.images[2] == null && newProductData.images[2] == null ? { display: "none" } : { display: "block" }} alt="" /></label>
                        <label htmlFor="image4" className='w-[calc(25%-15px)] aspect-square border border-white-border flex justify-center items-center cursor-pointer rounded-[8px]'><p className='text-[16px] font-inter-regular leading-[24px] text-center' style={realProductData.images[3] != null ? { display: "none" } : { display: "block" }}>Select Image 4</p><img src={newProductData.images[3] ? URL.createObjectURL(newProductData.images[3]) : realProductData.images[3] ? realProductData.images[3] : "/assets/images/handcrafted.jpg"} className='w-full h-full aspect-square object-cover rounded-[8px]' style={realProductData.images[3] == null && newProductData.images[3] == null ? { display: "none" } : { display: "block" }} alt="" /></label>
                        <input type="file" id='image1' accept="image/*" className='hidden' onChange={(e) => handleImageChange(e, 0)} />
                        <input type="file" id='image2' accept="image/*" className='hidden' onChange={(e) => handleImageChange(e, 1)} />
                        <input type="file" id='image3' accept="image/*" className='hidden' onChange={(e) => handleImageChange(e, 2)} />
                        <input type="file" id='image4' accept="image/*" className='hidden' onChange={(e) => handleImageChange(e, 3)} />
                    </div>
                    <div className='w-full mt-[20px] mb-[20px]'>
                        <button className='px-[20px] py-[15px] bg-pink-accent w-max rounded-[8px] cursor-pointer' type='submit' ><p className='text-white font-inter-regular text-[16px] leading-[24px]'>Upload the product.</p></button>
                    </div>
                </form>
            </div>
            <div className='fixed z-[500] top-0 left-0 w-full h-[100dvh] backdrop-blur-sm bg-transparent' style={uploading ? { display: "block" } : { display: "none" }}>
                <p className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-inter-medium text-[20px] leading-[26px]'>Uploading...</p>
            </div>
            <div className='fixed z-[500] top-0 left-0 w-full h-[100dvh] backdrop-blur-sm bg-transparent' style={loading ? { display: "block" } : { display: "none" }}>
                <p className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-inter-medium text-[20px] leading-[26px]'>Loading...</p>
            </div>
        </>
    )
};

export default Page;
