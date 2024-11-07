document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".news-container");
    const images = Array.from(container.children);
  
    
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      container.appendChild(clone);
    });
  
    let scrollAmount = 0;
    const scrollSpeed = 1; 
  
    function animate() {
      scrollAmount -= scrollSpeed;
      container.style.transform = `translateX(${scrollAmount}px)`;
  
      // Reinicia o movimento quando todas as imagens passarem pela tela
      if (Math.abs(scrollAmount) >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
  
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  