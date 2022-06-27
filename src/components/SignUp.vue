<template>
	<div class="container">
		<form @submit.prevent="submitForm">
			<div>
				<label for="email">이름 : </label>
				<input type="text" id="email" v-model="email" />
			</div>
			<div>
				<label for="name">아이디 : </label>
				<input type="text" id="name" v-model="name" />
			</div>
			<div>
				<label for="password">비밀번호 : </label>
				<input type="password" id="password" v-model="password" />
			</div>
			<div>
				<label for="passwordConfirm">비밀번호 확인 : </label>
				<input type="password" id="passwordConfirm" v-model="passwordConfirm" />
			</div>
			<div>
				<button type="submit">회원가입</button>
				<button type = "button" @click="goBack" >취소</button>
			</div>
			
		</form>
	</div>
</template>

<script>
export default {
	name: 'SignupForm',
	data() {
		return {
			email: '',
			name: '',
			password: '',
			passwordConfirm: '',
		};
	},
	methods: {
		submitForm() {
			var check = (this.email != null) && (this.name != null) && (this.password == this.passwordConfirm)
			if(check){
				alert("환영합니다." + this.name + "님!")
				console.log("Sign up Success")
				this.initForm()
			}else{
				alert("비밀번호를 확인해주세요")
				this.initPassword()
			}
			console.log(check)
			
		},
		goBack(){
			this.$router.go(-1)
			this.initForm()
		},
		initForm(){
			this.email='';
			this.name='';
			this.password='';
			this.passwordConfirm='';
		},
		initPassword(){
			this.password='';
			this.passwordConfirm='';
		}
	},
};
</script>