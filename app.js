// TODO: write code here

class SubsctiptionApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  
  async add(user) {
    const request = fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });
    
    const result = await request;
    
    if (!result.ok) {
      console.error('Ошибка');
      
      return;
    }

    const json = await result.json();
    const status = json.status;
    
    console.log(status);
  }
  
  async remove(user) {
    const query = '/?phone=' + user.phone;

    const request = fetch(this.apiUrl + query, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });
    
    const result = await request;
    const json = await result.json();
    
    const status = json.status;
    
    console.log(status);
  }
}

window.api = new SubscriptionApi('http://localhost:7070/');

