import { ApiModelProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiModelProperty({type: String})
    email: string;
    @ApiModelProperty({type: String})
    password: string;
}