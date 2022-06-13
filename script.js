const videoElement = document.getElementById("video")
const start = document.getElementById("start")

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        console.log(error)
    }
}
selectMediaStream()

start.addEventListener('click', async () => {
    start.disabled = true
    await videoElement.requestPictureInPicture()
    start.disabled = false
})