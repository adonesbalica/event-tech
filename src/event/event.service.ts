import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEventDto } from "./dto/create-event.dto";
import { Event } from "./entities/event.entity";

@Injectable()
export class EventService {
	constructor(
		@InjectRepository(Event)
		private readonly eventRepository: Repository<Event>,
	) {}

	async create(createEventDto: CreateEventDto) {
		const eventData: CreateEventDto = {
			title: createEventDto.title,
			description: createEventDto.description,
			remote: createEventDto.remote,
			date: createEventDto.date,
			img_url: createEventDto.img_url,
			event_url: createEventDto.event_url,
		};

		const newEvent = await this.eventRepository.create(eventData);
		return await this.eventRepository.save(newEvent);
	}
}
