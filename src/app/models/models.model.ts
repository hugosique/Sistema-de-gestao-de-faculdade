export interface ICourse {
    id?: string,
    name: string,
    semesters: number,
    coordinator?: string,
}

export interface IClasses {
    id?: string,
    className: string,
    teacher: string,
    description?: string,
    workload: number,
    students?: string[],
}

export interface ITeacher {
    id?: string,
    teacherName: string,
    occupationArea: string,
}

export interface iStudent {
    id?: string,
    studantName: string,
    studantAge: number
    class: string,
    currentSemester: number,
}