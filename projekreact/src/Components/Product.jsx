
import React, { createContext, useState } from 'react';


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Bika Ambon Rian',
      category: 'Makanan ringan',
      priceRange: '15.000',
      description: 'Deskripsi produk',
      address: 'Alamat produk',
      contact: 'Kontak produk',
      thumbnail: 'src/Assets/img/rian.png'
    },
    // Produk lainnya...
  ]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
