import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { createBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: BoardRepository,
        ) {}

        
async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
}

async createBoard(createBoardDto: createBoardDto): Promise<Board> {
    const {title, description} = createBoardDto;

    const board = this.boardRepository.create({
        title,
        description,
        status: BoardStatus.PUBLIC
        })

        await this.boardRepository.save(board);
        return board;
    }

async getBoardById(id: number): Promise <Board>{
    const found = await this.boardRepository.findOne(id);

    if(!found) {
        throw new NotFoundException(`Can't find Board wiht id ${id}`);
    }

    return found;
}

async deleteBoard(id: number): Promise<void>{
    const result = await this.boardRepository.delete(id);

    if(result.affected === 0) {
        throw new NotFoundException(`Can't find Board with id ${id}`)
    }
}

async updateBoardStatus(id: number, status: BoardStatus): Promise<Board>{
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
}

}