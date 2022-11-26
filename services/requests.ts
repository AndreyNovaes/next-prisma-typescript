import { formProps } from './types/inputProps';

const prodURL = 'https://andrey-novaes.me/api/';

// const baseURLPROD = 'http://localhost:3000/api';

const baseURL = prodURL;

export async function sendMail({ name, email, message }: formProps ) {
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
    const response = await fetch(`${baseURL}/socials`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'force-cache'
    })    
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
    const response = await fetch(`${baseURL}/projects`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'force-cache'
      });
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
    const response = await fetch(`${baseURL}/routes`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'force-cache'
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw new Error(
      'There was an error fetching the routes'
    )
  }
}
