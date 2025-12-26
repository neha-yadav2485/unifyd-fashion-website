  // ===== GLOBAL ELEMENTS =====
    const sideMenu = document.getElementById("sideMenu");
    const menuBtn = document.querySelector(".hamburger");
    const body = document.body;

    // ===== MENU TOGGLE =====
    function menuClick() {
      sideMenu.classList.toggle("active");
      document.addEventListener('click', closeMenuOnOutsideClick);
    }

    function closeMenuOnOutsideClick(e) {
      if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        sideMenu.classList.remove("active");
        document.removeEventListener('click', closeMenuOnOutsideClick);
      }
    }

    // ===== SMOOTH SCROLL NAVIGATION =====
    function goHome() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      sideMenu.classList.remove("active");
    }

    function goTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
      sideMenu.classList.remove("active");
    }

    function goToCategory(category) {
      alert(`Navigating to ${category} Collection\n\nThis would typically load products from the ${category} category.`);
      sideMenu.classList.remove("active");
    }

    // ===== MODAL FUNCTIONS =====
    function openSkinToneModal() {
      document.getElementById('skinToneModal').classList.add('active');
      body.style.overflow = 'hidden';
    }

    function openStyleGuide() {
      document.getElementById('styleGuideModal').classList.add('active');
      body.style.overflow = 'hidden';
    }

    function openModal(modalType) {
      const modalContent = {
        'shipping': `<h2>Shipping & Returns</h2>
                    <p><strong>Free Shipping:</strong> On all orders over $100</p>
                    <p><strong>Delivery Time:</strong> 3-7 business days</p>
                    <p><strong>Returns:</strong> 30-day return policy</p>`,
        'size-guide': `<h2>Size Guide</h2>
                      <p>Check our detailed size chart to find your perfect fit.</p>
                      <p>We recommend measuring yourself and comparing with our chart.</p>`,
        'privacy': `<h2>Privacy Policy</h2>
                   <p>We respect your privacy and protect your personal information.</p>
                   <p>Your data is secure with us.</p>`
      };
      
      const modal = document.createElement('div');
      modal.className = 'modal active';
      modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-close" onclick="this.parentElement.parentElement.remove()">×</div>
          ${modalContent[modalType] || '<h2>Information</h2><p>Content coming soon.</p>'}
        </div>
      `;
      document.body.appendChild(modal);
      body.style.overflow = 'hidden';
    }

    function closeModal(modalId) {
      document.getElementById(modalId).classList.remove('active');
      body.style.overflow = 'auto';
    }

    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        body.style.overflow = 'auto';
      }
    });

    // ===== ACTION FUNCTIONS =====
    function searchClick() {
      const search = prompt("What are you looking for today?");
      if (search) {
        alert(`Searching for: "${search}"\n\nThis would typically show search results for "${search}".`);
      }
    }

    function profileClick() {
      alert("Profile/Login\n\nThis would typically open the user account/login page.");
    }

    function cartClick() {
      alert("Shopping Cart\n\nThis would typically open the shopping cart with your selected items.");
    }

    function callUs() {
      window.location.href = "tel:+15551234567";
    }

    function forHer() {
      goToCategory('Women');
    }

    function forHim() {
      goToCategory('Men');
    }

    function contactUs() {
      const email = "style@unifyd.com";
      const phone = "+1 (555) 123-4567";
      alert(`Contact UNIFYD\n\nEmail: ${email}\nPhone: ${phone}\n\nWe'd love to hear from you!`);
    }

    // ===== STICKY NAV ON SCROLL =====
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    // ===== INITIAL LOAD ANIMATION =====
    window.addEventListener('load', function() {
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 100);
    });

    // ===== KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
          modal.classList.remove('active');
          body.style.overflow = 'auto';
        });
        sideMenu.classList.remove('active');
      }
      if (e.ctrlKey && e.key === '/') {
        searchClick();
      }
    });
