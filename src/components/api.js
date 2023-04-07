export const apiconfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '2c63f497-70a5-4968-bb2d-b0ce27af4805',
    'Content-Type': 'application/json'
  },
  id: "51fb06311bd4f4f79497ac7b"
}

export function getUser(){
  return fetch(`${apiconfig.baseUrl}/users/me`, {
    headers: apiconfig.headers
  })
  .then(res => res.json())
  .then((result) => {
    return result;
  })
  .catch((error) => {
    console.error(error);
  });
}

export function updateProfile(name, about) {
  return fetch(`${apiconfig.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: apiconfig.headers,
    body: JSON.stringify({
      name,
      about
    })
  })
  .catch(error => {
    console.log('Error:', error);
  });
}

export function getCards(){
  {
    return fetch(`${apiconfig.baseUrl}/cards`, {
      headers: apiconfig.headers
    })
    .then(res => res.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

export function postCard(name, link) {
  return fetch(`${apiconfig.baseUrl}/cards`, {
    method: 'POST',
    headers: apiconfig.headers,
    body: JSON.stringify({
      name,
      link
    })
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

export function deleteCard(id){
  return fetch(`${apiconfig.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: apiconfig.headers,
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
