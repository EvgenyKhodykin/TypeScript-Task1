import { soundData } from '../assets'

class WeatherSound {
    audio: string
    icon: string
    image: string
    label: string
    isPlaying: boolean
    item: HTMLDivElement
    itemsContainer: HTMLDivElement
    iconImage: HTMLImageElement
    backgroundContainer: HTMLDivElement
    soundElement: HTMLAudioElement
    volumeControl: HTMLInputElement

    constructor(object: soundData) {
        this.audio = object.sound
        this.icon = object.icon
        this.image = object.image
        this.label = object.label
        this.isPlaying = false

        this.item = document.createElement('div') as HTMLDivElement
        this.item.className = 'soundItem'
        this.item.style.backgroundImage = `url(${this.image})`

        this.iconImage = document.createElement('img') as HTMLImageElement
        this.iconImage.className = 'iconImage'
        this.iconImage.dataset.type = this.label
        this.iconImage.src = this.icon

        this.soundElement = document.createElement('audio') as HTMLAudioElement
        this.soundElement.className = 'soundElement'
        this.soundElement.src = this.audio

        this.item.append(this.iconImage, this.soundElement)

        this.volumeControl = document.querySelector(
            '.volume-control'
        ) as HTMLInputElement

        this.itemsContainer = document.querySelector(
            '.itemsContainer'
        ) as HTMLDivElement
        this.backgroundContainer = document.querySelector(
            '.background'
        ) as HTMLDivElement
    }

    render(): void {
        this.itemsContainer.append(this.item)
        this.volumeControl.addEventListener('change', (event: any): void => {
            this.soundElement.volume = event.target.value / 100
        })
    }

    setBackground(flag: string): void {
        if (flag === this.label)
            this.backgroundContainer.style.backgroundImage = `url(${this.image})`
    }

    playSound(flag: string): void {
        if (flag === this.label && this.isPlaying === false) {
            this.soundElement.play()
            this.isPlaying = true
        } else if (this.isPlaying === true) {
            this.soundElement.pause()
            this.isPlaying = false
        }
    }
}

export default WeatherSound
