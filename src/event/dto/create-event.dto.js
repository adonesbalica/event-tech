"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEventDto {
    @(0, class_validator_1.IsString)()
    @(0, class_validator_1.IsNotEmpty)()
    @(0, class_validator_1.MaxLength)(50)
    title;
    @(0, class_validator_1.IsString)()
    @(0, class_validator_1.IsNotEmpty)()
    @(0, class_validator_1.MaxLength)(500)
    description;
    @(0, class_validator_1.IsBoolean)()
    @(0, class_validator_1.IsNotEmpty)()
    remote;
    @(0, class_validator_1.IsOptional)()
    @(0, class_validator_1.IsUrl)()
    img_url;
    @(0, class_validator_1.IsOptional)()
    @(0, class_validator_1.IsUrl)()
    event_url;
    @(0, class_validator_1.IsNotEmpty)()
    @(0, class_validator_1.IsDateString)()
    date;
}
exports.CreateEventDto = CreateEventDto;
