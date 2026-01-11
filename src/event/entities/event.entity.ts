import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class Event {
	@PrimaryGeneratedColumn("uuid")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	remote: boolean;

	@Column()
	img_url: string;

	@Column()
	event_url: string;

	@CreateDateColumn()
	created_at?: Date;

	@UpdateDateColumn()
	updated_at?: Date;
}
