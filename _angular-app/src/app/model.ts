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