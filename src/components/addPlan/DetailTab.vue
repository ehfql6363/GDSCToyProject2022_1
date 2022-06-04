<template>
    <div id="sort">
        <div>
            <input v-model="tittle" placeholder="일정 제목을 정해주세요.">
        </div>
        <!-- <form class="icon">
            <div v-for="(icon,index) in icons" v-bind:key="index">
                <img :src="icon.src" v-on:click="selectIcon" alt="logo.png"/>
            </div>
        </form> -->
        <div>
            <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            >
                <!-- Text slides with image -->
                <b-carousel-slide :img-src="icon.src"></b-carousel-slide>

                <!-- Slides with custom text -->
                <!-- <b-carousel-slide img-src="@/assets/img/gmae.png">
                </b-carousel-slide> -->

                <!-- Slides with image only -->
                <b-carousel-slide img-src="@assets/logo.png"></b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <!-- <b-carousel-slide>
                    <template #img>
                    <img
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="480"
                        src="https://picsum.photos/1024/480/?image=55"
                        alt="image slot"
                    >
                    </template>
                </b-carousel-slide> -->

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                    </p>
                </b-carousel-slide> -->
            </b-carousel>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            tittle: '',
            img: '',
            icons:[
                {name:'음식 아이콘', src:require('@/assets/img/food.png')},
                {name:'오락 아이콘', src:require('@/assets/img/game.jpg')},
                {name:'데이트 아이콘', src:require('@/assets/logo.png')},
                {name:'파티 아이콘', src:require('@/assets/logo.png')},
                {name:'공부 아이콘', src:require('@/assets/logo.png')}
            ],
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
    }
}
</script>

<style>
#sort{
    width: 100vw;
    /* display: flex; */
    justify-content: center;
}
</style>