interface FooterLink {
    title: string,
    url: string
}

const foterData: FooterLink[][] = [
    [
        {title: "Як просувати свою анкету?", url: "/"},
        {title: "Як користуватися сайтом?", url: "/"},
    ],
    [
        {title: "Що таке команди?", url: "/"},
    ],    
    [
        {title: "Політика конфіденційності", url: "/"},
        {title: "Умови обслуговування", url: "/"},
        {title: "Налаштування cookie", url: "/"}
    ]
]

export {foterData}
export type {FooterLink}