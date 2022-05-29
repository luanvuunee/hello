export interface PagingParams {
  _limit: number;
  _page: number;
  _total: number;
}
export interface ListResponse<T> {
  data: T[];
  paginations: PagingParams;
}
export interface ListParams {
  _limit: number;
  _page: number;
  _order: 'asc' | 'desc';

  [key: string]: any;
}
