import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8654be52a12feb478f04bddb27338686ec54d18b40f061d7e0ce3adddd862e3c'
    }
})