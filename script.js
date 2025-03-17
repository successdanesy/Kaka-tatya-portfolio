function showSidebar() {
  document.getElementById('sidebar').classList.add('show');
}

function hideSidebar() {
  document.getElementById('sidebar').classList.remove('show');
}


// Open the Modal
function openModal(src) {
  document.getElementById('myModal').style.display = "block";
  document.getElementById('modalImage').src = src;
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// Close the modal if clicked outside the image
window.onclick = function(event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    closeModal();
  }
}

// Add event listener to the close button
document.querySelector(".close").addEventListener('click', closeModal);

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

const toggleButton = document.querySelector('.toggle-gallery-btn');
const galleryContainer = document.querySelector('.collapsible-gallery');

toggleButton.addEventListener('click', () => {
  galleryContainer.classList.toggle('active');
  
  // Update button text/icon
  if (galleryContainer.classList.contains('active')) {
    galleryContainer.scrollIntoView({ behavior: 'smooth' });
    toggleButton.innerHTML = 'Collapse Works ▲';
  } else {
    toggleButton.innerHTML = 'Show All Works ▼';
  }
});