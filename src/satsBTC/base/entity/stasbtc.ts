import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SatsBTC {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  token: string;

  @Column({ type: 'text' })
  deployTime: string;

  @Column({ type: 'text' })
  inscriptionId: string;

  @Column({ type: 'text' })
  inscriptionNumber: string;

  @Column({ type: 'text' })
  totalSupply: string;

  @Column({ type: 'text' })
  mintAmount: string;

  @Column({ type: 'text' })
  transactionCount: string;

  @Column({ type: 'text' })
  holder: string;

  @Column({ type: 'text' })
  mintRate: string;
}
