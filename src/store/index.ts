import { InjectionKey } from 'vue'
import { createStore, Store } from "vuex"
import { DogService } from "../services/index";

// define typings for the store state
export interface State {
    dogImages: any[] | null
    contentLoading: boolean
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        dogImages: null,
        contentLoading: false
    },
    mutations: {
        SAVE_DOG_IMAGES(state, images) {
            state.dogImages = images
        },

        SET_LOADING_STATUS(state, status){
            state.contentLoading = status 
        }
    },
    actions: {
        async fetchDogImages({ commit }) {
            let { data } = await DogService.fetchRandomDogImages()
            commit('SAVE_DOG_IMAGES', data.message)
            return data
        },

        toggleLoadingStatus({commit}, status){
            commit('SET_LOADING_STATUS', status)
        }
    }
}) 