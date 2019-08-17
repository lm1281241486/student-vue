<template>
    <div class="student-list content" id="student-list">
        <app-search></app-search>
        <app-table></app-table>
        <turn-page></turn-page>
        <transition name="modal">
            <show-modal v-if="modalStatus"></show-modal>
        </transition>
       
    </div>
</template>

<style>
    /* v-enter, v-enter-to, v-leave, v-leave-to,  */
    /* v-enter-active, v-leave-active */
    .modal-enter {
        height: 0;
        top: -100%;
    }
    .modal-enter-to {
        height: 100%;
        top: 0;
    }
    .modal-leave {
        height: 100%;
        top: 0;
    }
    .modal-leave-to {
         height: 0;
         top: -100%;
    }
    .modal-enter-active, .modal-leave-active {
        transition: all .7s;
    }
</style>

<script>
import appSearch from '../components/stuList/appSearch.vue'
import appTable from '../components/stuList/appTable.vue'
import showModal from '../components/stuList/showModal.vue'
import turnPage from '../components/stuList/turnPage.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        appSearch,
        appTable,
        showModal,
        turnPage
    },
    created() {
        this.getStuList(1)
    },
    methods: {
        ...mapActions(['getStuList'])
    },
    computed: {
        ...mapState(['modalStatus'])
    }
}
</script>