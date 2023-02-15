import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserDto {
    @ApiProperty({
        name: 'email',
        type: 'string',
        required: true,
        uniqueItems: true,
        example: 'amir@gmail.com',
    })
    email: string;
    
    @ApiProperty({
        name: 'username',
        type: 'string',
        required: true,
        uniqueItems: true,
        example: 'amir',
    })
    username: string;

    @ApiProperty({
        name: 'password',
        type: 'string',
        required: true,
        example: 'Amir1234*',
    })
    password: string;
}