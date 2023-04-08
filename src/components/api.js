export const apiconfig = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  headers: {
    authorization: '2c63f497-70a5-4968-bb2d-b0ce27af4805',
    'Content-Type': 'application/json'
  },
  id: "51fb06311bd4f4f79497ac7b"
}

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log(`HTTP ошибка! статус: ${response.status}`);
  }
}

export function getUser() {
  return fetch(`${apiconfig.baseUrl}/users/me`, {
    headers: apiconfig.headers
  }).then(checkResponse)
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
  .then(checkResponse)
}
export function getCards() {
  {
    return fetch(`${apiconfig.baseUrl}/cards`, {
      headers: apiconfig.headers
    })
      .then(checkResponse)}
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
  .then(checkResponse)
}

export function deleteCard(id) {
  return fetch(`${apiconfig.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: apiconfig.headers,
  })
  .then(checkResponse)
}

export function toggleLike(cardId, isLiked) {
  const method = isLiked ? 'DELETE' : 'PUT';
  return fetch(`${apiconfig.baseUrl}/cards/likes/${cardId}`, {
    method,
    headers: apiconfig.headers
  })
  .then(checkResponse);
}


export function changeAvatar(newAvatarURL) {
  return fetch(`${apiconfig.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: apiconfig.headers,
    body: JSON.stringify({
      avatar: newAvatarURL,
    }),
  })
  .then(checkResponse);
}