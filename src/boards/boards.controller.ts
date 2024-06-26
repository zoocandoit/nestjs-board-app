import { Param, Body, Controller, Get, Post, Delete, Patch, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { BoardsService } from './boards.service';
import { createBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';


@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }

    @Get()
    getAllBoard(): Promise<Board[]>{
        return this.boardsService.getAllBoards();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: createBoardDto): Promise<Board> {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get(`/:id`)
    getBoardByID(@Param(`id`) id:number) : Promise<Board> {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id): Promise<void>{
        return this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ){
        return this.boardsService.updateBoardStatus(id, status);
    }

}
