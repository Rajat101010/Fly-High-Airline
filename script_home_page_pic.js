const images = [
    "home_changing_image_1.jpg",
    "home_changing_image_2.jpg",
    "home_changing_image_3.jpg",
    "home_changing_image_4.jpg"
  ];
  
  let index = 0;
  const imgElement = document.getElementById("slideshow");
  
  setInterval(() => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
  }, 3000);