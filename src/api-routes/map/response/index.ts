
export interface Pin {
    name: string
    lat: number
    lng: number
    bearing: number
}

export interface MapResponse {
    viewType?: 'people' | 'buildings'
    data: Array<Pin>
}