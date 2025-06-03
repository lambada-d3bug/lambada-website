import {Block} from "payload"

export const Hero :Block = {
    slug:"hero",
    labels:{singular:"hero", plural:"hero"},
    fields:[
        {name:"bgImage", label:"image de background", type:"upload", relationTo:'media'},
        {name:"heading", label:"titre", type:"text"},
        {name:"button", label:"bouton", type:"group", fields:[
                {name:"label", label:"label",type:"text"},
                {name:'url', label:"url",type:"text"},
            ]}
    ]
}