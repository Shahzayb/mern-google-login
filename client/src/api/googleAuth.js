import axios from 'axios';

const login = async code => {
  const result = await axios.post('http://localhost:5000/api/auth/google', {
    code
  });
  return result.data;
};

export { login };
