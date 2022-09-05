import { ConfigItem, options, PasswordStrength } from './options';

export const passwordStrength = (length: number, config: ConfigItem[]):PasswordStrength => {
    if (length >= 12 && config.includes('lowercase')&&config.includes('uppercase')&&config.includes('numbers')&&config.includes('symbols')) {
        return 'strong'
    }
    if (length >= 8 &&
        (config.includes('lowercase') && config.includes('uppercase') && (config.includes('numbers') || config.includes('symbols'))) ||
        ((config.includes('lowercase') || config.includes('uppercase')) && config.includes('numbers') && config.includes('symbols'))
        ) {
        return 'medium'
    }
    if (length >= 4 &&
        (config.includes('lowercase') && (config.includes('numbers') || config.includes('symbols'))) ||
        (config.includes('uppercase') && (config.includes('numbers') || config.includes('symbols'))))
    {
        return 'weak'
    }
    return 'too-weak'
}

export const displayStrength = () => {
    options.strength = passwordStrength(options.length, options.config)
    const strengthText = document.getElementById('strength-text')
    const strengthBoxes = document.getElementById('strength-boxes')?.getElementsByTagName('li')
    if (strengthText) {
        strengthText.textContent = options.strength==='too-weak'? 'too weak!':options.strength as string
    }
    if (strengthBoxes && strengthBoxes.length > 0) {
        const highlightBoxes: { [key: string]: number[] } = {
            'too-weak': [0],
            weak: [0, 1],
            medium: [0, 1, 2],
            strong: [0, 1, 2, 3]
        };
        [...strengthBoxes].forEach((box, index) => {
            strengthBoxes.item(index)!.classList.value=''
        })
        highlightBoxes[options.strength as string].forEach((box, index) => {
            strengthBoxes.item(box)?.classList.add(options.strength as string)
        })
    }
}