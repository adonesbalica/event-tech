import { Body, Controller, Post } from "@nestjs/common";
import { CouponService } from "./coupon.service";
import { CreateCouponDto } from "./dto/create-coupon.dto";

@Controller("/api/v1/coupon")
export class CouponController {
	constructor(private readonly couponService: CouponService) {}

	@Post()
	async create(@Body() createCoupon: CreateCouponDto) {
		return await this.couponService.create(createCoupon);
	}
}
