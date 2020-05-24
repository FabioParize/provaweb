import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { Produto } from './produto';
import { ProductService } from './product.service';

@Controller('produto')
export class ProductController {

    constructor(private readonly service : ProductService){}

    @Post()
    save(@Body() produto : Produto){
        return this.service.save(produto);
    }

    @Get(":id")
    findById(@Param() id : number){
        return this.service.findById(id);
    }

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Delete(":id")
    delete(@Param() id : number){
        return this.service.delete(id);
    }
}
