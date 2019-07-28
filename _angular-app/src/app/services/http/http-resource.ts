export interface SearchParams {
    page?: number;
    all?: any;
}

export class SearchParamsBuilder {
    constructor(private searchParams: SearchParams) {}

    makeObject() : any {
        const sParams: any = {
            page: this.searchParams.page + "",
        };
        if (this.searchParams.all) {
            sParams.all =1;
            delete sParams.page;
        }

        return sParams;

    }
}