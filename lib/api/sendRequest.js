import fetch from 'isomorphic-unfetch';

const PORT = process.env.PORT || 8080;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${PORT}`;

export default async function sendRequest(api_base_path,options = {}) {

    const headers = Object.assign({}, options.headers || {},{
        'Content-type':'application/json; charset=UTF-8',
    });

    const response = await fetch(
        `${ROOT_URL}${api_base_path}`,
        Object.assign({ method: 'POST', credentials: 'same-origin'}, options, { headers }),
    );

    const data = await response.json();

    if(data.error) {
        
        throw new Error(data.error);
    }

    return data;
}