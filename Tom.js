// Show section when nav button is clicked
document.querySelectorAll('.btn').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });
  
  function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => {
      sec.classList.remove('active');
    });
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
  }
  
  // Search functionality
  function searchSection() {
    const query = document.getElementById('search').value.toLowerCase();
    const sections = document.querySelectorAll('.section');
  
    for (let sec of sections) {
      if (sec.id.toLowerCase().includes(query)) {
        showSection(sec.id);
        break;
      }
    }
  }
// Add event listener for search input
document.getElementById('search').addEventListener('input', searchSection);
// Show the first section by default
document.addEventListener('DOMContentLoaded', () => {
    const firstSection = document.querySelector('.section');
    if (firstSection) {
      firstSection.classList.add('active');
    }
  });
  //make the contact section to be active by default
document.querySelector('.contact').classList.add('active'); 

  // Add event listener for the search button
  document.getElementById('search-btn').addEventListener('click', function(e) {
    e.preventDefault();
    searchSection();
  }
);
// Add event listener for the search input to allow pressing Enter
document.getElementById('search').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchSection();
    }
  });
  
  // Add event listener for the clear button
  document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('search').value = '';
    showSection(document.querySelector('.section').id);
  })