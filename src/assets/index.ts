import rainySound from './sounds/rain.mp3'
import summerSound from './sounds/summer.mp3'
import winterSound from './sounds/winter.mp3'

import rainyIcon from './icons/cloud-rain.svg'
import snowIcon from './icons/cloud-snow.svg'
import sunIcon from './icons/sun.svg'

import rainyBackground from './images/rainy-bg.jpg'
import summerBackground from './images/summer-bg.jpg'
import winterBackground from './images/winter-bg.jpg'

export interface soundData {
    label: string
    image: string
    sound: string
    icon: string
}

const soundData: soundData[] = [
    {
        label: 'summer',
        image: summerBackground,
        sound: summerSound,
        icon: sunIcon
    },
    {
        label: 'rainy',
        image: rainyBackground,
        sound: rainySound,
        icon: rainyIcon
    },
    {
        label: 'winter',
        image: winterBackground,
        sound: winterSound,
        icon: snowIcon
    }
]

export default soundData
