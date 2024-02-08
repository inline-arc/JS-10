        //data fetcher
        const postPromise = fetch("https://www.reddit.com/r/Analog/.json?&limit=30&raw_json=1")
            .then(response => response.json())
            .then(data => {
                const posts = data.data.children.map(item => {
                    try {
                        if (item.data.preview && item.data.preview.images && item.data.preview.images.length > 0) { //verify array content
                            const parentImg = item.data.preview.images[0].source.url; 
                            return {
                                id: item.data.id,
                                small_img: parentImg,
                                permalink: item.data.permalink,
                            };
                        } else {
                            return null; 
                        }
                    } catch (error) {
                        console.log(error);
                        return null; 
                    }
                });
                return posts.filter(post => post !== null); // filter out unwanted null values
            })
            .catch(error => {
                console.error('Error fetching data:', error); //final boss error
            });

        // Display fetched images on grid
        postPromise.then(posts => {
            const postContainer = document.getElementById('post-container');
            if (postContainer) {
                posts.forEach(post => {
                    const img = document.createElement('img');
                    img.src = post.small_img;
                    postContainer.appendChild(img);
                });
            } else {
                console.error('Element with ID "post-container" not found');
            }
        });