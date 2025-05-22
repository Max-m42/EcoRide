// Dropdown pour le nombre de passagers
const label = document.getElementById('passenger-label');
const dropdown = document.querySelector('.passenger-options');
const toggleIcon = document.querySelector('.dropdown-icon');
const inputHidden = document.getElementById('passenger-input');

toggleIcon.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

document.querySelectorAll('.passenger-option').forEach(option => {
    option.addEventListener('click', () => {
      const count = parseInt(option.dataset.value);
      label.textContent = count + (count === 1 ? ' passager' : ' passagers');
      inputHidden.value = count;
      dropdown.style.display = 'none';
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.passenger-dropdown')) {
      dropdown.style.display = 'none';
    }
  });
  