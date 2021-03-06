import { Repository } from "typeorm";
import { CustomRepository } from "../decorators/typeorm.decorator";
import { CaregiverEntity } from "../entity/caregiver.entity";
import { ElderlyEntity } from "../entity/elderly.entity";

@CustomRepository(ElderlyEntity)
export class ElderlyRepository extends Repository<ElderlyEntity> {
    async findElderlyByNameAndCG(name: string, cgId: string) {
        const _e = await this.findAndCount({
            relations: {
                caregiver_id: true
            },
            where: {
                name: name,
                caregiver_id: {
                    uuid: cgId
                }
            }
        });

        return _e;
    }

    async findElderlyById(uuid: string) {
        const _e = await this.findOne({
            where: {
                uuid: uuid
            }
        });
        return _e;
    }
}