export async function getClients() {
    
    const answer = await fetch(import.meta.env.VITE_API_URL);
    const results = await answer.json();

    return results;
}

export async function getClient(id) {
    
    const answer = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const results = await answer.json();

    return results;
}

export async function  addClient(data) {
    try {
        const answer = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
    return await answer.json()
    } catch (error) {
        console.log(error)
    }
}