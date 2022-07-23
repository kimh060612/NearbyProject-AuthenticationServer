import { CaregiverEntity } from './caregiver.entity';
import { CalandarEntity } from './calandar.entity';
import { ChattingEntity } from './chatting.entity';
import { VoiceModelEntity } from './voiceModel.entity';
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

@Entity({ name: 'Elderly' })
export class ElderlyEntity extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    uuid: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    name: string;

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

    @OneToMany(type => VoiceModelEntity, (voice) => voice.elderly_id)
    voice_model: VoiceModelEntity[];
    
};