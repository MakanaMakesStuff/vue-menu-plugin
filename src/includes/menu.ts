import { AppContext } from "vue"

export interface MenuItem {
    name: string
    label: string
    to: string
    target?: '_blank'
}

export interface MenuCollection {
    menu_name: string
    items: MenuItem[]
}

export class MenuStore {
    #items: MenuCollection[] = []

    constructor() {
        if(!(this instanceof MenuStore)) return new MenuStore()
    }

    add(menus: MenuCollection | MenuCollection[]) {
        if(Array.isArray(menus)) return menus.forEach(menu => this.#items.push(menu))
        else this.#items.push(menus)
    }

    get(name?: string) {
        if(!this.#items) return console.info('no menu items could be found')
        if(name) {
            return this.#items.find(item => item.menu_name === name)?.items
        }
        const items = this.#items.map(item => item.items).reduce((item, next) => [...item, ...next])
        return items
    }
}

const menus = new MenuStore()

export function useMenus() {
    return menus
}