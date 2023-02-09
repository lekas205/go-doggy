export function useBreedName(url:string) {
let splitedUrl = url.split('/')
return splitedUrl[4]
}