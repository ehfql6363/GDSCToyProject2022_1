<template>
    <div id="sort">
        <div>
            <input v-model="tittle" placeholder="일정 제목을 정해주세요.">
        </div>
        <form id="icon">
            <div v-for="(index,icon) in icons" v-bind:key="index">
                <img :src="icon.src" v-on:click="selectIcon" alt="logo.png"/>
            <!-- <img src="" alt=""/> -->
            </div>
        </form>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            tittle: '',
            img: '',
            icons:[
                {name:'음식 아이콘', src:require('@/assets/logo.png')},
                {name:'오락 아이콘', src:'@/assets/logo.png'},
                {name:'데이트 아이콘', src:'@/assets/logo.png'},
                {name:'파티 아이콘', src:'@/assets/logo.png'},
                {name:'공부 아이콘', src:'@/assets/logo.png'}
            ],
        }
    },
    methods:{
        selectIcon(){
            this.img = this.$refs['src']
        }
    }
}
</script>

<style>
#sort{
    width: 100vw;
    /* display: flex; */
    justify-content: center;
}
.from{

}
</style>