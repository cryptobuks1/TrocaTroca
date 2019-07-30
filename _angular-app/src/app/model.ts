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

export interface CityUpdated {
    id?: number;
    city_name: string;
    state_id: number;
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

export interface User {
    id?: number;
    unit: Unit;
    sector: Sector;
    key: string;
    username: string;
    email: string;
    password?: string;
    readonly created_at?: {date: string};
    readonly updated_at?: {date: string};
}

export interface UserLogado {
    id?: number;
    key: string;
    email: string;
    username: string;
}

export interface Group {
    id?: number;
    group_name: string;
}

export interface Turn {
    id?: number;
    turn_name: string;
}

export interface Type {
    id?: number;
    type_name: string;
}

export interface Status {
    id?: number;
    status_name: string;
}

export interface Exchange {
    id?: number;
    unit: Unit;
    sector: Sector;
    user1: User;
    group1: Group;
    user2: User;
    group2: Group;
    date: Date;
    turn: Turn;
    type1: Type;
    type2: Type;
    status: Status;
    readonly created_at?: {date: string};
    readonly updated_at?: {date: string};
}

export interface ExchangeView {
    id?: number;
    unit_id: number;
    sector_id: number;
    user1: User;
    group1_id: number;
    user2: User;
    group2_id: number;
    date: Date;
    turn_id: number;
    type1_id: number;
    type2_id: number;
    status_id: number;
    date_confirmation: Date;
}

export interface ExchangeConfirm {
    id?: number;
    unit_id: number;
    sector_id: number;
    user1: User;
    group1_id: number;
    user2: User;
    group2_id: number;
    date: Date;
    turn_id: number;
    type1_id: number;
    type2_id: number;
    status_id: number;
    date_confirmation: Date;
}

export interface ExchangeAuthorize {
    id?: number;
    unit_id: number;
    sector_id: number;
    user1: User;
    group1_id: number;
    user2: User;
    group2_id: number;
    date: Date;
    turn_id: number;
    type1_id: number;
    type2_id: number;
    status_id: number;
    date_autorization: Date;
}

export interface ExchangeConclusion {
    id?: number;
    unit_id: number;
    sector_id: number;
    user1: User;
    group1_id: number;
    user2: User;
    group2_id: number;
    date: Date;
    turn_id: number;
    type1_id: number;
    type2_id: number;
    status_id: number;
    date_conclusion: Date;
}

export interface ExchangeCancel {
    id?: number;
    unit_id: number;
    sector_id: number;
    user1: User;
    group1_id: number;
    user2: User;
    group2_id: number;
    date: Date;
    turn_id: number;
    type1_id: number;
    type2_id: number;
    status_id: number;
    date_cancelation: Date;
}

export interface ExchangePending {
    id?: number;
    unit_id: number;
    sector_id: number;
    user1: User;
    group1_id: number;
    user2: User;
    group2_id: number;
    date: Date;
    turn_id: number;
    type1_id: number;
    type2_id: number;
    status_id: number;
    date_pending: Date;
}

export interface ExchangeDecline {
    id?: number;
    unit_id: number;
    sector_id: number;
    user1: User;
    group1_id: number;
    user2: User;
    group2_id: number;
    date: Date;
    turn_id: number;
    type1_id: number;
    type2_id: number;
    status_id: number;
    date_declination: Date;
}