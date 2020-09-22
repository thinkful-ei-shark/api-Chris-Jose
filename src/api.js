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
    
    return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
    let newItem = JSON.stringify({name: name});
    return fetch(`${BASE_URL}/items`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: newItem
    });
}

export default {
    getItems,
    createItem,
    updateItem
};