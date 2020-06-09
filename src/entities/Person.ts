import { Column, Entity } from "typeorm";

@Entity("Person", { schema: "liuuu" })
export class Person {
  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("tinyint", { name: "isBetaMember", width: 1, default: () => "'0'" })
  isBetaMember: boolean;

  @Column("int", { primary: true, name: "id" })
  id: number;
}
