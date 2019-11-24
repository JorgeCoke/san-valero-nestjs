import { ApiModelProperty } from "@nestjs/swagger";

export class SignupDto {
    @ApiModelProperty({type: String})
    email: string;
    @ApiModelProperty({type: String})
    password: string;
}