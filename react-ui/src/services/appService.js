export default class AppService {
  
  getApps() {
    return fetch(`http://localhost:3000/v1/apps`).then(function (response) {
    return response.json();
  }).then((json) => {
    
    if(json.error === 404) {
      console.error("No apps were found.");
      return [];
    }
    
    console.log(json);
    return json;   
  });
}

}

