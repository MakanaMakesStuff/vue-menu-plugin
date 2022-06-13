# Vue 3 Menu Plugin
This is a simple menu plugin that I made to easily create global menus and use them accross a vue app. I've used something similar from work and decided to make my own version for learning purposes. It works pretty well and I hope you can make use of it. Happy coding :)

![image](https://user-images.githubusercontent.com/37227196/173210406-6441e940-59da-4c59-81e4-4705c2eb1ffc.png)

To use the plugin, all you need to do is import the `useMenus` function from src/includes/menu.ts

eg:

`const menus = useMenus()`

`const menuItems = computed(()=> menus.get())`

The code above gets ALL the items that have been added to the current menu instance. In this app, the menu items are added in the src/plugins/menu.ts file and can be accessed anywhere in the Vue app. I could also specify a specific menu item to retrieve by passing an optional *name* argument to the `get()` method

eg:

`const item = computed(()=> menus.get("home-menu"))`

Menu items can be added very easily. You just need to call the `add()` method and pass an object or array of objects of type `MenuCollection` as an argument. A `MenuCollection` object should look like the following:
```
{

   menu_name: string

   items: MenuItem[]

}

type MenuItem = {

   name: string

   label: string

   to: string

   target?: string

}
```
Here's an example of adding object to the menu instance:

```
const menus = useMenus()
const menu: MenuCollection[] = []

menu.push({
menu_name: "main-menu",

items: [
{
   name: "home",
   label: "Home",
   to: "/home"
},

{
   name: "about"
   label: "About",
   to: "/about"
},

{
   name: "contact",
   label: "Contact Us",
   to: "/contact"
},
]
})
menus.add(menu)
```
