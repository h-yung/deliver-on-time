/* 
make a constructor function Stopwatch()
property: duration
- initial duration is 0
- stopwatch counts seconds between first call of start and next call of stop
- duration is updated as above and can be called

methods: reset, start, stop
- reset sets duration value to 0
- cannot call start 2x in a row
- cannot call stop 2x in a row (nor prob before start is called at least 1x)

and methods it inherits from base Object

*/


function Stopwatch(){
    this.duration;
    this.startTime = 0;
    this.reset = function(){
        this.duration = 0;
        // misuse of the this?
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
            alert('Started!')
            // how do you make it increment by second?
        }
    }
    this.stop = function(){
        if (this.startTime === 0/*start() was !called OR stop() was called immediately before*/){
            throw new Error('Stopwatch wasn\'t started anyway.')
        } else {
            this.endTime = new Date()
            this.duration = this.endTime - this.startTime
            this.startTime = 0; /*this could go into reset method, but actually would throw erroneous error...unless I specify*/
            alert('Stopped!')
            alert(`${this.duration/1000} seconds. Reset to continue.`)
            
        }
    }

    
}


const sw = new Stopwatch()
