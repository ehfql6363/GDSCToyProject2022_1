<template>
	<div class="container">
		<form @submit.prevent="submitForm">
			<div>
				<input type="text" id="email" v-model="email" placeholder="아이디"/>
			</div>
			<div>
				<input type="password" id="password" v-model="password" placeholder="비밀번호"/>
			</div>
			<div>
				<button type="submit">회원가입</button>  
				<button type = "button" @click="goBack">취소</button>
			</div>
			
		</form>
	</div>
</template>

<script>
import { registerUser } from '@/api/index';

export default {
	name: 'SignupForm',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		async submitForm() {
			const userData = {
				email: this.email,
				password: this.password,
			};
			const { data } = await registerUser(userData);
			console.log(data);

			var check = (this.email != null) && (this.password != null);
			
			if(check){
				alert("환영합니다." + this.name + "님!");
				console.log("Sign up Success");
				this.initForm();
				this.$router.push('/');
			}else{
				alert("비밀번호를 확인해주세요");
				this.initPassword();
			}
			console.log(check);
			
		},
		goBack(){
			this.$router.go(-1);
			this.initForm();
		},
		initForm(){
			this.email='';
			this.password='';
		},
		initPassword(){
			this.password='';
		}
	},
};
</script>