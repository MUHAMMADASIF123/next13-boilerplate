// SimpleModal.jsx or a similar file
import React, { useState,useEffect } from 'react';

const Modal = ({ isOpen, onClose, product, onSave,onDelete }) => {
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
  const handleDelete=()=>{
    onDelete(editedProduct.id)
    onClose()
  }


  return (
 
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl mx-4">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800">Edit Product:</h2>
      <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1" for="title">Title:</label>
        <input id="title" class="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
               name="title" 
               value={editedProduct.title || ''} 
               onChange={handleChange} 
               placeholder="Enter title" />
      </div>
       <div>
       <label class="block text-sm font-medium text-gray-700 mb-1" for="description">Description:</label>
        <input class="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
                  name="description" 
                  value={editedProduct.description || ''} 
                  onChange={handleChange} 
                  placeholder="Description"></input>
  </div>
  <div>
  <label class="block text-sm font-medium text-gray-700 mb-1" for="price">Price:</label>
        <input class="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
               name="price" 
               type="number" 
               value={editedProduct.price || ''} 
               onChange={handleChange} 
               placeholder="Price" />
  </div>
  <div>
  <label class="block text-sm font-medium text-gray-700 mb-1" for="discountPercentage">DiscountPercentage:</label>
        <input class="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
               name="discountPercentage" 
               type="number" 
               value={editedProduct.discountPercentage || ''} 
               onChange={handleChange} 
               placeholder="Discount Percentage" />
  
  </div>
  <div>
  <label class="block text-sm font-medium text-gray-700 mb-1" for="rating">Rating:</label>
        <input class="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
               name="rating" 
               type="number" 
               value={editedProduct.rating || ''} 
               onChange={handleChange} 
               placeholder="Rating" />
  </div>
  <div>
  <label class="block text-sm font-medium text-gray-700 mb-1" for="stock">Stock:</label>
        <input class="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
               name="stock" 
               type="number" 
               value={editedProduct.stock || ''} 
               onChange={handleChange} 
               placeholder="Stock" />
  </div>
  <div>
  <label class="block text-sm font-medium text-gray-700 mb-1" for="brand">Brand:</label>
        <input class="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
               name="brand" 
               value={editedProduct.brand || ''} 
               onChange={handleChange} 
               placeholder="Brand" />
  
  </div>
  <div>
  <label class="block text-sm font-medium text-gray-700 mb-1" for="category">Category:</label>
        <input class="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" 
               name="category" 
               value={editedProduct.category || ''} 
               onChange={handleChange} 
               placeholder="Category" />
  
  </div>
      
  
       
        <div class="flex space-x-4 mt-4 col-span-2 justify-end">
          <button class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring" 
                  onClick={handleSave}>Save</button>
          <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring" 
                  onClick={handleDelete}>Delete</button>
          <button class="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring" 
                  onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  </div>
  
    
  );
};

export default Modal;
