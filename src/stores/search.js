import {defineStore} from 'pinia'
import axios from "axios";
import {slice} from "lodash";

let items = localStorage.getItem("items");
if (items != null) {
    items = JSON.parse(items);
} else {
    items = {};
}

export const itemsStore = defineStore({
    id: 'counter',
    state: () => ({
        items: items
    }),
    getters: {
        getItems: state => search => {
            let all_items = [];
            if (state.items[search] != undefined) {
                all_items = state.items[search];
            }

            let items = [];
            for (const item of slice(all_items, 0, 9)) {
                items.push({
                    list: item.title
                });
            }
            return items;
        }
    },
    actions: {
        async storeItems(search) {
            let query = encodeURI(search);

            let limit = 20;
            let res = await axios.get(`http://openlibrary.org/search.json?q=${query}&limit=${limit}`);

            let all_items = this.items;
            all_items[search] = res.data.docs;
            this.items = all_items;

            localStorage.setItem("items", JSON.stringify(this.items));
        }
    }
})

// itemsStore.$subscribe((mutation, state) => {
//     console.log(1212);
//     // persist the whole state to the local storage whenever it changes
//     console.log(state);
//     // localStorage.setItem('cart', JSON.stringify(state))
// })