import { Controller, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { VoiceService } from './voice.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3FilePath } from 'src/common/decorators/s3-file.decorator';
import { JwtGuard } from 'src/common/guard/jwt-auth/jwt.guard';

@Controller('voice')
export class VoiceController {
  constructor(
    private readonly voiceService: VoiceService,
  ) {}

  // 보호자가 음성을 등록함 => 등록 완료되면 O.K 때림.
  @UseGuards(JwtGuard)
  @Post('/register/:email/:vname')
  @UseInterceptors(FileInterceptor('audio', {}))
  async registerVoice(
    @Param('email') email: string,
    @Param('vname') vname: string,
    @UploadedFile() file: Express.Multer.File,
    @S3FilePath() path: string
  ) {
    // Save file in 'bucket: nearby-<env>-bucket/caregiver_id/voice_name/voice_file_uuid.wav'
    return this.voiceService.registerVoice(email, vname, path);
  }

  @Patch('/train-voice')
  async trainUserVoice(
    
  ) {
      
  }

}
