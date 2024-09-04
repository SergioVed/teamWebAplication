export type TColor = {
    color: string,
}

export interface IEducation {
    name: string | undefined,
    year: {
        start: string,
        end: string
    }
}
