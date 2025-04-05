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

// Review and contact Form Submission

document.addEventListener('DOMContentLoaded', function() {
    // Form validation functions
    function validatePhone(phone) {
      // Basic US phone validation (accepts formats like: (123) 456-7890, 123-456-7890, 1234567890)
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
      return phoneRegex.test(phone);
    }
    
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    function validateForm(form) {
      let isValid = true;
      
      // Get form elements
      const nameInput = form.querySelector('[id$="-name"]'); // matches both contact-name and name
      const emailInput = form.querySelector('[id$="-email"]') || form.querySelector('[id="email"]');
      const phoneInput = form.querySelector('[id$="-phone"]') || form.querySelector('[id="phone"]');
      
      // Clear previous error messages
      form.querySelectorAll('.validation-error').forEach(el => el.remove());
      
      // Validate name (required)
      if (nameInput && !nameInput.value.trim()) {
        addErrorMessage(nameInput, 'Please enter your name');
        isValid = false;
      }
      
      // Validate email (required and format)
      if (emailInput) {
        if (!emailInput.value.trim()) {
          addErrorMessage(emailInput, 'Please enter your email address');
          isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
          addErrorMessage(emailInput, 'Please enter a valid email address');
          isValid = false;
        }
      }
      
      // Validate phone (if provided, check format)
      if (phoneInput && phoneInput.value.trim() && !validatePhone(phoneInput.value.trim())) {
        addErrorMessage(phoneInput, 'Please enter a valid phone number');
        isValid = false;
      }
      
      // Validate message or review (if present)
      const messageInput = form.querySelector('#contact-message') || form.querySelector('#review');
      if (messageInput && !messageInput.value.trim()) {
        addErrorMessage(messageInput, 'Please enter your message');
        isValid = false;
      }
      
      // Validate rating if it's the review form
      const ratingInput = form.querySelector('#rating');
      if (ratingInput && ratingInput.value === '0') {
        const ratingContainer = form.querySelector('.rating-select');
        addErrorMessage(ratingContainer, 'Please select a rating');
        isValid = false;
      }
      
      return isValid;
    }
    
    function addErrorMessage(element, message) {
      // Create an error message element
      const errorElement = document.createElement('div');
      errorElement.className = 'validation-error';
      errorElement.textContent = message;
      
      // Insert it after the form element
      element.parentNode.insertBefore(errorElement, element.nextSibling);
      
      // Add error class to the element
      element.classList.add('input-error');
      
      // Remove error state on input
      element.addEventListener('input', function() {
        element.classList.remove('input-error');
        const error = element.parentNode.querySelector('.validation-error');
        if (error) error.remove();
      });
    }
    
    // Handle Contact Form
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      // Add honeypot field
      const honeypotField = document.createElement('div');
      honeypotField.className = 'form-group website-field';
      honeypotField.innerHTML = `
        <label for="_gotcha">Website</label>
        <input type="text" id="_gotcha" name="_gotcha" class="form-control">
      `;
      contactForm.appendChild(honeypotField);
      
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form
        if (!validateForm(contactForm)) {
          return false;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Use Formspree to handle the form submission
        // Replace 'YOUR_FORMSPREE_ENDPOINT' with your unique endpoint
        fetch('https://formspree.io/f/mblgzzal', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          // Handle success
          contactForm.reset();
          
          // Show success message
          const successMessage = document.createElement('div');
          successMessage.className = 'form-success-message';
          successMessage.textContent = 'Thank you! Your message has been sent successfully.';
          
          // Insert the message after the form
          contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
          
          // Reset button
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
          
          // Remove the success message after 5 seconds
          setTimeout(() => {
            successMessage.remove();
          }, 5000);
        })
        .catch(error => {
          console.error('Error:', error);
          
          // Show error message
          const errorMessage = document.createElement('div');
          errorMessage.className = 'form-error-message';
          errorMessage.textContent = 'Sorry, there was a problem sending your message. Please try again later.';
          
          // Insert the message after the form
          contactForm.parentNode.insertBefore(errorMessage, contactForm.nextSibling);
          
          // Reset button
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
          
          // Remove the error message after 5 seconds
          setTimeout(() => {
            errorMessage.remove();
          }, 5000);
        });
      });
    }
    
    // Handle Review Form
    const reviewForm = document.getElementById('review-form');
    
    if (reviewForm) {
      // Add honeypot field
      const honeypotField = document.createElement('div');
      honeypotField.className = 'form-group website-field';
      honeypotField.innerHTML = `
        <label for="_gotcha_review">Website</label>
        <input type="text" id="_gotcha_review" name="_gotcha" class="form-control">
      `;
      reviewForm.appendChild(honeypotField);
      
      // Set up rating selection
      const ratingOptions = reviewForm.querySelectorAll('.rating-option');
      const ratingInput = reviewForm.querySelector('#rating');
      
      ratingOptions.forEach(option => {
        option.addEventListener('click', function() {
          const rating = this.getAttribute('data-rating');
          ratingInput.value = rating;
          
          // Update visual state
          ratingOptions.forEach(opt => opt.classList.remove('selected'));
          
          // Select this and all previous stars
          for (let i = 0; i < rating; i++) {
            ratingOptions[i].classList.add('selected');
          }
          
          // Remove any validation errors
          const errorMsg = reviewForm.querySelector('.rating-select + .validation-error');
          if (errorMsg) errorMsg.remove();
        });
      });
      
      reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form
        if (!validateForm(reviewForm)) {
          return false;
        }
        
        // Show loading state
        const submitButton = reviewForm.querySelector('.btn-submit');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Get form data
        const formData = new FormData(reviewForm);
        
        // Ensure the star rating is included
        const rating = reviewForm.querySelector('#rating').value;
        if (rating === "0") {
          // If no rating is selected, show an error
          const ratingContainer = reviewForm.querySelector('.rating-select');
          addErrorMessage(ratingContainer, 'Please select a rating');
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
          return false;
        }
        
        // Make sure we have the customer name
        const name = reviewForm.querySelector('#name').value.trim();
        if (!name) {
          const nameInput = reviewForm.querySelector('#name');
          addErrorMessage(nameInput, 'Please enter your name');
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
          return false;
        }
        
        // Make sure we have the location
        const location = reviewForm.querySelector('#location').value.trim();
        if (!location) {
          const locationInput = reviewForm.querySelector('#location');
          addErrorMessage(locationInput, 'Please enter your location');
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
          return false;
        }
        
        // Make sure we have the review text
        const reviewText = reviewForm.querySelector('#review').value.trim();
        if (!reviewText) {
          const reviewInput = reviewForm.querySelector('#review');
          addErrorMessage(reviewInput, 'Please enter your review');
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
          return false;
        }
        
        // Add formatted data to make the email more readable
        formData.append('formatted-message', 
          `New Review Submission:\n\n` +
          `Rating: ${rating} stars\n` +
          `Name: ${name}\n` +
          `Location: ${location}\n\n` +
          `Review:\n${reviewText}`
        );
        
        // Use Formspree to handle the form submission
        // Replace 'YOUR_REVIEW_FORMSPREE_ENDPOINT' with your unique endpoint for reviews
        fetch('https://formspree.io/f/mdkewwya', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          // Handle success
          reviewForm.reset();
          
          // Reset rating stars
          ratingOptions.forEach(opt => opt.classList.remove('selected'));
          ratingInput.value = '0';
          
          // Show success message
          const successMessage = document.createElement('div');
          successMessage.className = 'form-success-message';
          successMessage.textContent = 'Thank you for your review! It has been submitted successfully.';
          
          // Insert the message after the form
          reviewForm.parentNode.insertBefore(successMessage, reviewForm.nextSibling);
          
          // Reset button
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
          
          // Remove the success message after 5 seconds
          setTimeout(() => {
            successMessage.remove();
          }, 5000);
        })
        .catch(error => {
          console.error('Error:', error);
          
          // Show error message
          const errorMessage = document.createElement('div');
          errorMessage.className = 'form-error-message';
          errorMessage.textContent = 'Sorry, there was a problem submitting your review. Please try again later.';
          
          // Insert the message after the form
          reviewForm.parentNode.insertBefore(errorMessage, reviewForm.nextSibling);
          
          // Reset button
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
          
          // Remove the error message after 5 seconds
          setTimeout(() => {
            errorMessage.remove();
          }, 5000);
        });
      });
    }
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