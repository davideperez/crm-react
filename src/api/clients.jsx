export async function getClients() {
    
    const answer = await fetch(import.meta.env.VITE_API_URL);
    const results = await answer.json();

    return results;
}