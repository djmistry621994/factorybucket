<template>
    <div class="p-5 text-center bg-light">
        <MDBRow tag="form" class="g-3 needs-validation" novalidate @submit.prevent="checkForm">
            <MDBCol md="4">
                <MDBInput label="Book Title" v-model="title" ref="title" id="book-title" invalidFeedback="Please provide book title" validationEvent="input" required/>
            </MDBCol>
            <MDBCol col="4">
                <MDBBtn color="primary" type="submit">Submit</MDBBtn>
            </MDBCol>
        </MDBRow>
    </div>
</template>

<script>
import {MDBInput, MDBRow, MDBCol, MDBBtn} from 'mdb-vue-ui-kit';

export default {
    name: "HomeIndex",
    components: {MDBInput, MDBRow, MDBCol, MDBBtn},
    data() {
        return {
            title: ''
        }
    },
    methods: {
        checkForm(e) {
            e.target.classList.add("was-validated");
            let title = this.$data.title;
            if (title != '') {
                title = encodeURI(title);
                this.$router.push(`/search/${title}`)
            }
        }
    }
}
</script>

<style scoped>

</style>