function searchFlight(event) {
  event.preventDefault(); // Prevent default form submission

  const flightName = document.getElementById('flightName').value.trim();
  const flightDate = document.getElementById('flightDate').value;

  if (!flightName || !flightDate) {
    alert("Missing Information");
    return; // Stop here if info is missing
  }

  // Redirect after validation
  window.location.href = 'flight_not_available.html';
}


bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'flight_not_available.html';
});