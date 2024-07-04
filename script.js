document.addEventListener('DOMContentLoaded', () => {
  const AddToCartMsg = document.querySelector('.cartMsg')
  const addToCartBtn = document.getElementById('addToCartBtn')
  

  // Fetching API for Product
  const fetchProduct = async () => {
      try {
          const response = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448");
          if (!response.ok) {
              throw new Error("Failed to fetch data from the API");
          }
          const data = await response.json();
          createProduct(data.product);
      } catch (error) {
          console.error("Error fetching product data:", error);
      }
  };

  // DOM Manipulation
  const createProduct = (product) => {
    document.getElementById('productTitleFirst').innerHTML = product.vendor
    document.getElementById('productTitleSecond').innerHTML = product.title
    document.getElementById('offPrice').innerHTML = product.price
    document.getElementById('compPrice').innerHTML = product.compare_at_price
    document.getElementById('firstColor').style.background = "#ECDECC"
    document.getElementById('secondColor').style.background = "#BBD278"
    document.getElementById('thirdColor').style.background = "#BBC1F8"
    document.getElementById('fourthColor').style.background = "#FFD3F8"
    document.getElementById('description').innerHTML = product.description

  };

  // Add to Cart Btn 
  addToCartBtn.addEventListener("click", () => {
    AddToCartMsg.style.display = 'block'
  })

  fetchProduct();


});