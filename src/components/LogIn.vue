<template>
  <div>
    <div>로그인 화면</div>
    <form @submit.prevent="submitForm" class="login">
      <div>
				<input type="text" id="id" v-model="id" placeholder="아이디"/>
			</div>
			<div>
				<input type="password" id="password" v-model="password" placeholder="비밀번호"/>
			</div>
      <div>
        <router-link to="/signup">회원 가입</router-link>  |  
        <router-link to="#">아이디/비밀번호 찾기</router-link>
      </div>
      <div>
        <button 
          :disabled="!id || !password"
          type="submit"
          >
          로그인
        </button>
      </div>
    </form>
  </div>
  
</template>

<script>
import { loginUser } from '@/api/index'

export default {
  name: 'LoginForm',
  data() {
    return{
      id: '',
      password: ''
    };
  },
  methods: {
    async submitForm(){
      try{
        const userData = {
          id: this.id,
          password: this.password
        };
        const {data} =  await loginUser(userData);
        console.log(data);

        this.$store.commit('setId', data.user.id);
        // this.$router.push('/');
      } catch(e){
        console.log(e.response.data);
      } finally{
        //페이지 초기화
        this.initForm();
      }
    },
    initForm(){
      this.id = '';
      this.password='';
    }
  },

}
</script>

<style>

</style>