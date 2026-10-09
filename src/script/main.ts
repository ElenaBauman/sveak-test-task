import {renderCategories} from "./ui/renderCategories";
import {renderContent} from "./ui/renderContent";
import {initPetModal} from "./modal/initPetModal";

document.addEventListener('DOMContentLoaded', async () => {
    await renderCategories();
    await renderContent();
    initPetModal();
});
