import { formProps } from './types/web/inputProps';

const prodURL = 'https://andrey-novaes.me/api';
const devURL = 'http://localhost:3000/api';
const baseURL = prodURL || devURL;

export async function sendMail({ name, email, message }: formProps) {
  const response = await fetch(`${baseURL}/mail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });
  return response.json();
}

// All other data fetching functions (getSocials, getProjects, getRoutes)
// have been replaced with direct imports from staticData.ts