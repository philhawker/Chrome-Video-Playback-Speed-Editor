
if (document.querySelector('video')) {
    addVideoControls()
} else {
    console.log('there is no video')
}

function addVideoControls() {


    const videoTag = document.querySelector('video')

    document.addEventListener('keydown', (event) => {
        console.log(event.key)
        checkLetter(event.key)
    })


    function checkLetter(usersKey) {
        if (usersKey === 'd') {
            console.log('the d key was pressed')
            videoTag.playbackRate += .10
        } else if (usersKey === 's') {
            console.log('the s key was pressed')
            videoTag.playbackRate -= .10
        } else if (usersKey === 'r') {
            console.log('the r key was pressed')
            videoTag.playbackRate = 1
        }
    }
    // createButtons(videoTag)
}


function createButtons(videoTag) {
    const videoConatiner = document.querySelector('.video-container')

    let myPersonalVideoControls = document.createElement('div')
    myPersonalVideoControls.classList.add('my-personal-video-controls')

    let speedDownButton = document.createElement('button')
    let speedDownTextNode = document.createTextNode('speed-down')
    speedDownButton.appendChild(speedDownTextNode)
    speedDownButton.classList.add('my-speed-control')
    speedDownButton.id = 'speed-down'
    myPersonalVideoControls.appendChild(speedDownButton)

    let speedUpButton = document.createElement('button');
    let speedUpTextNode = document.createTextNode('speed-up');
    speedUpButton.appendChild(speedUpTextNode);
    speedUpButton.classList.add('my-speed-control');
    speedUpButton.id = 'speed-up';
    myPersonalVideoControls.appendChild(speedUpButton)

    videoConatiner.appendChild(myPersonalVideoControls)

    myPersonalVideoControls.style.position = 'fixed'
    myPersonalVideoControls.style.top = '70px'
    myPersonalVideoControls.style.left = '10px'

    let cssTemplate = `
        padding: 10px;
        margin: 10px;
        color: white;
        background-color: #00cb79;
        border: 2px solid #45b0e5;
        border-radius: 4px;
        font-weight: 900;
        cursor: pointer;
    `
    let buttons = document.querySelectorAll('.my-speed-control')
    buttons.forEach(button => {
        button.style = cssTemplate
        button.addEventListener('click', (event) => {
            if (event.target.id == 'speed-up') {
                console.log('speed up')
                videoTag.playbackRate += .10
            } else if (event.target.id == 'speed-down') {
                console.log('speed down')
                videoTag.playbackRate -= .10
            }
        })
    })
}




