import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TokenPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  period: number;

  @Column({ type: 'text' })
  low: string;

  @Column({ type: 'text' })
  volume: string;

  @Column({ type: 'text' })
  last: string;

  @Column({ type: 'text' })
  open: string;

  @Column({ type: 'text' })
  deal: string;

  @Column({ type: 'text' })
  close: string;

  @Column({ type: 'text' })
  change: string;

  @Column({ type: 'text' })
  high: string;

  @Column({ type: 'text' })
  result: string;

  @Column({ type: 'int' })
  avg: number;

  @Column({ type: 'text' })
  vol_ordi: string;

  @Column({ type: 'text' })
  vol_usdt: string;

  @Column({ type: 'text' })
  rate_change_percentage: string;

  @Column({ type: 'int' })
  rate_change_percentage_utc0: number;

  @Column({ type: 'int' })
  rate_change_percentage_utc8: number;
}
