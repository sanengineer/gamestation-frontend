export async function SignIn(user) {
    const response = await fetch('https://kerbagungame.herokuapp.com/api/v1/login', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(user)
    })
    return await response.json();
}