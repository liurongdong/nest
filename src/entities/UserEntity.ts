import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_entity", { schema: "liuuu" })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;
}
