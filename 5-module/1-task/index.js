'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rows = Array.from(table.getElementsByTagName('tr'));

    rows.forEach((row, index) => {
        if (index === 0) return;

        if (row.children[3].dataset.available === 'true') {
            row.classList.add('available');
        } else if (row.children[3].dataset.available === 'false') {
            row.classList.add('unavailable');
        } else {
            row.setAttribute('hidden', '');
        }

        if (row.children[2].innerHTML === 'm') {
            row.classList.add('male');
        } else if (row.children[2].innerHTML === 'f') {
            row.classList.add('female');
        }

        if (row.children[1].innerHTML < 18) row.style['text-decoration'] = 'line-through';
        console.log(row);
    })
}