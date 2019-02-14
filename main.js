function test() {
  fetch('/test?arg1=abc').then(res => {
    return res.json()
  }).then(json => {
    document.querySelector('#a').innerHTML= json.test;
  })
}