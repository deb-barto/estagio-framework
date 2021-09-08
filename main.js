function exibePostagens () {
    let xhr = new XMLHttpRequest
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
    xhr.onload = () => {
      const posts = JSON.parse(xhr.responseText)
  
      for (let i = 0; i < posts.length; i++) {
        let title = posts[i]['title']
        let content = posts[i]['body']
        let userId = posts[i]['userId']
        let id = posts[i]['id']
  
        let addPosts = document.getElementById('addPosts')
  
        addPosts.innerHTML += 
        `
          <tr>
            <td>${id}</td>
            <td>${userId}</td>
            <td>${title}</td>
            <td>${content}</td>
          <tr>
        `
      }
    }
    xhr.send();
  }
  exibePostagens()