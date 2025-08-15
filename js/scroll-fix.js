// Scroll to section with offset for sticky header
function scrollToSectionWithOffset(id) {
    var header = document.querySelector('header');
    var section = document.getElementById(id);
    if (header && section) {
        var headerHeight = header.offsetHeight;
        var sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: sectionTop - headerHeight - 8, // 8px extra space
            behavior: 'smooth'
        });
    }
}

// Intercept nav clicks
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a[href^="#"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = link.getAttribute('href');
            if (href.startsWith('#')) {
                var id = href.substring(1);
                var section = document.getElementById(id);
                if (section) {
                    e.preventDefault();
                    scrollToSectionWithOffset(id);
                }
            }
        });
    });
});
