export async function RegUser(user) {
    const response = await fetch('http://localhost:8000/api/v2/register', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(user)
    })
    return await response.json();
}