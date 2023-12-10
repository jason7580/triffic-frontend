import axios from 'axios';
const postBaseUrl = 'http://localhost:3000/api';

export function listTrips(searchText = '', reverse = false) {
    let url = `${postBaseUrl}/posts`;
    let query = [];
    if (searchText) query.push(`searchText=${searchText}`);
    if (reverse) query.push(`reverse=${reverse}`);
    if (query.length) url += '?' + query.join('&');
  
    console.log(`Making GET request to: ${url}`);
  
    return axios.get(url).then(function (res) {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);
  
      return res.data;
    });
  }
  

export function createTrip(name, note = " ") {
    let url = `${postBaseUrl}/posts`;
  
    console.log(`Making POST request to: ${url}`);
  
    return axios
      .post(url, {
        name,
        note,
      })
      .then(function (res) {
        if (res.status !== 200)
          throw new Error(`Unexpected response code: ${res.status}`);
  
        return res.data;
      });
  }
  
export function deleteTrip(id) {
    let url = `${postBaseUrl}/posts/${id}`;
  
    console.log(`Making DELETE request to: ${url}`);
  
    return axios.post(url).then(function (res) {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);
  
      return res.data;
    });
  }
  
    
export function updateTrip(id, name, note=" ") {
    let url = `${postBaseUrl}/posts/${id}/`;
  
    console.log(`Making PUT request to: ${url}`);
  
    return axios.put(url, {
      name,
      note,
    })
    .then(function (res) {
      if (res.status !== 200)
        throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
    });
  }
  