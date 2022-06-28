<template>
  <div>
    <nav></nav>
    <div>
      <b-form-input 
        type="text"
        placeholder="찾고 있는 일정이 있나요?"
        v-model = "keyword"
        @keyup.enter="searchPlan(keyword)"
      >
      </b-form-input>
      <b-button type="submit" @click="searchPlan(keyword)">
        <b-icon icon="search"></b-icon>
      </b-button>
    </div>
    <div>
      <div>
        <plan-observer v-on:triggerFadeIn="fadeIn">
          <transition v-on:enter="enter">
            <div v-if="show" ref="planWrapper" class="planWrapper">
              <div v-for="(item, index) in items" :key="index">
                {{item}}
                <b-card
                title="일정 제목"
                img-src='@/assets/img/food.png'
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                  <b-card-text>일정 내용?</b-card-text>
                  <b-button href="#" variant="primary">자세히 보기</b-button>
                </b-card>
              </div>
            </div>
          </transition>
        </plan-observer>
      </div>
    </div>
  </div>
</template>

<script>
import TriggerObserver from './TriggerObserver.vue'

export default {
  name: 'HelloWorld',
  components:{
    PlanObserver: TriggerObserver
  },
  data(){
    return{
      keyword: '',
      show: false,
      items:[
        1,2,3,4,5,6,7,8,9,10
      ]
    }
  },
  methods: {
    searchPlan(keyword) {
      if (keyword !== ''){ //검색어를 입력한 경우
        // this.$router.push({
        //   name: "SearchPage",
        //   params: {
        //     keyword: this.keyword,
        //     isResultShow: true,
        //   },
        // });
        this.keyword = ''
        console.log('"',keyword,'"' + ' 검색')
      } else {
        alert('검색어를 입력해주세요!')  //검색어를 입력하지 않은 경우
      }
    },
    enter: function(el){
      el.style.opacity = 0;
    },
    fadeIn: function(){
      this.$refs.planWrapper.style = "transition: opacity 1s";
    }
  },
  mounted() {
    this.show = true;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
