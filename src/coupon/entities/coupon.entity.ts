import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "@/event/entities/event.entity";

@Entity()
export class Coupon {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("int")
	discount: number;

	@Column()
	code: string;

	@Column({ type: "timestamptz" })
	valid: Date;

	@ManyToOne(() => Event, { nullable: false, onDelete: "CASCADE" })
	event: Event;
}
