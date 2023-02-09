import { byBreed } from './../http/endpoints';
import { State } from './index';
import { InjectionKey } from 'vue'
import { createStore, Store } from "vuex"
import { DogService } from "../services/index";

// define typings for the store state
export interface State {
    dogImages: any[] | null
    breedList: any[] | null
    contentLoading: boolean
    searchedBreed: string,
    breedSubCategories: string[]
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        dogImages: null,
        breedList: null,
        searchedBreed: '',
        contentLoading: false,
        breedSubCategories: []
    },
    mutations: {
        SAVE_DOG_IMAGES(state, images) {
            state.dogImages = images
        },

        SET_LOADING_STATUS(state, status) {
            state.contentLoading = status
        },

        SAVE_BREED_LIST(state, list) {
            state.breedList = list
        },

        SAVE_SEARCHED_BREED(state, breed) {
            state.searchedBreed = breed
        },

        SAVE_BREED_CATEGORIS(state, categories) {
            state.breedSubCategories = categories
        },

        RESET_SEARCH_CONTENT(state,) {
            state.searchedBreed = ''
            state.breedSubCategories = []
        }
    },
    actions: {
        async fetchDogImages({ commit }) {
            let { data } = await DogService.fetchRandomDogImages()
            commit('SAVE_DOG_IMAGES', data.message)
            return data
        },

        async fetchBreedList({ commit }) {
            let { data } = await DogService.fetchBreedList()
            commit('SAVE_BREED_LIST', data.message)
            return data
        },

        async fetchByBreed({ commit }, breed) {
            let { data } = await DogService.fetchBYBreed(breed)
            commit('SAVE_DOG_IMAGES', data.message)
            return data
        },

        async fetchByBreedSubCategories({ commit }, {breed, category}) {
            let { data } = await DogService.fetchBYBreedCategory(breed, category)
            commit('SAVE_DOG_IMAGES', data.message)
            return data
        },


        toggleLoadingStatus({ commit }, status) {
            commit('SET_LOADING_STATUS', status)
        }
    }
}) 