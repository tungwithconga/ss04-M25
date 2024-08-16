"use client";
import React from 'react'
interface Product{
    idProduct: string
}
interface Props{
    params:Product;
}
/*
component trong nextJS có 2 loại:
 1.Cilent components 
  Chạy được ở môi trường trình duyệt tức là môi trương window
 2.Server components
  Chỉ chạy được trong môi trường server mặc định
  khi tạo function thì nó mặc định là server components
*/
export default function page(props:any) {
    console.log("Gia tri props la :",props);
    // dung destructoring 
    const {params} = props;
  return (
    <div>trang chi tiet sp id san pham la: {params.idProduct}</div>
  )
}
