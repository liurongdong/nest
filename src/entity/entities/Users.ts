import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users", { schema: "liuuu" })
export class Users {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "id",
    comment: "id",
    unsigned: true,
  })
  id: number;

  @Column("varchar", { name: "openid", nullable: true, length: 255 })
  openid: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("varchar", { name: "sex", nullable: true, length: 255 })
  sex: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 255 })
  phone: string | null;
}
