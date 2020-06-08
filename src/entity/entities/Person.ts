import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Person', { schema: 'liuuu' })
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('tinyint', { name: 'isBetaMember', width: 1, default: () => "'0'" })
  isBetaMember: boolean;
}
