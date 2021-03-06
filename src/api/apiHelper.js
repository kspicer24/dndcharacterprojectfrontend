
const CHARACTER_ENDPOINT = process.env.REACT_APP_BASE_URL + "/ddcharacters";
const LOGIN_ENDPOINT = CHARACTER_ENDPOINT + "/login";
const REGISTER_ENDPOINT = CHARACTER_ENDPOINT + "/register";
const USER_ENDPOINT = CHARACTER_ENDPOINT + "/users";
const CAMPAIGN_ENDPOINT = CHARACTER_ENDPOINT + "/campaign";
const SPELL_ENDPOINT = CHARACTER_ENDPOINT + "/spells"
const CHARACTER_SPELLS_ENDPOINT = CHARACTER_ENDPOINT + "/spellsForCharacter"

export async function getSpellByClassId(id) {
    const result = await fetch(SPELL_ENDPOINT + `/${id}`);
    return result.json();
}

export async function getSpellsForCharacter(characterId) {
    const result = await fetch(CHARACTER_SPELLS_ENDPOINT + `/${characterId}`);
    return result.json();
}

export async function addSpellToCharacter(character_id, spell_id) {
    const requestBody = {character_id, spell_id};
    const result = await fetch(CHARACTER_SPELLS_ENDPOINT, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
}

export async function removeSpellFromCharacter(character_id, spell_id) {
    const requestBody = {character_id, spell_id};
    const result = await fetch(CHARACTER_SPELLS_ENDPOINT, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify(requestBody)
    });
}


export async function getAllCampaigns() {
    const result = await fetch(CAMPAIGN_ENDPOINT);
    return result.json();
}

export async function createCampaign(name) {
    const requestBody = {name};
    const result = await fetch(CAMPAIGN_ENDPOINT, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
}


export async function getAllUsers() {
    console.log("Called", USER_ENDPOINT);
    const result = await fetch(USER_ENDPOINT);
    return (await result.json()).data;

}

export async function registerUser(username, password, role) {
    const requestBody = {username, password, role};
    console.log("Called", REGISTER_ENDPOINT);
    const result = await fetch(REGISTER_ENDPOINT, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
}

export async function loginUser(username, password) {
    const requestBody = {username, password};
    console.log("Logging", requestBody);
    console.log("Called", LOGIN_ENDPOINT);
    const result = await fetch(LOGIN_ENDPOINT, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
    return result.json();
}


export async function createCharacter(char_name, class_id, race_id, campaign_id, owner_id) {

    const requestBody = {char_name, class_id, race_id, campaign_id, owner_id};
    console.log(requestBody);
    const result = await fetch( CHARACTER_ENDPOINT, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
    console.log(result);

}

export async function updateCharacter(id, char_name, campaign_id) {
    const requestBody = {char_name, campaign_id};
    console.log(requestBody)
    const result = await fetch( CHARACTER_ENDPOINT + `/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(requestBody)
    });
    console.log(result);

}

/* Delete character */
export async function deleteCharacter(id) {
    const result = await fetch(CHARACTER_ENDPOINT + `/${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
    });
}

/* Update character */


export async function getCharacter() {
    console.log("Called", CHARACTER_ENDPOINT);
    const result = await fetch(CHARACTER_ENDPOINT);
    return (await result.json()).data;
}

export async function getCharacterForUser(uid){
    console.log("Called", CHARACTER_ENDPOINT + `/${uid}`);
    const result = await fetch(CHARACTER_ENDPOINT + `/${uid}`);
    return (await result.json());
}

export async function getAllRaces() {
    console.log("Called", CHARACTER_ENDPOINT + "/races");
    const result = await fetch(CHARACTER_ENDPOINT + "/races");
    return (await result.json());
}

export async function getAllSpells() {
    console.log("Called", CHARACTER_ENDPOINT + "/spells");
    const result = await fetch(CHARACTER_ENDPOINT + "/spells");
    return (await result.json());
}

export async function getAllClasses() {
    console.log("Called", CHARACTER_ENDPOINT + "/classes");
    const result = await fetch(CHARACTER_ENDPOINT + "/classes");
    return (await result.json());
}

export async function createPost(userId, body, tags) {
    const requestBody = {userId, body, tags};
    console.log("Called", CHARACTER_ENDPOINT + "/posts");
    const result = await fetch(CHARACTER_ENDPOINT + "/posts",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(requestBody)
        });
}

export async function deletePost(postId){
    console.log("Called", CHARACTER_ENDPOINT + "/posts/" + postId);
    const result = await fetch(CHARACTER_ENDPOINT + "/posts/" + postId,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
}

export async function likePost(postId, userId){
    const requestBody = {postId, userId};
    console.log("Called", CHARACTER_ENDPOINT + "/posts");
    const result = await fetch(CHARACTER_ENDPOINT + "/posts",
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(requestBody)
        });
}

export async function unlikePost(postId, userId){
    const requestBody = {postId, userId};
    console.log("Called", CHARACTER_ENDPOINT + "/posts/unlike");
    const result = await fetch(CHARACTER_ENDPOINT + "/posts/unlike",
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(requestBody)
        });
}

export async function getAllPosts(activeUser){
    const uid = activeUser === "" ? -1 : activeUser;
    console.log("Called", CHARACTER_ENDPOINT + "/posts/" + uid);
    const result = await fetch(CHARACTER_ENDPOINT + "/posts/" + uid);
    return (await result.json());
}

export async function getUserPosts(id, activeUser){
    const uid = activeUser === "" ? -1 : activeUser;
    console.log("Called", CHARACTER_ENDPOINT + "/posts/" + id + "/" + uid);
    const result = await fetch(CHARACTER_ENDPOINT + "/posts/" + id + "/" + uid);
    return (await result.json());
}

export async function getReplies(postId){
    console.log("Called", CHARACTER_ENDPOINT + "/replies/" + postId);
    const result = await fetch(CHARACTER_ENDPOINT + "/replies/" + postId);
    return (await result.json());
}

export async function postReply(postId, userId, body){
    console.log("Called", CHARACTER_ENDPOINT + "/replies");
    const requestBody = {postId, userId, body};
    const result = await fetch(CHARACTER_ENDPOINT + "/replies",
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(requestBody)
        })
}

export async function getUser(id){
    console.log("Called", CHARACTER_ENDPOINT + `/profile/${id}`);
    const result = await fetch(CHARACTER_ENDPOINT + `/profile/${id}`);
    return (await result.json());
}

export async function updateUser(name, bio, avatar, dob, hometown, id){
    console.log("Called", CHARACTER_ENDPOINT + `/profile/${id}`);
    const requestBody = {name, bio, avatar, dob, hometown};
    const result = await fetch(CHARACTER_ENDPOINT + `/profile/${id}`,
        {
            headers:{
                'Accept': 'application/json',
                    'Content-Type': 'application/json'
            },
            method: 'PUT',
                body: JSON.stringify(requestBody)
        });
}

// const requestBody= {name, classId, raceId};
// fetch(url, {method: POST, body: JSON.stringify(requestBody)})
