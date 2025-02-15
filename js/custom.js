

// Select all links with hashes
jQuery('a[href*="#"].hash')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
	// On-page links
	if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
			) {
		// Figure out element to scroll to
		var target = jQuery(this.hash);
		target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: target.offset().top
			}, 1000, function () {
				// Callback after animation
				// Must change focus!
				var $target = jQuery(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
					return false;
				} else {
					$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
					$target.focus(); // Set focus again
				}
				;
			});
		}
	}
});

$('.hash_area a.hash').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top - 170
	}, 500, 'linear');
});



// backto-top btn script
		var btn = jQuery('#backto-top');
		jQuery(window).scroll(function() {
		  if (jQuery(window).scrollTop() > 150) {
		    btn.addClass('show');
		  } else {
		    btn.removeClass('show');
		  }
		});

		btn.on('click', function(e) {
		  e.preventDefault();
		  jQuery('html, body').animate({scrollTop:0}, '1000');
		});
	// backto-top btn script end




		jQuery(document).ready(function($) {
			jQuery('.stellarnav').stellarNav({
			theme: 'dark',
			breakpoint: 991,
			position: 'right',
			});

			jQuery("#navbar_top").scrollToFixed();

			$(window).scroll(function () {
				if ($(window).scrollTop() <= 40) {
					//alert();
					$(".menumain").removeClass("scroll_navbar");
				}
				else {
					$(".menumain").addClass("scroll_navbar");
				}
			});


			var owl = jQuery('.collections');
			owl.owlCarousel({
			margin: 0,
			smartSpeed: 500,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayHoverPause: true,
			loop: true,
			autoplayTimeout:1800,
			responsive: {
			0: {items: 2},
			480: {items: 2},
			576: {items: 2},
			768: {items: 4},
			992: {items: 4},
			1200: {items: 5}
			}
			});

		});


	// VALIDATION
		// document.getElementById('fname').setCustomValidity('Please enter your full name');
        // document.getElementById('fcontact').setCustomValidity('Please enter a valid 10-digit mobile number');
        // document.getElementById('femail').setCustomValidity('Please enter your email');

        // function clearValidityMessage(element) {
        //     element.setCustomValidity('');
        //     const value = element.value.toString();
        //     if (value !== '' && value !== '-' && value !== '+' && value !== 'e' && value !== '-e' && value !== '+e') {
        //         element.classList.add('has-value');
        //     } else {
        //         element.classList.remove('has-value');
        //     }
        // }
        // document.getElementById('fcontact').addEventListener('input', function () {
        //     let phoneValue = this.value;
        //     let regex = /^\d{10}$/;
        //     if (!regex.test(phoneValue)) {
        //         this.setCustomValidity('Please enter a valid 10-digit mobile number');
        //     } else {
        //         this.setCustomValidity('');
        //     }
        // });
		document.getElementById('fname').setCustomValidity('Please enter your full name');
		document.getElementById('fcontact').setCustomValidity('Please enter a valid 10-digit mobile number');
		document.getElementById('femail').setCustomValidity('Please enter your email');

		function clearValidityMessage(element) {
			element.setCustomValidity('');
			const value = element.value.toString();
			if (value !== '' && value !== '-' && value !== '+' && value !== 'e' && value !== '-e' && value !== '+e') {
				element.classList.add('has-value');
			} else {
				element.classList.remove('has-value');
			}
		}
		document.getElementById('fcontact').addEventListener('input', function () {
			let phoneValue = this.value;
			let regex = /^\d{10}$/;
			if (!regex.test(phoneValue)) {
				this.setCustomValidity('Please enter a valid 10-digit mobile number');
			} else {
				this.setCustomValidity('');
			}
		});


		function validateEmail(element) {
		const emailValue = element.value;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex

		// Clear any previous validation messages
		element.setCustomValidity('');

		if (emailValue === '') {
			element.setCustomValidity('Email address is required');
		} else if (!emailRegex.test(emailValue)) {
			element.setCustomValidity('Please enter a valid email address');
		} else {
			element.setCustomValidity('');
		}
		}

		// Automatically validate email on blur to improve user experience
		document.getElementById('femail').addEventListener('blur', function () {
			validateEmail(this);
		})
	// VALIDATION


	// <!-----MOBILE CELLNO CHANGE JS----->
	document.addEventListener('DOMContentLoaded', function() {
		function getParameterByName(name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(window.location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}

		var mobile = getParameterByName('cellno');
		console.log(`cell no: ${mobile}`); // Debugging log

		var callLink = document.getElementById('click_to_call');
		// var phoneNumberElement = document.getElementById('phone_number');
		// var sideNavPhoneNumber = document.getElementById('side-nav-phone-number');

		console.log(`callLink: ${callLink}`);
		// console.log(`phoneNumberElement: ${phoneNumberElement}`);
		// console.log(`sideNavPhoneNumber: ${sideNavPhoneNumber}`);

		if (mobile) {
			var phoneNumber = mobile.startsWith('+91') ? mobile : '+91' + mobile;
			callLink.href = "tel:" + phoneNumber;
			var formattedNumber = phoneNumber.slice(0, 3) + " " + phoneNumber.slice(3, 7) + " " + phoneNumber.slice(7, 10) + " " + phoneNumber.slice(10);
			console.log(`Formatted Number: ${formattedNumber}`); // Debugging log
			// phoneNumberElement.textContent = formattedNumber;
			// sideNavPhoneNumber.textContent = formattedNumber;
		}
	});





















