import {SKELETON_COUNT} from "../constants";

export const renderCardSkeleton = (count = SKELETON_COUNT) => {
    return Array.from({ length: count }, () => `
        <div class="card skeleton"></div>
    `).join('');
};
