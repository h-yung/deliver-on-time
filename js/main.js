/*
VISIBLE/INTERACTION
*/

// buttons
const setTime = document.querySelector('#setTime')
const go = document.querySelector('#go')
const stopIt = document.querySelector('#stopIt')

// info
const targetTime = document.querySelector('#targetTime')
const announce = document.querySelector('#announce')

// image outcomes
const viewStart = document.querySelector('#start')
const viewGoing = document.querySelector('#enroute')
const viewFail = document.querySelector('#failed')
const viewWin = document.querySelector('#success')


setTime.addEventListener('click', setTarget)

go.addEventListener('click', goDeliver)

stopIt.addEventListener('click', stopItAll)

/* 

ACTUAL FUNCTIONALITY
*/

let target = 0;

function setTarget(){
    sw.reset()
    target = Math.round(Math.random()*10)
    if (target === 0){
        setTarget()
    }
    targetTime.innerText = `${target} seconds`
    go.removeAttribute('disabled')
    setTime.setAttribute('disabled', true)
    viewStart.classList.remove('hidden')
    viewGoing.classList.add('hidden')
    viewFail.classList.add('hidden')
    viewWin.classList.add('hidden')
    announce.innerText = ""
}

function goDeliver(){
    viewStart.classList.toggle('hidden')
    viewGoing.classList.toggle('hidden')
    sw.start()
    stopIt.removeAttribute('disabled')
    go.setAttribute('disabled', true)
}

function stopItAll(){
    viewGoing.classList.toggle('hidden')
    // CONDITIONAL VIEW OF FAIL /SUCCESS
    setTime.removeAttribute('disabled')
    stopIt.setAttribute('disabled', true)
    sw.stop()
}


function Stopwatch(){
    this.duration;
    this.startTime = 0;
    this.reset = function(){
        this.duration = 0;
        console.log(`Duration is reset to ${this.duration}. Ready for new start.`)
    }
    this.endTime;
    this.start = function(){
        if (this.startTime != 0/*start was called immediately before; how do you make it aware of immediate prior calls in call history? */){
            throw new Error('Stopwatch has already started')
        } else if (this.duration != 0){
            alert('Please first reset the stopwatch')
        } else {
            this.startTime =  new Date()
            announce.innerText = 'On our way!'
            // how do you make it increment by second?
        }
    }
    this.stop = function(){
        if (this.startTime === 0/*start() was !called OR stop() was called immediately before*/){
            throw new Error('Stopwatch wasn\'t started anyway.')
        } else {
            this.endTime = new Date()
            this.duration = (this.endTime - this.startTime)/1000
            this.startTime = 0; /*this could go into reset method, but actually would throw erroneous error...unless I specify*/
            // alert('Stopped!')

            if (Math.abs(this.duration-target) > 0.5){
                announce.innerText = `Delivery took ${this.duration} seconds. Sorry, you failed.`
                viewFail.classList.toggle('hidden')
            } else {
                announce.innerText = `Success! Delivery took ${this.duration} seconds. Good customer service.`
                viewWin.classList.toggle('hidden')
            }
            
        }
    }

    
}


const sw = new Stopwatch()
