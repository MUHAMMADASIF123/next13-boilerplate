// SimpleModal.jsx or a similar file
import React, { useState,useEffect } from 'react';

const Modal = ({ isOpen, onClose, product, onSave }) => {
  const [editedProduct, setEditedProduct] = useState(product);
console.log(editedProduct,"editedProduct")
  // Use useEffect to update state when the product prop changes
  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
    });
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };


  return (
 
      <div className=" fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center  ">
<div className='flex flex-row'>
<input
          name="title"
          value={editedProduct.title || ''}
          onChange={handleChange}
          placeholder="Title"
        />
        {/* <textarea
          name="description"
          value={editedProduct.description || ''}
          onChange={handleChange}
          placeholder="Description"
        /> */}
        <input
          name="price"
          type="number"
          value={editedProduct.price || ''}
          onChange={handleChange}
          placeholder="Price"
        />
        {/* <input
          name="discountPercentage"
          type="number"
          value={editedProduct.discountPercentage || ''}
          onChange={handleChange}
          placeholder="Discount Percentage"
        />
        <input
          name="rating"
          type="number"
          value={editedProduct.rating || ''}
          onChange={handleChange}
          placeholder="Rating"
        />
        <input
          name="stock"
          type="number"
          value={editedProduct.stock || ''}
          onChange={handleChange}
          placeholder="Stock"
        />
        <input
          name="brand"
          value={editedProduct.brand || ''}
          onChange={handleChange}
          placeholder="Brand"
        />
        <input
          name="category"
          value={editedProduct.category || ''}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          name="thumbnail"
          value={editedProduct.thumbnail || ''}
          onChange={handleChange}
          placeholder="Thumbnail URL"
        />
         Handle image array. Assuming you want to edit only the first image for simplicity */}
      
        </div>
        <div>
        {/* Add more fields as necessary */}
        <div className="flex justify-between">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Close</button>
        </div>
        </div>
      </div>
    
  );
};

export default Modal;
