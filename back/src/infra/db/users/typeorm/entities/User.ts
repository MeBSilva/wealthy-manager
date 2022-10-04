import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { User as Model } from "@/domain/models";

import type { Property } from ".";

@Entity({ name: "users" })
export class User implements Model {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  email!: string;

  @Column({ type: "varchar" })
  password!: string;

  @Column({ type: "varchar" })
  authorizationLevel!: "admin" | "user";

  @OneToMany("Property", "user")
  properties!: Property[];

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
