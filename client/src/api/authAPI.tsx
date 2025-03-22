import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    // TODO: make a POST request to the login route
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Login failed');
  } catch (err) {
    console.log("Error from user login: ", err);
    return Promise.reject("Could not fetch user data.");
  }
};

export { login };

 