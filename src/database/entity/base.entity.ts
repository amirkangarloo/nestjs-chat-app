import {
  BaseEntity as Base,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class BaseEntity extends Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @Column({ name: 'created_by', default: null, nullable: true })
  createdBy: string;

  @CreateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: null,
    nullable: true,
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  @Column({ name: 'updated_by', default: null, nullable: true })
  updatedBy: string;
}
