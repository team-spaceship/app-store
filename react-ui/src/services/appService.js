export default class AppService {
  getApps() {
    return fetch(`${process.env.REACT_APP_STORE_API}/apps`).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error === 404) {
        throw new Error("No apps were found.");
      }
    
      console.log(json);
      return json;   
    }).catch((error) => {
      this.errorToJson(error);
    });
  }

  getAppById(id) {
    return fetch(`${process.env.REACT_APP_STORE_API}/apps/` + id).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error === 404) {
        throw new Error("No apps were found.");
      }
    
      console.log(json);
      return json;   
    }).catch((error) => {
      this.errorToJson(error);
    });
  }

  installApp(id) {
    return fetch(`${process.env.REACT_APP_STORE_API}/apps/install/${id}`).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error === 404) {
        throw new Error("Could not find app to install.");
      }

      console.log(json);
      return json;
    }).catch((error) => {
      this.errorToJson(error);
    });
  }

  errorToJson(error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
