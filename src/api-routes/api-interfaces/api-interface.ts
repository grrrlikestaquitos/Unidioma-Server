export interface Completion {
    success: (data: object) => void
    failure?: (error: ServerError) => void
}

export interface ServerError {
    error: { message: string }
}

export const ResponseError = (message: string): ServerError => {
    return { error: { message } }
}