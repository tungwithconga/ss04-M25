"use client";
import React from 'react'
interface Product{
    idProduct: string
}
interface Props{
    params:Product;
}
export default function page(props:any) {
    const {params} = props;
  return (
    <div>ProductId: {params.idProduct}</div>
  )
}
