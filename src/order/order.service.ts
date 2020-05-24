import { Injectable } from '@nestjs/common';
import { Pedido } from './pedido';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
    
    constructor(
        @InjectRepository(Pedido)
        private readonly repository: Repository<Pedido>) {
        }
    
    
        save(Pedido: Pedido) {
          return this.repository.save(Pedido);
    
        }
    
        findAll() {
          return this.repository.find();
    
        }
    
        findById(id: number) {
          this.repository.findOne(id);
    
        }
    
        delete(id: number) {
            this.repository.delete(id);
        
        }
}
