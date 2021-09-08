function Postagens () {
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
  Postagens()


  function albuns() {
    let xhr = new XMLHttpRequest
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums')
    xhr.onload = () => {
      const posts = JSON.parse(xhr.responseText)
  
      for (let i = 0; i < posts.length; i++) {
        let title = posts[i]['title']
        let userId = posts[i]['userId']
        let id = posts[i]['id']
  
        let addPosts = document.getElementById('addAlbum')
  
        addPosts.innerHTML += 
        `
          <tr>
            <td>${id}</td>
            <td>${userId}</td>
            <td>${title}</td>
          <tr>
        `
      }
    }
    xhr.send();
  }
  albuns()

  function todo(){
    let xhr = new XMLHttpRequest
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos')
    xhr.onload = () => {
      const posts = JSON.parse(xhr.responseText)
  
      for (let i = 0; i < posts.length; i++) {
        let title = posts[i]['title']
        let userId = posts[i]['userId']
        let id = posts[i]['id']
        let completed = posts[i]['completed']
  
        let addPosts = document.getElementById('addtodo')
  
        addPosts.innerHTML += 
        `
          <tr>
            <td>${id}</td>
            <td>${userId}</td>
            <td>${title}</td>
            <td>${completed}</td>
          <tr>
        `
      }
    }
    xhr.send();
  }
  todo()