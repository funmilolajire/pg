import { options } from "./options"
import { displayStrength } from "./strength"

const sliderInput = document.getElementById('slider-input') as HTMLInputElement
const sliderTrack = document.getElementById('slider-track')
const characterLengthDisplay = document.querySelector('[data-character-length]')
const onSliderDrag = () => {
     if (sliderTrack) {
    sliderTrack.style.width = `${((Number(sliderInput.value)/Number(sliderInput.max))*sliderInput.clientWidth) - 1}px`
    }
    if (characterLengthDisplay) {
        characterLengthDisplay.textContent = sliderInput.value
        options.length = Number(sliderInput.value)
    }
}
sliderInput?.addEventListener('change', onSliderDrag)
sliderInput?.addEventListener('mousemove', onSliderDrag)
