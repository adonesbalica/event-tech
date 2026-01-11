import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import request from "supertest";
import { AppModule } from "@/app/app.module";

describe("Event (e2e)", () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleFixture = await Test.createTestingModule({
			imports: [AppModule], // 👈 carrega TypeORM + Postgres
		}).compile();

		app = moduleFixture.createNestApplication();

		app.useGlobalPipes(
			new ValidationPipe({
				whitelist: true,
				forbidNonWhitelisted: true,
				transform: true,
			}),
		);

		await app.init();
	});

	it("Should create a event with a valid body", async () => {
		await request(app.getHttpServer())
			.post("/api/v1/events")
			.send({
				title: "Event Tech 2",
				description: "Some really cool event tech 2",
				date: "2026-01-11T10:00:00Z",
				remote: true,
				img_url: "https://example.com/image.png",
				event_url: "https://example.com/event",
			})
			.expect(201);
	});

	it("Should not create a event wen passed a invalid body", async () => {
		const response = await request(app.getHttpServer())
			.post("/api/v1/events")
			.send({
				title: "",
				description: "",
				date: "",
				remote: "true",
				img_url: "",
				event_url: "",
			})
			.expect(400);

		expect(response.body).toEqual({
			message: [
				"title should not be empty",
				"description should not be empty",
				"remote must be a boolean value",
				"img_url must be a URL address",
				"event_url must be a URL address",
				"date must be a valid ISO 8601 date string",
				"date should not be empty",
			],
			error: "Bad Request",
			statusCode: 400,
		});
	});
});
