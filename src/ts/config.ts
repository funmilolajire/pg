import { ConfigItem, options } from "./options"

const configObjects: {itemName:ConfigItem, checkboxDataName:string, spanText:string}[] = [
    {
        itemName: 'uppercase',
        checkboxDataName: 'include-uppercase',
        spanText: 'Include Uppercase Letters'
    }, {
        itemName: 'lowercase',
        checkboxDataName: 'include-lowercase',
        spanText: 'Include Lowercase Letters'
    }, {
        itemName: 'numbers',
        checkboxDataName: 'include-numbers',
        spanText: 'Include Numbers'
    }, {
        itemName: 'symbols',
        checkboxDataName: 'include-symbols',
        spanText: 'Include Symbols'
    }
]

const selectConfigItem = (listItem: HTMLLIElement, itemName:ConfigItem) => {
    const checkbox = listItem.getElementsByTagName('div')[0]
    const checkIcon =checkbox.getElementsByTagName('img')[0]
    if (checkbox.classList.contains('checked')) {
        {
        options.config = options.config.filter(item=>item!==itemName)
        checkbox.classList.remove('checked')
        checkIcon&&checkbox.removeChild(checkIcon)
    }}
    else if (!checkbox.classList.contains('checked')) {
        options.config.push(itemName)
        checkbox.classList.add('checked')
        const newCheckIcon = document.createElement('img')
        newCheckIcon.src = new URL('../assets/images/icon-check.svg', import.meta.url)+'';
        newCheckIcon.alt = 'check'
        !checkIcon&&checkbox.appendChild(newCheckIcon)
    }
}

const createConfigItem = (itemName:ConfigItem, checkboxDataName: string, spanText: string) => {
    const listItem = document.createElement('li');
    listItem.classList.add('config-item', itemName)
    listItem.addEventListener('click', () => selectConfigItem(listItem, itemName))
    const checkbox = document.createElement('div')
    checkbox.dataset.configItem = checkboxDataName
    listItem.appendChild(checkbox)
    const checkboxLabel = document.createElement('span')
    checkboxLabel.textContent = spanText
    listItem.appendChild(checkboxLabel)
    return listItem
}

const configItems = () => {
    const configList = document.getElementById('config');
    configObjects.forEach(config => {
    configList?.appendChild(createConfigItem(config.itemName, config.checkboxDataName, config.spanText))        
    })
}

configItems()
