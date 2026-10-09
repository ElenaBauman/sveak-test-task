import { categories } from '../../data/categories';
import { renderCardSkeleton } from "./renderCardSkeleton";
import {LOAD_DELAY} from "../constants";

export const renderContent = async (categoryId?: string) => {
    const category = categories.find(c => c.id === categoryId) ?? categories[0];
    const content = document.querySelector<HTMLElement>('.content');

    if (!content) {
        return
    }

    content.innerHTML = renderCardSkeleton();

    await new Promise(resolve => setTimeout(resolve, LOAD_DELAY));

    if (!category.pets.length) {
        content.innerHTML = '<p class="body-2">В этой категории пока нет питомцев</p>';

        return;
    }

    content.innerHTML = category.pets.map(pet => `
        <div class="card" data-id="${pet.id}">
            <div class="card__img-wrap">
                <img src="${pet.image}" alt="${pet.name}">
            </div>
            <p class="body-1 card__info">
                <span class="body-4">${pet.name}. ${pet.age ? `Возраст: ${pet.age}` : ''}</span>
                ${pet.description}
            </p>
        </div>
    `).join('');
};
