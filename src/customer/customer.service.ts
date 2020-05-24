import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { Cliente } from './cliente';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Cliente)
    private readonly repository: Repository<Cliente>) {
    }


    save(cliente: Cliente) {
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