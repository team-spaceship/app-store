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


  deleteApp(id) {
    return fetch(`http://localhost:3000/v1/admin/app/${id}/delete`, {
      credentials: 'include',
      mode: 'cors',
      method: 'DELETE',
    }).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error === 404) {
        throw new Error("Deletion failed.");
      }

      console.log(json);
      return json;
    }).catch((error) => {
      this.errorToJson(error);
    });
  }

  getAppById(id) {
    return fetch(`${process.env.REACT_APP_STORE_API}/apps/` + id, {
      credentials: 'include',
      mode: 'cors',
    }).then((response) => {
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

  getInstalledApps(id) {
    return fetch(`${process.env.REACT_APP_STORE_API}/installed-apps`, {
      credentials: 'include',
      mode: 'cors',
    }).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error === 404) {
        throw new Error("No installed apps were found.");
      }

      console.log(json);
      return json;
    }).catch((error) => {
      this.errorToJson(error);
    });
  }

  submitApp(appDetails) {
    return fetch(`${process.env.REACT_APP_STORE_API}/upload/`, {
      credentials: 'include',
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(appDetails),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),

    }).then((response) => {
      return response.json();
    }).then((json) => {
      if (json.error === 404) {
        throw new Error("App upload failed");
      }

      console.log(json);
      return json;
    }).catch((error) => {
      this.errorToJson(error);
    });
  }

  installApp(id) {
    return fetch(`${process.env.REACT_APP_STORE_API}/apps/install/${id}`, {
      credentials: 'include',
      mode: 'cors',
    }).then((response) => {
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
