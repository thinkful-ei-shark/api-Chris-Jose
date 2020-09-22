<<<<<<< HEAD
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jose';

function getItems() {
    //return Promise.resolve('A successful response!');
=======
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Chris';



function updateItem(updateData, id) {
    return fetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json.stringify'
        },
        body: JSON.stringify(updateData)
    });
}




function getItems() {
    
>>>>>>> 8e39f40a9d6ea7208ee9234174ad9f8bd5804ee3
    return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
<<<<<<< HEAD
    let newItem = JSON.stringify({ name: name });
    return fetch(`${BASE_URL}/items`, { method: 'POST', headers: {'Content-Type' : 'application/json'}, body: newItem});
}

function updateItem(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, { method: 'PATCH', headers: {'Content-Type' : 'application/json'}, body: JSON.stringify(updateData)});
=======
    let newItem = JSON.stringify({name: name});
    return fetch(`${BASE_URL}/items`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: newItem
    });
>>>>>>> 8e39f40a9d6ea7208ee9234174ad9f8bd5804ee3
}

export default {
    getItems,
    createItem,
    updateItem
};