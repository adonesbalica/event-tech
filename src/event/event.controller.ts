import { Body, Controller, Post } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { EventService } from "./event.service";

@Controller("/api/v1/events")
export class EventController {
	constructor(private readonly eventService: EventService) {}

	@Post()
	async create(@Body() createEventDto: CreateEventDto) {
		return await this.eventService.create(createEventDto);
	}
}
