'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {

    let list = document.createElement('ul');

    for (const friend of friends) {
        const {firstName, lastName} = friend;

        let item = document.createElement('li');
        item.innerHTML = `${firstName} ${lastName}`;

        list.appendChild(item);
    }
    return list;
}
