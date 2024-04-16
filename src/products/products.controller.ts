import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOneBy(@Param('id') id: number): Promise<Product> {
    return this.productsService.findOneBy(id);
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productsService.create(product);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() product: Product): Promise<Product> {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.productsService.delete(id);
  }
}