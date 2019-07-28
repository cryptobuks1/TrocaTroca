export interface State {
    id?: number;
    state_name: string;
    initials: string;
    readonly created_at?: {date: string};
    readonly updated_at?: {date: string};
}

export interface City {
    id?: number;
    city_name: string;
    state: State;
    readonly created_at?: {date: string};
    readonly updated_at?: {date: string};
}

export interface Sector {
    id?: number;
    sector_name: string;
    readonly created_at?: {date: string};
    readonly updated_at?: {date: string};
}

export interface Unit {
    id?: number;
    unit_name: string;
    city: City;
    readonly created_at?: {date: string};
    readonly updated_at?: {date: string};
}

export interface UnitSector {
    unit: Unit;
    sectors: Sector[];
}