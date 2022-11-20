import { form } from '@/components/Main-Content/Contact';

const baseURL = 'http://localhost:3000/api';

export async function sendMail({ name, email, message }: form) {
  const response = await fetch(`${baseURL}/mail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });
  return response.json();
}

export async function getSocials() {
  try {
    const response = await fetch(`${baseURL}/socials`, {cache: 'force-cache'})    
    return response.json()
  }
  catch (error) {
    console.error(error)
    throw new Error(
      'There was an error fetching the socials'
    )
  }
}

export async function getProjects() {
  try {
    const response = await fetch(`${baseURL}/projects`, {cache: 'force-cache'});
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw new Error(
      'There was an error fetching the projects'
    )
  }
}

export async function getRoutes() {
  try {
    const response = await fetch(`${baseURL}/routes`, {cache: 'force-cache'});
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw new Error(
      'There was an error fetching the routes'
    )
  }
}
