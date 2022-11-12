const baseURL = "http://localhost:3000/api";

export async function getSocials() {
  try {
    const response = await fetch(`${baseURL}/socials`, {cache: "force-cache"})    
    return response.json()
  }
  catch (error) {
    console.error(error)
    throw new Error(
      "There was an error fetching the socials"
    )
  }
}

export async function getProjects() {
  try {
    const response = await fetch(`${baseURL}/projects`, {cache: "force-cache"});
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw new Error(
      "There was an error fetching the projects"
    )
  }
}

export async function getRoutes() {
  try {
    const response = await fetch(`${baseURL}/routes`, {cache: "force-cache"});
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw new Error(
      "There was an error fetching the routes"
    )
  }
}
