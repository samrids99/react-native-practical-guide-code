import axios from "axios";

const API_KEY = "AIzaSyBOOk5xN9iy2i3txOAn_20UZM3kCsGjpQQ";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
}
