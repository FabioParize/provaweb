import {  PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
id: number;

@Column({type: 'varchar', length: '80' })
name: string;

@Column({type: 'varchar', length: '80' })
cpf : string;

@Column({type: 'varchar', length: '80' })
address: string;
}