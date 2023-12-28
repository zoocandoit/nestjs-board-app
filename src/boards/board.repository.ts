import { EntityRepository, Repository } from 'typeorm';
import { Board } from "./board.entity";
import { BoardStatus } from './board-status.enum';
import { createBoardDto } from './dto/create-board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {

}
