import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: String;

  @Column()
  stock: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}