<template>
    <div class="accordion" role="tablist" id="sort">
        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info">위치 선택</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                {{text}}
            </b-card-body>
        </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="info">날짜 선택</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <div class="section text-center">
                    <h2 class="h2" style = "object-fit: cover;">일정 정하기</h2>
                    <div class="flex flex-col items-center mb-6" style = "object-fit: cover;">
                        <v-date-picker
                            trim-weeks 
                            v-model="date"
                            locale="ko"
                            mode="dateTime"
                            :timezone="timezone"
                            style="width:100%;height:100%;"
                        />
                    </div>
                    
                </div>
            </b-card-body>
        </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info">일정 세부사항</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <div id="sort" style = "width:100%">
                    <div>
                        <input v-model="title" placeholder="일정 제목을 정해주세요.">
                    </div>
                    <div 
                    style="width:200px; height:200px;"
                    @click="onSelectIcon">
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
                                v-bind:key="index" 
                                :img-src="icon.src">
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
                    {{icons[slide].name}}
                </div>
            </b-card-body>
        </b-collapse>
        </b-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '지도지도',
                title: '',
                img: '',
                icons:[
                    {name:'음식 아이콘', src:require('@/assets/img/food.png')},
                    {name:'게임 아이콘', src:require('@/assets/img/game.jpg')},
                    {name:'데이트 아이콘', src:require('@/assets/logo.png')},
                    {name:'파티 아이콘', src:require('@/assets/logo.png')},
                    {name:'공부 아이콘', src:require('@/assets/logo.png')}
                ],
                memo:'',
                date:"",
                timezone: '',
                slide: 0,
                sliding: null
            }
        },
        methods:{
            onSelectIcon(){
                console.log(this.slide);
                this.img = this.icons[this.slide].src;
                console.log(this.img);
            },
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            }
        },
    };
</script>

<style>
#sort{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.vc-weeks{
    height: 500px;
    font-size: 30px !important;
}
span.vc-day-content.vc-focusable {
    font-size: 20px;
}
div.vc-time-picker.vc-bordered{
    justify-content: center;
}
div.vc-date{
    justify-content: center;
}
.mb-1{
    width: 60vw !important;
}
</style>