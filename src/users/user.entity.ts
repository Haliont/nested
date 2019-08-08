import { Unique, RelationId, OneToMany, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Column as EntityColumn } from '../columns/column.entity';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @OneToMany(type => EntityColumn, column => column.user)
  columns: EntityColumn[];

  @RelationId((user: User) => user.columns)
  columnsIds: string[];
}
