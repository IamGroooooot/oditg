import { Response } from 'express';
import { Controller, Get, Query, Res } from '@nestjs/common';
import { Champion } from './champion.entity';
import { ChampionService } from './champion.service';

@Controller('champions')
export class ChampionController {
    constructor(private readonly championService: ChampionService) {}
    
    @Get() 
    getAllChamps(): Champion[] {
        return this.championService.getAllChamps();
    }

    @Get('search')
    getLink(@Query('name') chmpName: string, @Res() res: Response){
        let chmp = this.championService.findChmpByName(chmpName);
        res.redirect(chmp[0].link);
        // return chmp[0].name; 
    }
}
