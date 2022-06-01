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
    });
    
    const result = await request;

    if (!result.ok) {
      console.error('Ошибка!');
      
      return;
    }

    const json = await result.json();
    const status = json.status;
    
    console.log(status);
  }
}

const eventSource = new EventSource('http://localhost:7070/sse');

eventSource.addEventListener('open', (e) => {
  console.log(e);
  
  console.log('sse open');
});

eventSource.addEventListener('error', (e) => {
  console.log(e);
  
  console.log('sse error');
});

const subscriptions = document.querySelector('.subscriptions');

eventSource.addEventListener('message', (e) => {
  console.log(e);
  const { name, phone } = JSON.parse(e.data);
  
  subscriptions.appendChild(document.createTextNode(`${name} ${phone}\n`));
  
  console.log('sse message');
});

window.api = new SubscriptionApi('http://localhost:7070/');

