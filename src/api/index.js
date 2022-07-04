import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8080/',
});

function registerUser(userData) {
	return instance.post('signup', userData);
}
function loginUser(userData) {
	return instance.post('login', userData);
}

export { loginUser };
export { registerUser };