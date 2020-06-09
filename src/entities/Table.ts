import { Column, Entity } from "typeorm";

@Entity("table", { schema: "liuuu" })
export class Table {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;
}
