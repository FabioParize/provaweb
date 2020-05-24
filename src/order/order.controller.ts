import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { Pedido } from './pedido';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

    constructor(private readonly service : OrderService){}

    @Post()
    save(@Body() pedido : Pedido){
        return this.service.save(pedido);
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
