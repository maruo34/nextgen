import Renderer from "@core/renderer"

Main.prototype.init = function (settings) {
  this.width = settings.width
  this.height = settings.height
  this.fps = settings.fps

  this.resize({ height: this.height, width: this.width })

  window.addEventListener("resize", event => {
    const width = event.target.innerWidth
    const height = event.target.innerHeight

    this.resize({ width, height })
  })
}

Main.prototype.resize = function ({ width, height }) {
  this.canvas.width = width
  this.canvas.height = height
}

Main.prototype.prepare = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(this), 2000)
  })
}

Main.prototype.run = function () {
  const interval = 1000 / this.fps

  let delta = 0
  let lastTime = new Date().getTime()
  let currentTime = 0

  const mainLoop = () => {
    requestAnimationFrame(mainLoop)

    currentTime = new Date().getTime()
    delta = currentTime - lastTime

    if (delta > interval) {
      lastTime = currentTime - (delta % interval)

      this.renderer.render()
    }
  }

  mainLoop()
}

export default function Main(settings) {
  this.canvas = document.getElementById("canvas")
  this.renderer = new Renderer(this.canvas)

  this.init(settings)

  return this.prepare()
}
