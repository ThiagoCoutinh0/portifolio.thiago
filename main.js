document.getElementById('toggleLanguage').addEventListener('click', function() {
    var ptContent = document.getElementById('content-pt');
    var enContent = document.getElementById('content-en');
    var button = this;

    if (ptContent.style.display === 'none') {
        ptContent.style.display = 'block';
        enContent.style.display = 'none';
        button.textContent = 'English';
    } else {
        ptContent.style.display = 'none';
        enContent.style.display = 'block';
        button.textContent = 'Português';
    }
});

window.addEventListener('load', function() {
    document.querySelectorAll('.section-show').forEach(function(section) {
        section.classList.remove('section-show');
    });
    document.querySelector('#header').classList.add('section-show');
    window.scrollTo(0, 0);
});
