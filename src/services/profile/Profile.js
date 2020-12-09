export async function GetProfile(token, id) {
    const response = await fetch(`https://kerbagungame.herokuapp.com/api/v1/user/${id}`, {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
        }
    });
    return await response.json();
}