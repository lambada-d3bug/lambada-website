import {Block} from "payload";

export const GridOrCarousel: Block = {
    slug: "gridOrCarousel",
    labels: {singular: "carousel ou grid", plural: 'carousel ou grid'},
    fields: [{name: "title", label: "Titre décomposé", type: "group", fields:[
            {name:"titlePart", label:"Partie du titre", type: "text"},
            {name:"titlePart1", label:"Partie du titre", type: "text"},
            {name:"titlePart2", label:"Partie du titre", type: "text"}
        ]},
        {
            name: "cardArray", label: "tableau de cards", type: 'array', fields: [
                {
                    name: "card", label: "card", type: "group", fields: [
                        {name: "icon", label: "icon", type: "upload", relationTo: "media"},
                        {name: "title", label: 'titre', type: 'text'},
                        {name: "description", label: 'description', type: 'text'}
                    ]
                }

            ]
        }]
}