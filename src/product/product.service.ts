import { Injectable } from '@nestjs/common';
import { Produto } from './produto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Produto)
        private readonly repository: Repository<Produto>) {
        }
    
    
        save(cliente: Produto) {
          return this.repository.save(cliente);
    
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
