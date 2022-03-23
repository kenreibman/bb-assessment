For the skill assessment, we will be testing out your ability to pick up someone else's code and take it to the next level. 
For the hypothetical situation, a FED has been working on a project but got pulled off so we need your help.

Here's what the FED has to say:

This is where we got to in the cut, but we are having problems and haven't been able to fully test. 
Can you help us resolve the following issues as well as help catch if we missed something?
The client is very particular about having fast page speed, good SEO, and wants interesting interactive pieces.
Support wise they also want to have this page look right in browsers that are over 5% of the browser stats for the US over the past couple of months
Below are the items we haven't been able to get to yet.

Font:
  - We set up the Allura and Alex Brush font family stacks in the CSS but we don't have the fonts included

Site Logos:
  - We need to account for retina screens

Icons:
  - We haven't been able to add the icons to the setup yet
  - Hamburger menu, cart, and search icons haven't been added

Navigation:
  - We haven't setup functionality for the menu toggle to open up the bottom footer area in small screens

Slideshow:
  - We need another slide created from the PSD 
  - The styling isn't right yet for slide content as well
  - We also haven't been able to set up the slide functionality

Footer:
  - We got a fair amount of responsive styles done for the site however the footer isn't quite there yet
  - Social media icons need to be setup so some html changes there to put them in is fine.
  - Expander accordion Javascript functionality hasn't been setup or styled
  - Footer bottom area: we unfortunately can't pull the html content out of its location
     - Can we style up the setup so it matches the desktop and mobile styles

Responsive:
  - For some reason the site isn't switching over to "mobile" styles in devices
  - Also when you shrink down the browser some sort of content is causing a horizontal scrollbar in smaller screens
  - In between sizes for tablet portrait feel fairly empty, is there something we can style to make them look better


The client is very active in the project and wants a technical breakdown of what you did and how you resolved the missing items. 
So we need a writing assessment as well as the code above. 
They also want to know how the design UI/UX and FED code practices could be improved down the road, so please include that as well in your writing


My changes: 

I first noticed that the normalize is incorrectly displayed on the site because the stylesheet is not properly linked within the relative path.

I also imported the font family Allura and Alex Brush to main.css

I also set variables within the css to make any future changes with font/font-size/color easier.


** Adust logo for retina screens

Cart icon was added. Instead of adding pngs, I usually use svgs, as they are easier to work with, and allows customization when it comes to size, color, etc.
Search icon is not in the images folder.
Hamburger menu not in the images folder.

Added fontawesome to import icons.

Hamburger menu was given a width and height of 2rem.

Gave header-toggles--mobile styling:
display: flex;

gave the icons (links) in header-toggles-mobile a:
display: flex;
justify-content: center;
align-items: center;... to have better alignment.

The shopping cart icon was intentially left smaller because the original design looks like it is smaller than the hamburger menu icon.

Added social icons (pngs) to the Follow Us section.
-removed max-width from .page-footer__column


