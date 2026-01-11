import {
	IsBoolean,
	IsDateString,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsUrl,
	MaxLength,
} from "class-validator";

export class CreateEventDto {
	@IsString()
	@IsNotEmpty()
	@MaxLength(50)
	title: string;

	@IsString()
	@IsNotEmpty()
	@MaxLength(500)
	description: string;

	@IsBoolean()
	@IsNotEmpty()
	remote: boolean;

	@IsOptional()
	@IsUrl()
	img_url?: string;

	@IsOptional()
	@IsUrl()
	event_url?: string;

	@IsNotEmpty()
	@IsDateString()
	date: string;
}
