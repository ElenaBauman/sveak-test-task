export enum Status {
    NeedOwner = "Ищет дом",
    NeedFoster = "Нужна передержка",
    HasOwner = "Нашел дом",
}

export enum Sex {
    Male = 'Мальчик',
    Female = 'Девочка',
}

export enum Type {
    Cat,
    Dog,
}

export type PetT = {
    id: string;
    type: Type;
    name: string;
    age?: string;
    image: string;
    description: string;
    status: Status,
    sex: Sex,
}

export type CategoryT = {
    id: string;
    name: string;
    image: string;
    pets: PetT[];
}
