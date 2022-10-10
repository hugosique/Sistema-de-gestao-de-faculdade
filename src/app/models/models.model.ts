export interface ICourse {
    id?: string,
    name: string,
    semesters: number,
    coordinator?: string,
    classes?: IClasses[]
    students?: iStudent[],
}

export interface IClasses {
    id?: string,
    className: string,
    teacher?: ITeacher,
    description?: string,
    workload: number,
    semester?: number,
}

export interface ITeacher {
    id?: string,
    teacherName: string,
    birthDate: Date,
    remuneration: number,
}

export interface iStudent {
    id?: string,
    studentName: string,
    birthDate: Date,
    registration: number,
    currentSemester: number,
    course?: ICourse,
}