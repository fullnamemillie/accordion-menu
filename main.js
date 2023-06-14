const titles = document.querySelectorAll('.accordion__title');

titles.forEach((title) => {
    title.addEventListener('click', () => {
        title.nextElementSibling.classList.toggle('hidden');
    });
});