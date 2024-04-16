import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: String;

  @Column({ length: 255, unique: true}) 
  email: string;

  @Column()
  email_verified_at: Date;

  @Column({ length: 255})
  password: string;

  @Column({ length: 100})
  remember_token: string;

  @Column({ type: 'timestamp', default: () => 'NOW()'})
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  updatedAt: Date;
}