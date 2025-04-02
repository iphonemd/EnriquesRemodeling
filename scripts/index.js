// Service Data
const serviceData = {
  bathroom: {
      title: "Bathroom Remodeling",
      description: "Transform your bathroom into a luxurious spa-like retreat with our premium remodeling services. We specialize in creating stunning, functional spaces that combine elegant design with exceptional craftsmanship. From custom showers and soaking tubs to premium vanities and fixtures, we handle every aspect of your bathroom renovation with meticulous attention to detail.",
      features: [
          "Custom shower designs with premium tile work",
          "Luxury soaking tubs and jacuzzi installations",
          "High-end vanities and countertops",
          "Energy-efficient fixtures and lighting",
          "Radiant floor heating systems",
          "Custom storage solutions",
          "Accessibility modifications",
          "Steam showers and sauna installations"
      ]
  },
  kitchen: {
      title: "Kitchen Remodeling",
      description: "Elevate your culinary experience with our premier kitchen remodeling services. We design and create chef-inspired kitchens that combine stunning aesthetics with optimal functionality. From custom cabinetry and premium countertops to state-of-the-art appliances and innovative storage solutions, we transform your kitchen into the heart of your home.",
      features: [
          "Custom cabinet design and installation",
          "Premium natural stone and quartz countertops",
          "Professional-grade appliance integration",
          "Custom islands and breakfast bars",
          "Designer lighting solutions",
          "Smart kitchen technology",
          "Walk-in pantry design",
          "Premium flooring options"
      ]
  },
  flooring: {
      title: "Floor Remodeling",
      description: "Enhance your space with our premium flooring solutions. We offer a wide selection of high-quality materials installed with expert precision. From hardwood and natural stone to luxury vinyl and porcelain tile, our flooring experts will help you select the perfect option to enhance your home's beauty and value.",
      features: [
          "Premium hardwood installations",
          "Natural stone and marble flooring",
          "Luxury vinyl plank and tile",
          "Porcelain and ceramic tile work",
          "Heated flooring systems",
          "Custom inlays and patterns",
          "Commercial-grade options",
          "Eco-friendly alternatives"
      ]
  },
  painting: {
      title: "Interior & Exterior Painting",
      description: "Transform your space with our premium painting services. Our team of skilled professionals uses only the highest quality paints and techniques to deliver flawless results. From single rooms to complete interior and exterior transformations, we provide exceptional finishes that enhance the beauty and protection of your home.",
      features: [
          "Premium paint products with lifetime warranties",
          "Expert color consultation",
          "Custom faux finishes and textures",
          "Cabinet refinishing and painting",
          "Deck and fence staining",
          "Wallpaper removal and installation",
          "Popcorn ceiling removal",
          "Eco-friendly, low-VOC options"
      ]
  },
  fence: {
      title: "Fence Installation & Repair",
      description: "Enhance your property's security and aesthetic appeal with our custom fencing solutions. We design and install premium fences using only the highest quality materials to ensure durability and longevity. From traditional wood and wrought iron to modern vinyl and composite options, we create beautiful boundaries that complement your home's architecture.",
      features: [
          "Custom wood fence designs",
          "Ornamental iron and aluminum options",
          "Vinyl and composite solutions",
          "Privacy fencing with decorative elements",
          "Automatic gate systems",
          "Security fencing with access control",
          "Pool enclosures with safety features",
          "Decorative post caps and lighting"
      ]
  },
  trim: {
      title: "Trim & Moulding Installation",
      description: "Add architectural interest and elegance to your space with our custom trim and moulding services. Our master craftsmen specialize in creating stunning details that elevate your home's interior. From crown moulding and wainscoting to chair rails and custom millwork, we bring refined sophistication to every room.",
      features: [
          "Crown moulding installation",
          "Wainscoting and panel moulding",
          "Chair rails and picture rails",
          "Coffered and tray ceilings",
          "Custom door and window casings",
          "Decorative columns and archways",
          "Custom built-ins and cabinetry",
          "Baseboards and shoe moulding"
      ]
  }
};

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const backToTop = document.querySelector('.back-to-top');
const serviceCards = document.querySelectorAll('.service-card');
const serviceModal = document.getElementById('service-modal');
const modalClose = document.querySelector('.modal-close');
const ratingOptions = document.querySelectorAll('.rating-option');
const ratingInput = document.getElementById('rating');
const reviewForm = document.getElementById('review-form');
const contactForm = document.getElementById('contact-form');
const contactBtn = document.querySelector('.contact-btn');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Scroll Event
window.addEventListener('scroll', () => {
  // Header Scroll Effect
  if (window.scrollY > 100) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }

  // Back to Top Button
  if (window.scrollY > 500) {
      backToTop.classList.add('active');
  } else {
      backToTop.classList.remove('active');
  }

  // Fade In Animation
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 100) {
          element.classList.add('active');
      }
  });
});

// Trigger initial scroll event to initialize animations
window.dispatchEvent(new Event('scroll'));

// Service Slideshow Navigation
document.querySelectorAll('.service-nav-dot').forEach(dot => {
  dot.addEventListener('click', (e) => {
      const parent = e.target.closest('.service-img');
      const dots = parent.querySelectorAll('.service-nav-dot');
      const slideshow = parent.querySelector('.service-slideshow');
      const index = parseInt(e.target.getAttribute('data-index'));
      
      dots.forEach(d => d.classList.remove('active'));
      e.target.classList.add('active');
      
      slideshow.style.transform = `translateX(-${index * 100}%)`;
  });
});

// Automatic Slideshow
serviceCards.forEach(card => {
  const slideshow = card.querySelector('.service-slideshow');
  const dots = card.querySelectorAll('.service-nav-dot');
  let currentSlide = 0;
  
  setInterval(() => {
      currentSlide = (currentSlide + 1) % dots.length;
      dots.forEach(d => d.classList.remove('active'));
      dots[currentSlide].classList.add('active');
      slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, 5000);
});

// Service Modal
serviceCards.forEach(card => {
  card.addEventListener('click', () => {
      const service = card.getAttribute('data-service');
      const serviceInfo = serviceData[service];
      
      document.getElementById('modal-title').textContent = serviceInfo.title;
      document.getElementById('modal-description').textContent = serviceInfo.description;
      
      // Clear and populate features
      const featuresContainer = document.getElementById('modal-features');
      featuresContainer.innerHTML = '';
      serviceInfo.features.forEach(feature => {
          const featureItem = document.createElement('div');
          featureItem.className = 'feature-item';
          featureItem.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${feature}</span>
          `;
          featuresContainer.appendChild(featureItem);
      });
      
      // Populate gallery
      const galleryContainer = document.getElementById('modal-gallery');
      galleryContainer.innerHTML = '';
      for (let i = 0; i < 6; i++) {
          const img = document.createElement('img');
          img.src = `/api/placeholder/300/300`;
          img.alt = `${serviceInfo.title} Example ${i+1}`;
          galleryContainer.appendChild(img);
      }
      
      // Show modal
      serviceModal.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
});

// Service links in footer
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', (e) => {
      if (link.tagName.toLowerCase() === 'a') {
          e.preventDefault();
      }
      
      const service = link.getAttribute('data-service');
      const serviceInfo = serviceData[service];
      
      document.getElementById('modal-title').textContent = serviceInfo.title;
      document.getElementById('modal-description').textContent = serviceInfo.description;
      
      // Clear and populate features
      const featuresContainer = document.getElementById('modal-features');
      featuresContainer.innerHTML = '';
      serviceInfo.features.forEach(feature => {
          const featureItem = document.createElement('div');
          featureItem.className = 'feature-item';
          featureItem.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${feature}</span>
          `;
          featuresContainer.appendChild(featureItem);
      });
      
      // Populate gallery
      const galleryContainer = document.getElementById('modal-gallery');
      galleryContainer.innerHTML = '';
      for (let i = 0; i < 6; i++) {
          const img = document.createElement('img');
          img.src = `/api/placeholder/300/300`;
          img.alt = `${serviceInfo.title} Example ${i+1}`;
          galleryContainer.appendChild(img);
      }
      
      // Show modal
      serviceModal.classList.add('active');
      document.body.style.overflow = 'hidden';
  });
});

// Close Modal
modalClose.addEventListener('click', () => {
  serviceModal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Close modal when clicking outside of content
serviceModal.addEventListener('click', (e) => {
  if (e.target === serviceModal) {
      serviceModal.classList.remove('active');
      document.body.style.overflow = 'auto';
  }
});

// Rating Selection
ratingOptions.forEach(option => {
  option.addEventListener('click', (e) => {
      const rating = e.target.closest('.rating-option').getAttribute('data-rating');
      ratingInput.value = rating;
      
      ratingOptions.forEach(opt => {
          if (parseInt(opt.getAttribute('data-rating')) <= parseInt(rating)) {
              opt.classList.add('selected');
          } else {
              opt.classList.remove('selected');
          }
      });
  });
});

// Review Form Submission
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const location = document.getElementById('location').value;
  const rating = document.getElementById('rating').value;
  const review = document.getElementById('review').value;
  
  if (rating === '0') {
      alert('Please select a rating');
      return;
  }
  
  // In a real implementation, this would send data to a server
  console.log({name, location, rating, review});
  
  // Success message
  alert('Thank you for your review! It will be visible after moderation.');
  reviewForm.reset();
  ratingOptions.forEach(opt => opt.classList.remove('selected'));
  ratingInput.value = '0';
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const phone = document.getElementById('contact-phone').value;
  const service = document.getElementById('contact-service').value;
  const message = document.getElementById('contact-message').value;
  
  // In a real implementation, this would send data to a server
  console.log({name, email, phone, service, message});
  
  // Success message
  alert('Thank you for contacting us! We will get back to you shortly.');
  contactForm.reset();
});

// "Get a Quote" Button
contactBtn.addEventListener('click', () => {
  const contactSection = document.getElementById('contact');
  window.scrollTo({
      top: contactSection.offsetTop - 100,
      behavior: 'smooth'
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (href === '#') {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      } else {
          const target = document.querySelector(href);
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 100,
                  behavior: 'smooth'
              });
          }
      }
      
      // Close mobile menu if open
      if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          menuToggle.classList.remove('active');
      }
  });
});

// Initialize all fade-in animations
document.querySelectorAll('.fade-in').forEach(element => {
  const elementTop = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (elementTop < windowHeight - 100) {
      element.classList.add('active');
  }
});