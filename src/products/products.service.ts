import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOneBy(id: number): Promise<Product> {
    return this.productsRepository.findOneBy({id:id});
  }

  async create(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }

  async update(id: number, product: Product): Promise<Product> {
    await this.productsRepository.update(id, product);
    return this.productsRepository.findOneBy({id:id});
  }

  async delete(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}