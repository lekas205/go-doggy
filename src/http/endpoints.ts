export const randomDogImages = '/image/random';
export const breedlists = '/list/all';
export const byBreed = (breed: string) => `${breed}/images`;
export const byBreedCategory =  (breed: string, sub_breed: string) => `${breed}/${sub_breed}`