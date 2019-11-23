import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class User {
    @ApiModelPropertyOptional({type: Number})
    id: number;
    @ApiModelProperty({type: String})
    email: string;
    @ApiModelProperty({type: String})
    password: string;
}
