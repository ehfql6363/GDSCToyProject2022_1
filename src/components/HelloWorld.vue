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
        <b-card
          title="일정 제목"
          img-src='@/assets/img/food.png'
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            일정 내용?
          </b-card-text>

          <b-button href="#" variant="primary">자세히 보기</b-button>
        </b-card>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      keyword: '',

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
