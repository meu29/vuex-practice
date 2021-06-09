import { createStore } from "vuex";

const store = createStore({
    state(): string[] {
        return [];
    },
    mutations: {
        add(state: string[], itemId: string) {
            if (state.indexOf(itemId) === -1) {
                state.push(itemId);
            }
        },
        /* filterだと動かなかった */
        delete(state: string[], itemId: string) {
            state.forEach((id: string, index: number) => {
                if (itemId === id) {
                    state.splice(index, 1);
                }
            });
        }
    }
});

export default store;
