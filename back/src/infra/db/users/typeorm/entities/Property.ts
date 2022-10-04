import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { Property as Model } from "@/domain/models";

import type { User } from ".";

@Entity({ name: "properties" })
export class Property implements Model {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  number!: number;

  @Column({ type: "varchar" })
  location!: string;

  @Column({ type: "varchar" })
  document!: string;

  @ManyToOne("User", "properties", { nullable: true })
  @JoinColumn()
  clientInfo!: User;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
