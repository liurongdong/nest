import { Column, Entity } from "typeorm";

@Entity("my_table", { schema: "liuuu" })
export class MyTable {
  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;
}
