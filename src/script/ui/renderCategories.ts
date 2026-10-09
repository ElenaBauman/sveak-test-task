import { categories } from '../../data/categories';
import { renderContent } from './renderContent';
import { LOAD_DELAY, SKELETON_COUNT } from "../constants";
import { renderCategorySkeleton } from "./renderCategorySkeleton";

export const renderCategories = async () => {
    const list = document.querySelector('.navigation__list');

    if (!list) {
        return
    }

    list.innerHTML = Array.from({ length: SKELETON_COUNT }, renderCategorySkeleton).join('');

    await new Promise(resolve => setTimeout(resolve, LOAD_DELAY));

    list.innerHTML = categories.map((category) => `
        <li class="navigation__item" data-category="${category.id}">
            <div class="navigation__img-wrap">
                <img src="${category.image}" alt="${category.name}">
            </div>
            <p class="body-2 navigation__link">${category.name}</p>
        </li>
    `).join('');

    list.addEventListener('click', (event) => {
        const item = (event.target as HTMLElement).closest<HTMLElement>('[data-category]');

        if (!item) {
            return
        }

        const id = item.dataset.category;

        if (!id) {
            return
        }

        list.querySelectorAll('.navigation__item').forEach(el =>
            el.classList.remove('navigation__item_active')
        );

        item.classList.add('navigation__item_active');

        renderContent(id);
    });
};
