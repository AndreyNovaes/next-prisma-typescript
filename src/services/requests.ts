import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function getSocials() {
  try {
    const response = await axios.get('/api/socials');
    return response.data;
  }
  catch (error) {
    console.error(error);
  }
}

export async function getProjects() {
  try {
    const response = await axios.get('/api/projects');
    return response.data;
  }
  catch (error) {
    console.error(error);
  }
}

export async function getRoutes() {
  try {
    const response = await axios.get('/api/routes');
    return response.data;
  }
  catch (error) {
    console.error(error);
  }
}
