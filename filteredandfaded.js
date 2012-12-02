/* 
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

*/
    
    $(document).ready(function(){  
    
    $("#results div").hover(function() {  /* This shows the project name on top of the page when mousing over photo */
        var shortdesc = $(this).attr('shortdesc');
        $('#portdynamic p').hide().stop().html('<p class="deschover">'+shortdesc+'</p>').fadeIn(200);
        }, function() {
        $('#portdynamic p').hide().stop().html('<p>click on a project to view more details</p>').fadeIn(200);
    });
    
    $("#filters li").click(function () {      /* filter the #results divs gallery */
        
        if ( $("#results div").is(':animated') ) {}  /* prevents function from running if animation is in progress or if click target is current filter */
        else if ( $(this).is(".selectedfilter") ) {}
        else {
        
            var filterVar = $(this).attr("filterval"); /* gets filterval from clicked filter li element */
               
            $("#filters li").removeClass("selectedfilter");  /* modifies filter buttons */
            $(this).addClass("selectedfilter");
            
            $("#filters li").not(".selectedfilter").fadeTo(150, .35); /* filter buttons and footer are faded out of the way temporarily */                
            $('#footer').fadeOut(200); /* This is optional, the footer is faded out */
            $("#results div").delay(200).fadeOut(320); /* all gallery items are faded out */
            
            var itemsToShow = [];
            
            setTimeout(function () { $('#results div').each(function (i) {
                
                var filterTarget = $(this).attr("filtertarget")  /* supports multiple comma-separated filter targets on gallery element */
                filterTarget = filterTarget.split(",");
                
                if ( filterVar == "nofilter" )  { $(this).delay( 50 * i ).fadeIn(200) } /* if "All Projects" is clicked it displays all items */
                else if ( jQuery.inArray(filterVar, filterTarget) == -1) {} /* if none of the filtertargets match the filterval item is ignored */
                else { itemsToShow.push($(this)) }                          /* otherwise they get saved to the list to fadeIn smoothly after iteration is done */   
            })

            $(itemsToShow).each(function (index) { $(this).delay( 100 * index ).fadeIn(200) });
            }, 500);
            
            $('#footer').delay(1000).fadeIn(300);                        /* restore faded navigation elements when finished */
            $("#filters li").delay(1000).fadeTo(300, 1);
    
        }
        
    });        
    });
