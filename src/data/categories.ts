import {pets} from "./pets";
import { Type, CategoryT, Status} from "../domain/entities";

export const categories: CategoryT[] = [
    {
        id: 'all',
        name: 'Все',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXtOdtptg27bh3wuUJCN7ew5o3CDylec7TnWfbjfNMeIKs757SDPvlcJo&s=10',
        pets,
    },
    {
        id: 'cats',
        name: 'Коты (ищут дом)',
        image: 'https://icdn.lenta.ru/images/2026/01/12/14/20260112141509464/square_1280_daac6263dfcbb8ca0b99087cca689671.jpg',
        pets: pets.filter((pet) => pet.type === Type.Cat && pet.status === Status.NeedOwner)
    },
    {
        id: 'dogs',
        name: 'Собаки (ищут дом)',
        image: 'https://storage.yandexcloud.net/yac-wh-sb-prod-s3-media-03005/uploads/article/1598/abce4a3bc3a9f343180cc20b81fbbeb4.webp',
        pets: pets.filter((pet) => pet.type === Type.Dog && pet.status === Status.NeedOwner)
    },
    {
        id: 'foster',
        name: 'Нужна передержка',
        image: 'https://yac-wh-sb-prod-s3-media-07001.storage.yandexcloud.net/media/images/small-red-kitten-scottish-fold.max-2880x1820.format-jpeg_O0zIZ6x.jpg',
        pets: pets.filter((pet) => pet.status === Status.NeedFoster)
    },
    {
        id: 'hasOwner',
        name: 'Нашли дом',
        image: 'https://cdn.insales-shop.ru/r/9Q9EcuUxlzc/rs:fit:620:0:1/q:100/plain/images/products/1/5687/1017550391/image00111.jpeg@jpeg',
        pets: pets.filter((pet) => pet.status === Status.HasOwner)
    },
];
