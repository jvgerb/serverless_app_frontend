import { Auth, Cache } from 'aws-amplify';

const API_URL = process.env.VUE_APP_API_URL;

export default class {
  protected async getToken() {
    const federatedInfo = Cache.getItem('federatedInfo');

    if (federatedInfo) {
      return federatedInfo.token;
    } else {
      const session = (await Auth.currentSession()) as any;
      return session.idToken.jwtToken;
    }
  }

  protected async apiFetch(url: string, options: any = null) {
    options = {
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await this.getToken()}`,
      },
      cache: 'default',
      ...options,
    };
    const response = await fetch(`${API_URL}${url}`, options);

    return await response.json();
  }

  protected async get(url: string) {
    return await this.apiFetch(url, { method: 'GET' });
  }

  protected async post(url: string, body: any) {
    return await this.apiFetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  protected async put(url: string, body: any) {
    return await this.apiFetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  protected async delete(url: string, body: any) {
    return await this.apiFetch(url, {
      method: 'DELETE',
      body: JSON.stringify(body),
    });
  }
}
