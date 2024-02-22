import React, { useState } from 'react';

function Product() {
  const [showForm, setShowForm] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productList, setProductList] = useState([]);

  const toggleProductForm = () => {
    setShowForm(!showForm);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductDetailsChange = (e) => {
    setProductDetails(e.target.value);
  };

  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const addProduct = () => {
    if (productName && productPrice && productDetails && productImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const productData = {
          name: productName,
          price: productPrice,
          details: productDetails,
          image: reader.result,
        };
        setProductList([...productList, productData]);
      };
      reader.readAsDataURL(productImage);
      // Clear form fields after adding the product
      setProductName('');
      setProductPrice('');
      setProductDetails('');
      setProductImage(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-uppercase justify-content-center text-center" id="product">
        <b>Product</b>
      </h1>
      <br />
      {/* Button to toggle product form visibility */}
      <button type="button" className="btn btn-primary mb-3" id="toggle-form-btn" onClick={toggleProductForm}>
        {showForm ? 'Hide Form' : 'Add Product'}
      </button>

      {/* Product form */}
      {showForm && (
        <form id="product-form">
          <div className="form-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="product-name"
              placeholder="Enter product name"
              value={productName}
              onChange={handleProductNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="number"
              className="form-control"
              id="product-price"
              placeholder="Enter price"
              value={productPrice}
              onChange={handleProductPriceChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-details">Details</label>
            <textarea
              className="form-control"
              id="product-details"
              placeholder="Enter product details"
              value={productDetails}
              onChange={handleProductDetailsChange}
              required
            ></textarea>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="product-image" className="">
              Image
            </label>
            <input
              type="file"
              className="form-control-file"
              id="product-image"
              accept="image/*"
              onChange={handleProductImageChange}
              required
            />
          </div>
          <br />
          <button type="button" className="btn btn-primary" onClick={addProduct}>
            Add Product
          </button>
        </form>
      )}

      <div className="mt-3 row" id="product-container">
        {/* Product items */}
        {productList.map((product, index) => (
          <div key={index} className="col-sm-6 col-lg-3 top justify-content-center text-center mt-5">
            <img className="img-fluid" src={product.image} alt="" style={{ height: '70%', width: '70%' }} />
            <h4 className="text-uppercase text-center">{product.name}</h4>
            <h6 className="text-center">$ {product.price}</h6>
            <p className="text-center">{product.details}</p>
            <p className="icon text-center">
              <span>
                <i className="far fa-heart"></i>
              </span>
              <span>
                <i id="gap" className="far fa-share-square" title="Share"></i>
              </span>
              <span>
                <i id="gap" className="fas fa-shopping-basket"></i>
              </span>
            </p>
            <div className="text-center mb-5">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-success">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
