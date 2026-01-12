import { Module } from "@nestjs/common";
import { ConfigModule, ConfigType } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CouponModule } from "@/coupon/coupon.module";
import { EventModule } from "@/event/event.module";
import appConfig from "./app.config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule.forFeature(appConfig)],
			inject: [appConfig.KEY],
			useFactory: async (appConfigurations: ConfigType<typeof appConfig>) => {
				return {
					type: appConfigurations.database.type,
					host: appConfigurations.database.host,
					port: appConfigurations.database.port,
					username: appConfigurations.database.username,
					database: appConfigurations.database.database,
					password: appConfigurations.database.password,
					autoLoadEntities: appConfigurations.database.autoLoadEntities,
					synchronize: appConfigurations.database.synchronize,
				};
			},
		}),
		EventModule,
		CouponModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
