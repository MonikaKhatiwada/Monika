document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll('.product-box');
    
    products.forEach(product => {
        product.addEventListener('mouseover', () => {
            product.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            product.style.transform = "translateY(-10px)";
            product.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
        });

        product.addEventListener('mouseout', () => {
            product.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            product.style.transform = "translateY(0)";
            product.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        });
    });
});
