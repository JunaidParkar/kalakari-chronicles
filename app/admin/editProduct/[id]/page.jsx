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
        images: [null, null, null, null]
    })

    const [newProductData, setNewProductData] = useState({
        name: "",
        price: 0,
        madeBy: "",
        category: "",
        description: "",
        images: [null, null, null, null]
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
                        setRealProductData({ ...realProductData, name: data.product.name, category: data.product.category, description: data.product.description, price: data.product.price, madeBy: data.product.madeBy, images: [...data.product.images] })
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
            const updatedImages = [...newProductData.images];
            updatedImages[index] = file;
            setNewProductData({ ...newProductData, images: updatedImages });
        }
    };

    const submitData = async (e) => {
        e.preventDefault();
        setUploading(true);

        if (
            productData.name.trim() === "" ||
            productData.price <= 0 ||
            productData.madeBy.trim() === "" ||
            description.trim() === ""
        ) {
            alert(
                `Please Enter the ${productData.name.trim() === ""
                    ? "product name"
                    : productData.price <= 0
                        ? "Price of the product"
                        : productData.madeBy.trim() === ""
                            ? "name of the creator"
                            : "description of product"
                }`
            );
            setUploading(false);
            return;
        }

        if (images.some((img) => img === null)) {
            alert("Please select all 4 images");
            setUploading(false);
            return;
        }

        const formData = new FormData();
        formData.append("name", productData.name);
        formData.append("price", productData.price);
        formData.append("madeBy", productData.madeBy);
        formData.append("category", productData.category);
        formData.append("description", description);

        images.forEach((image, index) => {
            if (image) {
                formData.append(`image${index + 1}`, image);
            }
        });

        try {
            const { data } = await axios.post(
                "http://localhost:5000/admin/addProduct",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            console.log("Upload Success:", data);
            alert("Product uploaded successfully!");
        } catch (error) {
            console.error("Upload Error:", error.response?.data || error.message);
            alert("Upload failed!");
        }
        setUploading(false);
    };

    return (
        <>
            <div className='w-full h-[75px] px-[25px] flex justify-between items-center bg-white border-0 border-b border-white-border'>
                <h3 className='font-inter-bold text-[24px] leading-[32px] text-pink-accent'>Admin Panel</h3>
                <p className='font-inter-regular text-[16px] leading-[24px] text-text-secondary-black'>Sharvari Uttam Palande</p>
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
