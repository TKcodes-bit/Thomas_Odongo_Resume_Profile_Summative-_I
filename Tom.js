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
  