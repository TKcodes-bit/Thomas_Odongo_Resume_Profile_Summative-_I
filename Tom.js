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
  const query = document.getElementById('search')?.value.toLowerCase();
  const sections = document.querySelectorAll('.section');

  for (let sec of sections) {
    if (sec.id.toLowerCase().includes(query)) {
      showSection(sec.id);
      break;
    }
  }
}

// Add event listener for search input
document.getElementById('search')?.addEventListener('input', searchSection);

// Show the contact section by default
document.addEventListener('DOMContentLoaded', () => {
  const contactSection = document.querySelector('.contact');
  if (contactSection) {
    contactSection.classList.add('active');
  }
});

// Add event listener for the search button
document.getElementById('search-btn')?.addEventListener('click', function(e) {
  e.preventDefault();
  searchSection();
});

// Add event listener for the search input to allow pressing Enter
document.getElementById('search')?.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchSection();
  }
});

// Add event listener for the clear button
document.getElementById('clear-btn')?.addEventListener('click', function() {
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.value = '';
    const firstSection = document.querySelector('.section');
    if (firstSection) {
      showSection(firstSection.id);
    }
  }
});
// Contact form validation and submission
  function contactMe() {
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const message = document.getElementById("message").value.trim();

    const namePattern = /^[A-Za-z\s]{2,}$/;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const phonePattern = /^\+?[0-9]{7,15}$/;

    if (!namePattern.test(name)) {
      alert("Enter a valid name.");
      return false;
    }

    if (!emailPattern.test(contact) && !phonePattern.test(contact)) {
      alert("Enter a valid email or phone number.");
      return false;
    }

    const subject = `Message from ${name} (${contact})`;
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:t.odongo@alustudent..com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
    return false;
  }

