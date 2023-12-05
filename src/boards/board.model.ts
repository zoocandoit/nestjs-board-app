export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus.PUBLIC;
}

export enum BoardStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}