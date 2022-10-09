export interface ICourse {
    id?: string,
    name: string,
    semesters: number,
    coordinator?: string,
}

export interface IClasses {
    id?: string,
    classeName: string,
    teacher: string,
    description?: string,
}