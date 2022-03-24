For the skill assessment, we will be testing out your ability to pick up someone else's code and take it to the next level. 
For the hypothetical situation, a FED has been working on a project but got pulled off so we need your help.

Here's what the FED has to say:

This is where we got to in the cut, but we are having problems and haven't been able to fully test. 
Can you help us resolve the following issues as well as help catch if we missed something?
The client is very particular about having fast page speed, good SEO, and wants interesting interactive pieces.
Support wise they also want to have this page look right in browsers that are over 5% of the browser stats for the US over the past couple of months
Below are the items we haven't been able to get to yet.

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
  - We need to account for retina screens

  - For the retina display logo, instead of using a div, I changed it to a picture element so it's easier to set breakpoints for the image. I set the retina image breakpoint @ 1024px.
  - Added alt tags and aria-hidden tags for certain image elements. Alt tags were added for products to better visually describe what they look like for screen readers.

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
  - Added an event listener which toggles the class of 'active' whenever the hamburger menu is clicked.
  
  - Also made a class of 'hidden' with the display: none; which hides the slideshow and the "featured" header simultaneously when the hamburger menu is opened.

Slideshow:
  - We need another slide created from the PSD 
  - The styling isn't right yet for slide content as well
  - We also haven't been able to set up the slide functionality

Footer:
  - We got a fair amount of responsive styles done for the site however the footer isn't quite there yet
  - Social media icons need to be setup so some html changes there to put them in is fine. (OK)
  - Expander accordion Javascript functionality hasn't been setup or styled (OK)
      - Created an accordion for the footer by selecting all expanders and iterating through.

      - Each expander__toggle (the h2) clicked displays the expander__pannel as block and when the other is clicked, it is hidden.

      - I had to create second footer nav, adding a modifier --mobile so the accordion doesn't carry into the desktop footer. 
      - If any other dev has a better method of doing this.. please let me know. I actually would love to know as it would probably reduce a lot of repetitive HTML and CSS.
      - Added appropriate media queries to hide the mobile footer w/ accordion when it's 64em, and show the desktop footer.

By doing this, I had to hide all page-footer__column classes, but I counteracted that by making a visible class (display: block;) and applying it to all other page-footer__column section that I don't want hidden when switching device viewports... again. If another dev has a better way to control this, please let me know.
  - Footer bottom area: we unfortunately can't pull the html content out of its location (OK)
     - Can we style up the setup so it matches the desktop and mobile styles (OK)

Responsive:
  - For some reason the site isn't switching over to "mobile" styles in devices (OK)
    - Added media query breakpoints, hid elements that are not in the original mobile design.

  - Also when you shrink down the browser some sort of content is causing a horizontal scrollbar in smaller screens (OK)
      - Added overflow hidden to the page-wrap which solved the issue of horizontal scrollbar in smaller screens.

  - In between sizes for tablet portrait feel fairly empty, is there something we can style to make them look better
    - Ran out of time but I would love to draw out some design ideas.


My changes: 

Set media queries for slide__content and added the mobile slide content on the index.html for the content to display properly for mobile.
- aligned text to center for mobile.


Added overflow hidden to the page-wrap which solved the issue of horizontal scrolling.

Overflow hidden created a gap between the image and its parent container so I put a width: 100% on the img to take fill the parent content.

Created an accordion for the footer by selecting all expanders and iterating through.

Each expander__toggle (the h2) clicked displays the expander__pannel as block and when the other is clicked, it is hidden.

I had to create second footer nav, adding a modifier --mobile so the accordion doesn't carry into the desktop footer. 
If any other dev has a better method of doing this.. please let me know. I actually would love to know as it would probably reduce a lot of repetitive HTML and CSS.
- Added appropriate media queries to hide the mobile footer w/ accordion when it's 64em, and show the desktop footer.

By doing this, I had to hide all page-footer__column classes, but I counteracted that by making a visible class (display: block;) and applying it to all other page-footer__column section that I don't want hidden when switching device viewports... again. If another dev has a better way to control this, please let me know.

Added background gradient for slide__content in desktop view.

"Shop Crib Bedding" button was misspelled so the mistake was corrected.

Missing DOCTYPE HTML so I added it to line 1 of the document.
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

I ran out of time to properly style the footer links for mobile.
