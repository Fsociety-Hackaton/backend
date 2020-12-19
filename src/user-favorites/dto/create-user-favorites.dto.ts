import { ApiProperty } from "@nestjs/swagger";

export class CreateUserFavoritesDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly jobId: string;
    @ApiProperty()
    readonly date: string;
    @ApiProperty()
    readonly portal: string;
}
