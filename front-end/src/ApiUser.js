export const postcomplain = async (userid, token, product) => {
  return await fetch(`http://localhost:8000/api/${userid}/complain/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const read = (userid, token) => {
  return fetch(`http://localhost:8000/api/user/${userid}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const update = (userId, token, user) => {
  return fetch(`http://localhost:8000/api/user/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const updateuser = (user, next) => {
  if (typeof window != "undefined") {
    if (localStorage.getItem("jwt")) {
      let auth = localStorage.getItem("jwt");
      auth.user = user;
      localStorage.setItem("jwt", JSON.stringify(auth));
      next();
    }
  }
};
