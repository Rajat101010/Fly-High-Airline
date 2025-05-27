function showPopup() {
      const popup = document.getElementById('popup');
      popup.style.display = 'block';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 2000); // Hide after 2 seconds
    }