Font:
  - We set up the Allura and Alex Brush font family stacks in the CSS but we don't have the fonts included (OK)

  - I first noticed that the normalize is incorrectly displayed on the site because the stylesheet is not properly linked within the relative path.
  <link rel="stylesheet" href="css/normalize.min.css"/>

  - I also imported the font family Allura and Alex Brush to main.css
  @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');

  - I also set variables within the css to make any future changes with font/font-size/color easier.

  :root {
  /* FONT FAMILY */
  --ff-main: Georgia, 'Times New Roman', Times, serif;
  --ff-subheading: 'Allura', cursive;
  --ff-description: 'Alex Brush', cursive;

  /* COLORS */
  /* --color-main */
  --color-heading: #7494b7;

  /* FONT SIZE */
  --fs-lg-mobile: 3rem;
}

Site Logos:
  - We need to account for retina screens (OK)

  - For the retina display logo, instead of using a div, I changed it to a picture element so it's easier to set breakpoints for the image. I set the retina image breakpoint @ 1024px.

    <picture class="site-logo">
    <!-- Retina Image Breakpoint @ 1024px -->
    <source media="(min-width:1024px)" srcset="images/bb-logo-2x.png">
    <img src="images/bb-logo.png" alt="Beautiful Beginnings: Celebrating baby and child">
    </picture>

  - Added alt tags and aria-hidden tags for certain image elements. Alt tags were added for products to better visually describe what they look like for screen readers.

  example: <img alt="white with dark green and turquoise spotted giraffe plush" class="item__image" src="images/stuffed-animal.jpg"/>

Icons:
  - We haven't been able to add the icons to the setup yet (OK)
  - Hamburger menu, cart, and search icons haven't been added (OK)

  - Certain image assets are missing...
    - Search icon is not in the images folder.
    - Hamburger menu not in the images folder.
  - Added fontawesome to import mising icons.
  - Cart icon was added. Instead of adding pngs, I usually use svgs, as they are easier to work with, and allows customization when it comes to size, color, etc.

  - Gave header-toggles--mobile styling: display: flex;

  - Gave the icons (links) in header-toggles-mobile a:
    display: flex;
    justify-content: center;
    align-items: center;... to have better alignment.

  - The shopping cart icon was intentially left smaller because the original design looks like it is smaller than the hamburger menu icon.

  - Added social icons (pngs) to the Follow Us section.


Navigation:
  - We haven't setup functionality for the menu toggle to open up the bottom footer area in small screens (OK)

  - Created a mobile navigation menu with CSS.

  in main.js...
  - Created a variable for the mobile navigation menu, also created a variable for the hamburger menu.

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.header-navigation--mobile');
    const slideshow = document.querySelector('.slideshow');
    const featuredWidgetHeader = document.querySelector('.featured-widget__header');

  - Added an event listener which toggles the class of 'active' whenever the hamburger menu is clicked.

    menuToggle.addEventListener('click', function () {
      // toggle the active class on the menu-toggle
      mobileNav.classList.toggle('active');
      // hide the slideshow hero section while mobile menu is active
      slideshow.classList.toggle('hidden');
      // hide the featured widget while mobile menu is active
      featuredWidgetHeader.classList.toggle('hidden');
    });

    CSS for .active {
      display: block;
    }
  
  - Also made a class of 'hidden' with the display: none; which hides the slideshow and the "featured" header simultaneously when the hamburger menu is opened.

Slideshow:
  - We need another slide created from the PSD 
  - The styling isn't right yet for slide content as well
  - We also haven't been able to set up the slide functionality

  - I am not sure how they want the slider to look like, as the PSD provided had no changes to the slideshow styling. There was also no other hero image provided which would clue me into making a new slideshow. I would report missing assets to the project manager, get clarification and I would love to discuss the style decision of the slideshow with another colleague if I was in a job.

Footer:
  - We got a fair amount of responsive styles done for the site however the footer isn't quite there yet (OK)
  - Social media icons need to be setup so some html changes there to put them in is fine. (OK)
     <ul class="social-list">
        <li>
            <a href="#"><img src="images/social-facebook.png" alt="Facebook"></a>
        </li>
        <li>
            <a href="#"><img src="images/social-twitter.png" alt="Twitter"></a>
        </li>
        <li>
            <a href="#"><img src="images/social-pintrest.png" alt="Pinterest"></a>
        </li>
        <li>
            <a href="#"><img src="images/social-youtube.png" alt="YouTube"></a>
        </li>
        <li>
            <a href="#"><img src="images/social-google-plus.png" alt="Google Plus"></a>
        </li>
    </ul>
  - Expander accordion Javascript functionality hasn't been setup or styled (OK)
      - Created an accordion for the footer by selecting all expanders and iterating through.

      // Footer Accordion variables
      const expander = document.querySelectorAll('.expander--mobile');
      const expanderToggle = document.querySelectorAll('.expander__toggle--mobile');
      const expanderPanel = document.querySelectorAll('.expander__panel--mobile');

      // loop through each expander and add a click event listener
      for (let i = 0; i < expander.length; i++) {
        expander[i].addEventListener('click', function () {
          expanderPanel[i].classList.toggle('active');
        });
        // when one is clicked, close all the others
        expanderToggle[i].addEventListener('click', function () {
          for (let i = 0; i < expanderToggle.length; i++) {
            expanderPanel[i].classList.remove('active');
          }
        });
      }

      - Each expander clicked displays the expander__pannel as block and when the other is clicked, it is hidden.

      - I had to create second footer nav, adding a modifier --mobile so the accordion doesn't carry into the desktop footer. 
      - If any other dev has a better method of doing this.. please let me know. I actually would love to know as it would probably reduce a lot of repetitive HTML and CSS.
      - Added appropriate media queries to hide the mobile footer w/ accordion when it's 64em, and show the desktop footer.
      ...By doing this, I had to hide all page-footer__column classes, but I counteracted that by making a visible class (display: block;) and applying it to all other page-footer__column section that I don't want hidden when switching device viewports... again. If another dev has a better way to control this, please let me know.


  - Footer bottom area: we unfortunately can't pull the html content out of its location (OK)
    - This was new to me. I googled some suggestions. My approach was to the page-wrap to a min-height of 100vh and set the footer an absolute positioning, and position it lower than the colorful footer divider, then add a padding bottom to the footer so the content can actually be displayed.

        .footer-bottom {
          position: absolute;
          display: flex;
          flex-direction: column;
          width: 100%;
          flex-direction: column-reverse;
          align-items: center;
      }

      .page-wrap {
        min-height: 100vh;
        overflow: hidden;
        margin: 0 auto 120px;
        padding: 7px 0 200px;
        max-width: 1020px;
        background: #fff;
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      }
     - Can we style up the setup so it matches the desktop and mobile styles (OK)
     - I ran out of time to properly style the footer links for mobile.

Responsive:
  - For some reason the site isn't switching over to "mobile" styles in devices (OK)
    - Added media query breakpoints, hid elements that are not in the original mobile design.

  - Also when you shrink down the browser some sort of content is causing a horizontal scrollbar in smaller screens (OK)
      - Added overflow: hidden to page-wrap which solved the issue of horizontal scrollbar in smaller screens.

  - In between sizes for tablet portrait feel fairly empty, is there something we can style to make them look better
    - Ran out of time but I would love to draw out some design ideas.

Other changes: 

Added background gradient for slide__content in desktop view.

    background: linear-gradient(
    171deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );

"Shop Crib Bedding" button was misspelled so the mistake was corrected.

Missing !DOCTYPE HTML so I added it to line 1 of the document.
Added meta tag with viewport

Optimized SEO by adding:
- meta tags
  - viewport
  - title
  - description
  - keywords
  - robots
  - language
  - author