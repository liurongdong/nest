import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Use2rs", { schema: "liuuu" })
export class Use2rs {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "firstName", nullable: true, length: 255 })
  firstName: string | null;

  @Column("varchar", { name: "lastName", nullable: true, length: 255 })
  lastName: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;

  @Column("datetime", { name: "updatedAt" })
  updatedAt: Date;
}
