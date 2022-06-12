import { AppContext } from "vue";
import { useMenus, MenuCollection } from "../includes/menu"


export function MenuPlugin() {
    const menus = useMenus();
    const menu: MenuCollection[] = []

    menu.push({
        menu_name: "home-menu",
        items: [
            {
            name: "home",
            label: "Home",
            to: "/home",
            },
            {
            name: "about",
            label: "About Us",
            to: "/about",
            },
            {
            name: "contact",
            label: "Contact",
            to: "/contact",
            },
            {
            name: "faqs",
            label: "FAQs",
            to: "/faqs",
            },
        ],
    })

    menu.push({
        menu_name: 'footer',
        items: [
            {
                name: 'privacy-policy',
                label: 'Privacy Policy',
                to: '/privacy-policy'
            },
            {
                name: 'terms-of-service',
                label: 'Terms of Service',
                to: '/terms-of-service'
            },
            {
                name: 'home',
                label: 'Home',
                to: '/home'
            }
        ]
    })

    menus.add(menu)
}