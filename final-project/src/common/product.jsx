// ở đây chỉ viết function call API
import React from 'react'

const product = async() => {
    const productAPI = 
    await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))

    return productAPI;
}


export default product