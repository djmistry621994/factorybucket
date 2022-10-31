<template>
    <header>
        <MDBNavbar expand="lg" light bg="white" container>
            <MDBNavbarToggler target="#navbarExample01"></MDBNavbarToggler>
            <MDBNavbarNav collapse="navbarExample01" class="mb-2 mb-lg-0">
                <MDBNavbarItem to="/" active>
                    Home
                </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBNavbar>
    </header>
</template>

<script>
import {MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem} from 'mdb-vue-ui-kit';

export default {
    name: "HeaderIndex",
    components: {
        MDBNavbar,
        MDBNavbarToggler,
        MDBNavbarNav,
        MDBNavbarItem
    },
}
</script>

<style scoped>

</style>