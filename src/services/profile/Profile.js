export async function GetProfile(token, id) {
    const response = await fetch(`https://kerbagungame.herokuapp.com/api/v1/user/${id}`, {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
        }
    });
    return await response.json();
}

export async function GetScoreSummary(token, id) {
    const response = await fetch(`https://kerbagungame.herokuapp.com/api/v1/user/${id}`, {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
        }
    });
    return await response.json();
}

export async function UpdateProfile(token, id, user) {
    const response = await fetch(`https://kerbagungame.herokuapp.com/api/v1/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify(user)
    });
    return await response.json();
}

export async function ChangePasswd(token, id, user) {
    const response = await fetch(`https://kerbagungame.herokuapp.com/api/v1/change_password/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify(user)
    });
    return await response.json();
}
