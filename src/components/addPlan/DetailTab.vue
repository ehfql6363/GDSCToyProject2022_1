<template>
    <div id="sort">
        <div>
            <input v-model="title" placeholder="일정 제목을 정해주세요.">
        </div>
        <div style="width:200px; height:200px;">
            <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="200"
            img-height="200"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            >
                <!-- Text slides with image -->
                <b-carousel-slide 
                    v-for="(icon,index) in icons"
                    v-bind:key="index" :img-src="icon.src">
                </b-carousel-slide>
            </b-carousel>
        </div>
        <div>
            <input 
                type="textarea" 
                name="memo" 
                id="memo" 
                v-b-tooltip.hover title="기타 세부 사항이 있으신가요?"
                placeholder="메모장 입니다.">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            img: '',
            icons:[
                {name:'음식 아이콘', src:require('@/assets/img/food.png')},
                {name:'오락 아이콘', src:require('@/assets/img/game.jpg')},
                {name:'데이트 아이콘', src:require('@/assets/logo.png')},
                {name:'파티 아이콘', src:require('@/assets/logo.png')},
                {name:'공부 아이콘', src:require('@/assets/logo.png')}
            ],
            memo:'',
        }
    },
    methods:{
        selectIcon(){
            this.img = this.$refs['src']
        },
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        }
    },
}
</script>

<style>
#sort{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>