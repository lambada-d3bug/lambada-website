import {GlobalConfig} from "payload";

export const Footer: GlobalConfig = {
    slug: "footer",
    label: "footer",
    fields: [
        {name: "blockDisplayBoolean", label:"Cacher le footer?", type:"checkbox"},
        {name: "logo", label: "logo", type: "upload", relationTo: "media"},
        {name: "description", label: "description", type: "text"},
        {
            name: "button", label: "button", type: "group", fields: [
                {name: "label", label: "label", type: "text"},
                {name: "url", label: "url", type: "text"}
            ]
        },
        {
            name: "navArray", label: "navArray", type: "array", fields: [
                {
                    name: "navItem", label: "navItem", type: "group", fields: [
                        {name: "label", label: "label", type: "text"},
                        {name: "url", label: "url", type: "text"}
                    ]
                },
            ]
        },
        {
            name: "terms", label: "terms", type: "group", fields: [
                {name: "label", label: "label", type: "text"},
                {name: "url", label: "url", type: "text"}
            ]
        },
        {
            name: "confidentiality", label: "confidentiality", type: "group", fields: [
                {name: "label", label: "label", type: "text"},
                {name: "url", label: "url", type: "text"}
            ]
        },
        {
            name: "socials", label: "Réseaux sociaux", type: "array", fields: [
                {
                    name: "social", label: " Réseau social", type: "group", fields: [
                        {name: "icon", label: "icon", type: "upload", relationTo: "media"},
                        {name: "url", label: "url", type: "text"}
                    ]
                }
            ]
        },
        {name: "copyright", label: "copyright", type: "array", fields: [
                {name: "text", label: "texte", type: "text"}
            ]}
    ]
}