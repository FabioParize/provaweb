import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Cliente } from './cliente';


@Controller('customer')
export class CustomerController {

    constructor(private readonly service : CustomerService){}

    @Post()
    save(@Body() Cliente : Cliente){
        return this.service.save(Cliente);
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


