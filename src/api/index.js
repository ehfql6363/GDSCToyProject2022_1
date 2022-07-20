import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8081/',
});

function registerUser(userData) {
	console.log(userData);
	return instance.post('join', userData);
}
function loginUser(userData) {
	return instance.post('login', userData);
}

export { loginUser };
export { registerUser };