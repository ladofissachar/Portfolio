document.querySelectorAll('.aboutImage').forEach(function(icon) {
    icon.addEventListener('mouseover', function() {
        icon.style.opacity = '.1';
        icon.style.transition = '0.5s ease-in-out';
    });

    icon.addEventListener('mouseout', function() {
        icon.style.opacity = '1';
        icon.style.transition = '0.5s ease-in-out';
    });
});

document.querySelectorAll('.skillIcon').forEach(function(icon) {
    icon.addEventListener('mouseover', function() {
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 0.5s ease-in-out';
    });

    icon.addEventListener('mouseout', function() {
        icon.style.transform = 'rotate(0deg)';
        icon.style.transition = 'transform 0.5s ease-in-out';
    });
});