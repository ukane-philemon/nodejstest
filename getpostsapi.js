
const request =require("request")
const fs =require("fs")


request.get('https://jsonplaceholder.typicode.com/posts')
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.headers['content-type']) 
  })
  .pipe(fs.createWriteStream('result/posts.txt'))

