Filtered and Faded Ver 0.2 by Julio Rodriguez
https://github.com/thejulior
Distributed under Creative Commons CC BY-NC (Attribution-NonCommercial)

Requires: jQuery 1.7.2

DESCRIPTION
This script is meant for a gallery page where there are multiple similarly displayed
elements with a mix of meta-types. A bar of clickable filter buttons is meant to be
displayed prominently. These will fade out of view temporarily as the gallery elements
for a selected filter type are laid out. There's also the option of filtering a footer
element with the script to prevent it from jumping around as the page size adjusts.
I originally wrote this to work with the colorbox plugin, so that works nicely.

CLASS NAMES AND DIV NAMES:
You'll have to customize these to suit your site's design. I do not provide a CSS
companion file for now.

CLASSES
selectedfilter: Applied to whichever filter <li> is currently selected.
deschover:      Optional class applied to "shortdesc" item description on hover.

DIVs
filters:        The <ul> element that should hold your available filters. If you
                want to have an "all items" option, give it the "nofilter" value.
results:        The <div> that should hold the items to be filtered.
portdynamic:    This <div> displays a short description (shortdesc) of each gallery item
                upon hovering.
footer:         The name I used for my foter div. You can change it in the script if
                yours is named differently.

VARIABLES FOR YOUR HTML
filtertarget:   Each item in your gallery needs to have this value. It should correspond
                to the available filters in "filters". Each gallery item can have more
                than one filtertarget, if separated by commas.
shortdesc:      The short text description that is shown in "portdynamic" when
                hovering over your gallery elements.