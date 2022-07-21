import { 
    IsEmail, 
    IsPhoneNumber, 
    IsString 
} from "class-validator";

export class RegisterDto {

    @IsEmail()
    @IsString()
    public readonly email: string;

    @IsString()
    public readonly password: string;

    @IsString()
    public readonly name: string;

    @IsString()
    @IsPhoneNumber()
    public readonly phone_number: string;

}