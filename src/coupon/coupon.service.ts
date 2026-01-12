import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCouponDto } from "./dto/create-coupon.dto";
import { Coupon } from "./entities/coupon.entity";

@Injectable()
export class CouponService {
	constructor(
		@InjectRepository(Coupon)
		private readonly couponRepository: Repository<Coupon>,
	) {}

	async create(createCoupon: CreateCouponDto) {
		const coupon = this.couponRepository.create({
			code: createCoupon.code,
			discount: createCoupon.discount,
			valid: new Date(createCoupon.valid),
			event: {
				id: createCoupon.event,
			},
		});

		return this.couponRepository.save(coupon);
	}
}
