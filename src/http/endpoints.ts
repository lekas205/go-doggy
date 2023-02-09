const ROOT = '/breeds'
const BREED = '/breed'

export const randomDogImages = `${ROOT}/image/random`
export const breedlists = `${ROOT}/list/all`;
export const byBreed = (breed: string) => `${BREED}/${breed}/images`;
export const byBreedCategory =  (breed: string, sub_breed: string) => `${BREED}/${breed}/${sub_breed}/images`