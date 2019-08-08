import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId } from 'typeorm';
import { Column as EntityColumn } from '../columns/column.entity';
// import { } from '../users/us';

@Entity()
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 500 })
  description: string;

  @ManyToOne(type => EntityColumn, column => column.cards)
  column: EntityColumn;

  @RelationId((card: Card) => card.column)
  columnId: string;

  // @ManyToOne(type => )
}
