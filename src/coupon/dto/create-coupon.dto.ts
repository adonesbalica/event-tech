import { Type } from "class-transformer";
import {
	IsDateString,
	IsNotEmpty,
	IsNumber,
	IsUUID,
	Max,
	MaxLength,
} from "class-validator";

export class CreateCouponDto {
	@Type(() => Number)
	@IsNumber()
	@Max(20)
	discount: number;

	@IsNotEmpty()
	@MaxLength(6)
	code: string;

	@IsDateString()
	valid: string;

	@IsUUID()
	event: string;
}
