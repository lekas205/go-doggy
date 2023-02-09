import * as ENDPOINTS from '../http/endpoints';
import $http from '../http/axios';

export default class {
    static async fetchRandomDogImages(){
        try{
            let data = $http.get(ENDPOINTS.randomDogImages+'/100')
            return data
        }catch(err){
            console.log(err); 
        }
    }

    static async fetchBreedList(){
        try{
            let data = $http.get(ENDPOINTS.breedlists)
            return data
        }catch(err){
            console.log(err); 
        }
    }

    static async fetchBYBreed(breed: string){
        try{
            let data = $http.get(ENDPOINTS.byBreed(breed))
            return data
        }catch(err){
            console.log(err); 
        }
    }

    static async fetchBYBreedCategory(breed: string, category:string){
        try{
            let data = $http.get(ENDPOINTS.byBreedCategory(breed, category))
            return data
        }catch(err){
            console.log(err); 
        }
    }
}