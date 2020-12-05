export async function RegUser(user) {
    const response = await fetch('https://kerbagungame.herokuapp.com/api/v1/register', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(user)
    })
    return await response.json();
}