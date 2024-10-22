import { Test } from '@nestjs/testing';
import { CreateProductUseCase } from './create-product.use-case';
import { ProductRepositoryImpl } from '../repositories/product.repository.impl';
import { CreateProductDto } from '../../domain/dtos/create-product.dto';
import { Product, ProductSchema } from '../../infrastructure/persistence/mongo/schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';

describe('CreateProductUseCase', () => {
    let createProductUseCase: CreateProductUseCase;
    let productRepository: ProductRepositoryImpl;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
            ],
            providers: [ProductRepositoryImpl, CreateProductUseCase],
        }).compile();

        productRepository = moduleRef.get(ProductRepositoryImpl);
        createProductUseCase = moduleRef.get(CreateProductUseCase);
    });

    // Unit test for the `handle` method
    it('should call repository.create with dto and return the created product', async () => {
        // Arrange
        const createProductDto = new CreateProductDto();
        createProductDto.name = "Test";

        const createdProduct = new Product();
        createdProduct.name = "Test";

        // Mocking repository's `create` method to return a value
        jest.spyOn(productRepository, 'create').mockResolvedValue(createdProduct);

        // Act
        const result = await createProductUseCase.handle(createProductDto);

        // Assert
        expect(productRepository.create).toHaveBeenCalledWith(createProductDto);
        expect(result).toEqual(createdProduct);
    });
});
