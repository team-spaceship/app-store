export default class userService {
  isAuthenticated() {
    return fetch(`${process.env.REACT_APP_STORE_API}/authenticated`).then((response) => {
      return response.json();
    }).then((json) => { 
      console.log(json);
      return json;   
    }).catch((error) => {
      console.error(error);
    });
  }
}
