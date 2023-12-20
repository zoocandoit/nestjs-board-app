import { Param, Body, Controller, Get, Post, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { BoardsService } from './boards.service';
import { createBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';


@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }

    // @Get('/')
    // getAllBoard(): Board[] {
    //     return this.boardsService.getAllBoards();
    // }
    
    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() createBoardDto: createBoardDto 
    // ): Board {
    //     return this.boardsService.createBoard(createBoardDto);
    // }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: createBoardDto): Promise<Board> {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get(`/:id`)
    getBoardByID(@Param(`id`) id:number) : Promise<Board> {
        return this.boardsService.getBoardById(id);
    }

    // @Get('/:id')
    // getBoardById(@Param('id') id: string): Board {
    //     return this.boardsService.getBoardById(id)
    // }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void {
    //     this.boardsService.deleteBoard(id);
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    //  ) {
    //     return this.boardsService.updateBoardStatus(id, status)
    //  }

}
