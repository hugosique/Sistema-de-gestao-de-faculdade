export interface ICourse {
    id?: string,
    name: string,
    semesters: number,
    coordinator?: string,
    classes?: IClasses[]
}

export interface IClasses {
    id?: string,
    className: string,
    teacher: string,
    description?: string,
    workload: number,
    students?: string[],
    semester?: number,
}

export interface ITeacher {
    id?: string,
    teacherName: string,
    birthDate: Date,
    remuneration: number,
    occupationArea: string,
}

export interface iStudent {
    id?: string,
    studantName: string,
    birthDate: Date,
    registration: number,
    class: string,
    currentSemester: number,
    classGrades: any[],
}