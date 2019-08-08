import { ManyToOne, RelationId, Entity, Column as ORMColum, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Card } from '../cards/card.entity';

@Entity()
export class Column {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ORMColum({ length: 100 })
  title: string;

  @ManyToOne(type => User, user => user.columns)
  user: User;

  @RelationId((column: Column) => column.user)
  userId: string;

  @OneToMany(type => Card, card => card.column)
  cards: Card[];

  @RelationId((column: Column) => column.cards)
  cardsIds: string[];
}
