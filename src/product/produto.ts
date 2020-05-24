import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
 @Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '80' })
    codigo: string;

    @Column({type: 'varchar', length: '80' })
    nome : string;

    @Column({type: 'int' })
    preco: number;

    @Column({type: 'int' })
    qntdestoque: number;
    }
   
