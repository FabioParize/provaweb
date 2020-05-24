import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int' })
    total: number;

    @Column({type: 'varchar', length: '80' })
    orderNumber : string;

    @Column({type: 'date' })
    orderDate: Date;
    }