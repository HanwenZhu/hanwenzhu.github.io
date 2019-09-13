function center(element) {
    element.css('position', 'absolute');
    element.css('top', Math.max(0, (($(window).height() - $(element).outerHeight()) / 2) +
                                                $(window).scrollTop()) + 'px');
    element.css('left', Math.max(0, (($(window).width() - $(element).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + 'px');
    return element;
}

$(document).ready(() => {
    setInterval(() => {
        center($('div'));
        var random = Math.random();
        if (random > 0.9) {
            $('div').hide();
            setTimeout(() => $('div').show(), random * 100);
        }
    }, 100);
})
