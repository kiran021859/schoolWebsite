window.onload = getVideos()

function getVideos(){
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwl0sJy51sdCjY0mX8KpluA&maxResults=10&order=date&key=AIzaSyAuAVYO38-UdQPgOk5DJRTVnGzj9Em4dZ8`)
    .then((result) => {
        return result.json(); 
    }).then((data) => {
        console.log(data)
        let videos = data.items
        let videoContainer = document.querySelector(".youtube-container")
        for (video of videos){
            videoContainer.innerHTML += `
                <div id="youtube">
                <h3>${video.snippet.title}</h3>
                <a href="https://www.youtube.com/embed/${video.id.videoId}"><image src="${video.snippet.thumbnails.medium.url}"></a>
                </div>
            `
        } 
    })
};


//https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwl0sJy51sdCjY0mX8KpluA&maxResults=10&order=date&key=AIzaSyAuAVYO38-UdQPgOk5DJRTVnGzj9Em4dZ8