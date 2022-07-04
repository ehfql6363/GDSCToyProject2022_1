<template>
  <div>
    <div>로그인 화면</div>
    <form @submit.prevent="submitForm">
      <div>
				<input type="text" id="id" v-model="id" placeholder="아이디"/>
			</div>
			<div>
				<input type="password" id="password" v-model="password" placeholder="비밀번호"/>
			</div>
      <div>
        <router-link to="/signUp">회원 가입</router-link>  |  
        <router-link to="#">아이디/비밀번호 찾기</router-link>
      </div>
      <div>
        <button type="submit">로그인</button>
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
      const userData = {
        id: this.id,
        password: this.password
      };
      
    }
  },

}
</script>

<style>

</style>