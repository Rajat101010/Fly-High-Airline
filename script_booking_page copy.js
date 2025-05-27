const tripType = document.getElementById('tripType');
const returnDate = document.getElementById('return');
const bookingForm = document.getElementById('bookingForm');
const searchBtn = document.getElementById('searchBtn');

tripType.addEventListener('change', () => {
  if (tripType.value === 'oneway') {
    returnDate.required = false;
    returnDate.disabled = true;
    returnDate.value = '';
  } else {
    returnDate.disabled = false;
    returnDate.required = true;
  }
});

function addPassenger() {
  const container = document.getElementById('passengerContainer');
  const newPassenger = document.createElement('div');
  newPassenger.classList.add('passenger');
  newPassenger.innerHTML = `
    <label>Name: <span class="required">*</span></label>
    <input type="text" name="name[]" placeholder="Name" required>
    <label>Age: <span class="required">*</span></label>
    <input type="number" name="age[]" placeholder="Age" required>
    <label>Gender: <span class="required">*</span></label>
    <select name="gender[]" required>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  `;
  container.appendChild(newPassenger);
}

bookingForm.addEventListener('input', () => {
  const requiredFields = bookingForm.querySelectorAll('[required]');
  let allFilled = true;
  requiredFields.forEach(field => {
    if (!field.disabled && !field.value.trim()) {
      allFilled = false;
    }
  });
  searchBtn.disabled = !allFilled;
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'flight_not_available.html';
});
