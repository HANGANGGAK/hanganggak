export interface TypeResponse<Type> {
    code: 200 | 500 | number
    result: Type
    message: string
}

export interface ListTypeResponse<Type> {
    code: number
    result: Type[]
    message: string
}