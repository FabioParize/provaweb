import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Produto } from "src/product/produto";

@Entity()
export class ItemPedido {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Produto, product => product)
    @Column({type: 'varchar',})
    product : Produto;

    @ManyToOne(type => ItemPedido, order => order)
    @Column({type: 'varchar'  })
    order : ItemPedido;
    
    @Column({type: 'int' })
    quantity: number;

    @Column({type: 'date' })
    unitValue : Date;

    @Column({type: 'varchar', length: '80' })
    totalValue : number;
    }