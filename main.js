document.getElementById('toggleLanguage').addEventListener('click', function() {
    var sections = document.querySelectorAll('.content-language');
    var button = this;

    sections.forEach(function(section) {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    // Verifica qual idioma está visível para alterar o texto do botão
    if (sections[0].style.display === 'block') {
        button.textContent = 'English';
    } else {
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
