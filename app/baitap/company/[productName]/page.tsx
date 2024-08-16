"use client";
import React from 'react';

interface Product {
    productName: string;
}

interface Props {
    params: Product;
}

export default function Page(props: Props) {
    const { params } = props;
    return (
        <div>Product Name: {params.productName}</div>
    );
}
