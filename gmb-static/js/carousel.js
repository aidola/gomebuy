$(function() {
	$("#flexisel").flexisel({
        visibleItems: 4,
        itemsToScroll: 4,
        animationSpeed: 400,
        infinite: true,
        navigationTargetSelector: null,
        responsiveBreakpoints: {
            portrait: {
                changePoint:750,
                visibleItems: 2,
                itemsToScroll: 2
            },
            landscape: {
                changePoint:750,
                visibleItems: 2,
                itemsToScroll: 2
            },
            tablet: {
                changePoint:970,
                visibleItems: 4,
                itemsToScroll: 4
            }
        }
    });

})