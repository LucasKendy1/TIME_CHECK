var relogioContainer = document.getElementById("idrelogio")

const getHours = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hour = hours < 10 ? `0${hours}` : hours
  const minute = minutes < 10 ? `0${minutes}` : minutes
  const second = seconds < 10 ? `0${seconds}` : seconds
  relogioContainer.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
  getHours()
}, 1000)

class ClickAndHold{
  /**
   * 
   * @param {EventTarget} target 
   * @param {Function} callback 
   */
  constructor(target,callback){
    this.target = target
    this.callback = callback
    this.isHeld = false
    this.activeHoldTimeoutId = null
    ["mousedown","touchstart"].forEach(type => {
      this.target.addEventListener(type, this._onHoldStart.bind(this))
    });
    ["mouseup","mouseleave","mouseout","touchend","touchcancel"].forEach(type => {
      this.target.addEventListener(type, this._onHoldEnd.bind(this))
    });
  }
  _onHoldStart(){
    this.isHeld = true

    this.activeHoldTimeoutId = setTimeout(()=>{
      if(this.isHeld){
        this.callback()
      }
    },1000)
  }
  _onHoldEnd(){
    this.isHeld = false

    clearTimeout(this.activeHoldTimeoutId)
  }
}

const mybutton = document.getElementById('botaoConfirmar')

new ClickAndHold(mybutton, ()=>{
  window.alert('registrado!')
})


