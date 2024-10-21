export class PaginatedResultsDTO<T> {
    constructor(page: number, pageSize: number, data: T[]) {
        this.page = page;
        this.pageSize = pageSize;
        this.data = data;
    }

    page: number;
    pageSize: number;
    data: T[]
}