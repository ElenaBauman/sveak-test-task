import { pets } from "../../data/pets";

export const openPetModal = (petId: string) => {
    const dialog = document.querySelector<HTMLDialogElement>('#pet-modal');
    const pet = pets.find((p) => p.id === petId);

    if (!dialog || !pet) {
        return;
    }

    const { name, image, status, age, sex, description } = pet;

    const setText = (sel: string, text: string) => {
        dialog.querySelector<HTMLElement>(sel)!.textContent = text;
    };

    const img = dialog.querySelector<HTMLImageElement>('.pet-modal__img-wrap img')!;
    img.src = image;
    img.alt = name;
    setText('.pet-modal__title', name);

    const values = [status, age ?? 'Неизвестен', sex, description];
    dialog.querySelectorAll<HTMLElement>('.pet-modal__info span:last-child')
        .forEach((el, i) => { el.textContent = values[i]; });

    dialog.showModal();
};

