import { openPetModal } from "./openPetModal";

export const initPetModal = () => {
    const dialog = document.querySelector<HTMLDialogElement>('#pet-modal');

    if (!dialog) {
        return;
    }

    document.querySelector<HTMLElement>('.content')?.addEventListener('click', (e) => {
        const card = (e.target as HTMLElement).closest<HTMLElement>('.card[data-id]');

        if (card?.dataset.id) {
            openPetModal(card.dataset.id);
        }
    });

    dialog.querySelector<HTMLElement>('.pet-modal__close')?.addEventListener('click', () => {
        dialog.close();
    });

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });
};
