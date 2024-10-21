import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { ConfigurationModule } from './common/configuration/configuration.module';
import { PersistenceModule } from './common/infrastructure/persistence/persistence.module';


@Module({
  imports: [
    ConfigurationModule,
    PersistenceModule,
    ProductModule
  ]
})
export class AppModule { }
