import { CaregiverEntity } from './caregiver.entity';
import { CalandarEntity } from './calandar.entity';
import { ChattingEntity } from './chatting.entity';
import { VoiceModelRelationEntity } from './voiceRelation.entity';
import {
    Column,
    PrimaryGeneratedColumn,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn,
    OneToMany
} from 'typeorm';
import { AgreementEnum } from '../types/agreement.type';

@Entity({ name: 'Elderly' })
export class ElderlyEntity extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    phone_number: string;

    @Column({
        type: 'datetime'
    })
    birthday: Date;

    @Column({ 
        type: 'varchar',
        length: 5 
    })
    agreement: AgreementEnum

    @Column({
        type: 'varchar',
        length: 255
    })
    token: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(type => CaregiverEntity, (cargiver) => cargiver.elderly)
    @JoinColumn({
        name: 'caregiver_id'
    })
    caregiver_id: CaregiverEntity;

    @OneToMany(type => CalandarEntity, (calandar) => calandar.elderly_id)
    calandar: CalandarEntity[];

    @OneToMany(type => ChattingEntity, (chatting) => chatting.elderly_id)
    chatting: ChattingEntity[];
    
    @OneToMany(type => VoiceModelRelationEntity, (vrelation) => vrelation.elderly_id)
    voiceRelation: VoiceModelRelationEntity[]

};