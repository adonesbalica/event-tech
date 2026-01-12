import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import request from "supertest";
import { AppModule } from "@/app/app.module";

describe("Event (e2e)", () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleFixture = await Test.createTestingModule({
			imports: [AppModule],
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

	it("Should create a coupon with a valid body", async () => {
		await request(app.getHttpServer())
			.post("/api/v1/coupon")
			.send({
				discount: 10,
				code: "10OFF",
				valid: "2026-01-12T10:00:00Z",
				event: "7ca2a41e-ef66-4d6c-87b5-92dc5c6dee4d",
			})
			.expect(201);
	});
});
