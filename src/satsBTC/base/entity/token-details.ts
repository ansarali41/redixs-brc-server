import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TokenDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  token: string;

  @Column({ type: 'text' })
  precision: string;

  @Column({ type: 'text' })
  totalSupply: string;

  @Column({ type: 'text' })
  mintAmount: string;

  @Column({ type: 'text' })
  limitPerMint: string;

  @Column({ type: 'text' })
  holder: string;

  @Column({ type: 'text' })
  deployAddress: string;

  @Column({ type: 'text' })
  logoUrl: string;

  @Column({ type: 'text' })
  txId: string;

  @Column({ type: 'text' })
  inscriptionId: string;

  @Column({ type: 'text' })
  deployHeight: string;

  @Column({ type: 'text' })
  deployTime: string;

  @Column({ type: 'text' })
  inscriptionNumber: string;

  @Column({ type: 'text' })
  state: string;

  @Column({ type: 'text' })
  tokenType: string;

  @Column({ type: 'text' })
  msg: string;
}
