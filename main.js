const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$('.tab-item');
const tabPanes = $$('.tab-pane');
const tabActive = $('.tab-item.active');
const line = $('.line');

lineActive(tabActive);

tabItems.forEach((tab, index) => {
    const tabPane = tabPanes[index];

    tab.onclick = () => {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        tab.classList.add('active');
        tabPane.classList.add('active');

        lineActive(tab);
    }
});

function lineActive(tab) {
    line.style.left = tab.offsetLeft + 'px';
    line.style.width = tab.offsetWidth + 'px';
}