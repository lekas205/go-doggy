import * as ENDPOINTS from '../http/endpoints';
import $http from '../http/axios';

export interface  ApiResponse {
    data: object;
    message: object;
}
export default class {
    static async fetchRandomDogImages(){
        try{
            let data = await $http.get(ENDPOINTS.randomDogImages+'/100')
            return data.data
        }catch(err){
            console.log(err); 
        }
    }

    static async fetchBreedList(){
        try{
            let data = await $http.get(ENDPOINTS.breedlists)
            return data.data
        }catch(err){
            console.log(err); 
        }
    }

    static async fetchBYBreed(breed: string){
        try{
            let data = await $http.get(ENDPOINTS.byBreed(breed))
            return data.data
        }catch(err){
            console.log(err); 
        }
    }

    static async fetchBYBreedCategory(breed: string, category:string){
        try{
            let data = await $http.get(ENDPOINTS.byBreedCategory(breed, category))
            return data.data
        }catch(err){
            console.log(err); 
        }
    }
}