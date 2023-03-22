import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches } from "class-validator";

export class RegisterUserDto {
    @ApiProperty({
        name: 'email',
        type: 'string',
        required: true,
        uniqueItems: true,
        example: 'amir@gmail.com',
    })
    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase())
    email: string;
    
    @ApiProperty({
        name: 'username',
        type: 'string',
        required: true,
        uniqueItems: true,
        minLength: 3,
        example: 'amir',
    })
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    @Transform(({value}) => value.toLowerCase())
    username: string;

    @ApiProperty({
        name: 'password',
        type: 'string',
        required: true,
        minLength: 8,
        maxLength: 32,
        example: 'Amir1234*',
        description: 'User lowercase, uppercase, number and symbol',
    })
    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/, { message: 'password too weak' })
    password: string;
}