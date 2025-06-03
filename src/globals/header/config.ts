import {Block} from "payload";

export const header: Block = {
    slug: "header",
    fields: [
        {name: "navLogo", label: "logo de la barre de navigation", type: "upload", relationTo: 'media'},
        {
            name: "navItems", type: 'array', fields: [
                {
                    name: "itemsGroup", label: "lien", type: "group", fields: [
                        {name: "label", label: "label", type: "text"},
                        {name: "url", label: "url", type: "text"}]
                }
            ]
        },
        {
            name: "navButton", label: "bouton de la barre de nav", type: "group", fields: [
                {name: "label", label: "label", type: "text"},
                {name: "url", label: "url", type: "text"}]
        }],


}