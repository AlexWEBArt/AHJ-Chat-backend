// TODO: write code here

(async () => {
  const request = fetch('http://localhost:7070/index');

  const result = await request;

  sonst text = await result.text();
})();

