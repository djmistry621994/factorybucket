<template>
    <div class="p-5 text-center bg-light">
        <MDBListGroup light>
            <MDBListGroupItem tag="button" noBorder spacing action v-for="(item,index) in items" :key="index" :value="item">
                {{ item.list }}
            </MDBListGroupItem>
        </MDBListGroup>
    </div>
</template>

<script>
import {MDBListGroup, MDBListGroupItem} from 'mdb-vue-ui-kit';
import {itemsStore} from "@/stores/search";

export default {
    name: "SearchIndex",
    components: {MDBListGroup, MDBListGroupItem},
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            const {storeItems, getItems} = itemsStore()

            let main_query = this.$route.params.query;

            let items = getItems(main_query);
            if (items.length == 0) {
                await storeItems(main_query);
                items = getItems(main_query);
            }

            this.$data.items = items;
        }
    }
}
</script>

<style scoped>

</style>