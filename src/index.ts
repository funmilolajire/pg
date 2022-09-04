import {customAlphabet} from 'nanoid'
import './ts/slider';
import "./ts/config";
import { options } from './ts/options';
import { displayStrength} from './ts/strength';

const generatePassword = () => {
    const recipeItems:{[key:string]:string} = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()'
    }
    const passwordInput = document.getElementById('password-input') as HTMLInputElement
    const recipe = options.config.map(item => recipeItems[item]).join('')
    if(recipe.length>0){
    const nanoid = customAlphabet(recipe, options.length)
    const password = nanoid()
    passwordInput.value = password
    displayStrength()
    }
}

const generatePasswordButton = document.getElementById('generate-password')
generatePasswordButton?.addEventListener('click', generatePassword)

const copyFigure = document.getElementById('copy-text')
const copyText = () => {
    const passwordInput = document.getElementById('password-input') as HTMLInputElement
    const password = passwordInput.value
    const copiedText = document.getElementById('copy-caption')
    if (password.length > 0) {
        if(!copiedText){
            const newCopiedText = document.createElement('figcaption')
            newCopiedText.id= 'copy-caption'
            newCopiedText.textContent = 'copied'
            copyFigure?.appendChild(newCopiedText)
        }
    navigator.clipboard.writeText(password)
    }
}

copyFigure?.addEventListener('click', copyText)