import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { ProductController } from './product/product.controller';
import { CustomerService } from './customer/customer.service';
import { OrderService } from './order/order.service';
import { ProductService } from './product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './product/produto';
import { Cliente } from './customer/cliente';
import { Pedido } from './order/pedido';
import { ItemPedido } from './ordemItem/itempedido';
import { CustomerController } from './customer/customer.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'gtsnfe2010',
      database: 'Fabio',
      entities: [Produto, Cliente, Pedido, ItemPedido],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([ Cliente, Pedido, Produto ])
  ],
  controllers: [ AppController, ProductController, OrderController, CustomerController ],
  providers: [ AppService, CustomerService, OrderService, ProductService ],
})
export class AppModule {}