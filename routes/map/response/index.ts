export enum MapPinTypes {
    people = 'people',
    buildings = 'buildings'
}

export interface Pin {
    name: string
    lat: number
    lng: number
    bearing: number
}

export interface MapResponse {
    viewType: MapPinTypes
    data: Array<Pin>
}