<template>
  <div>
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
        <table>
          <div v-if="show" ref="planWrapper" class="planWrapper">
          <div v-for="(idx) in items" :key="idx">
            <tr>
              <td v-for="(index) in 3" :key="index">
                <b-card
                title="일정 제목"
                img-src='./date.png'
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                  <b-card-text>일정 내용?</b-card-text>
                  <b-button href="#" variant="primary">자세히 보기</b-button>
                </b-card>
              </td>
            </tr>
          </div>
        </div>
        </table>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'HelloWorld',
  components:{
    InfiniteLoading
  },
  data(){
    return{
      keyword: '',
      show: false,
      items:[]
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
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        for (let i = this.items.length + 1; i <= this.items.length + 20; i++) {
          temp.push(i);
        }
        this.items = this.items.concat(temp);
        $state.loaded();
      }, 1000);
    },
  },
  mounted() {
    this.show = true;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
