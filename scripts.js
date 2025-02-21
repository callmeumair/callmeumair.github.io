// Example: Add event listener to links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link-list a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Link clicked:', link.href);
        });
    });
});
