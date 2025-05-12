
    const userListDiv = document.getElementById('userList');
    const albums = document.getElementById('albums');
    const photos = document.getElementById('photo');

    function loadData(url) { 
        return fetch(url)
            .then(response => response.json())
    }

    loadData('https://jsonplaceholder.typicode.com/users')
        .then(users => {
            users.forEach(user => {
                const button = document.createElement('button');
                button.textContent = user.username;
                button.addEventListener('click', () => displayalbums(user.id));
                userListDiv.appendChild(button);
            });
        })

    
    function displayalbums(userId) {
        loadData(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(albumsData => {
            photos.innerHTML ='';
            albums.innerHTML ='';
            albumsData.forEach(album => {
                const button = document.createElement('button');
                button.textContent = album.title;
                button.addEventListener('click', () => displayphotos(album.id));
                albums.appendChild(button);
            });
        })
    }

    function displayphotos (albumId) {
        loadData(`https://jsonplaceholder.typicode.com/photos`)
        .then(photoData => {
                    photos.innerHTML ='';
                    photoData.forEach(photo => {
                    if (photo.albumId == albumId) {
                        const img = document.createElement('img');
                        img.src = photo.thumbnailUrl;
                        img.alt = photo.title;
                        photos.appendChild(img);
                    }
                    
                })
                });
            }