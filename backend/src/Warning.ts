import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity()
export class Warning {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    infrator: string;

    @Column()
    conteudo: string;

    @Column()
    descricao: string;

    @Column()
    relator: string;

    @CreateDateColumn()
    data: Date;
}

export default Warning;
