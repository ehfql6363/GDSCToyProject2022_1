<!-- src/components/SignupForm.vue -->
<template>
  <!-- @submit = v-on:submit -->
  <!-- prevent: 새로고침 방지 -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <!-- v-model: data 속성과 연결 -->
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">회원 가입</button>
    <!-- 결과 메시지 출력 -->
    <p>{{ logMessage }}</p>
  </form>
</template>
 
<script>
import { registerUser } from '@/api/index';
 
export default {
  data() {
    return {
      // form
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      // API 요청시 전달할 userData 객체
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      
      this.logMessage = `${data.username} 님이 가입되었습니다.`;
      
      // 가입 후 폼 초기화
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>