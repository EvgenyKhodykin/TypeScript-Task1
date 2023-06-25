import './style.css'
import soundData from './assets'
import WeatherSound from './modules/weatherSound'

const app = document.querySelector('#app') as HTMLAnchorElement

const itemsContainer = document.createElement('div') as HTMLDivElement
itemsContainer.className = 'itemsContainer'

const backgroundContainer = document.createElement('div') as HTMLDivElement
backgroundContainer.className = 'background'

const header = document.createElement('h1') as HTMLHeadingElement
header.innerText = 'Weather Sounds'

const volumeControl = document.createElement('input') as HTMLInputElement
volumeControl.className = 'volume-control'
volumeControl.type = 'range'
volumeControl.min = '0'
volumeControl.max = '100'
volumeControl.value = '50'

app.append(backgroundContainer, header, itemsContainer, volumeControl)

soundData.forEach(item => {
    const soundItem = new WeatherSound(item)
    soundItem.render()
    itemsContainer.addEventListener('click', (event: Event): void => {
        const clickedItem = (event.target as HTMLImageElement).dataset.type
        if (clickedItem) {
            soundItem.setBackground(clickedItem)
            soundItem.playSound(clickedItem)
        }
    })
})
