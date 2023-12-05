export interface Board {
    id: string;
    tilte: string;
    description: string;
    status: ;
}

export enum BoardStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}