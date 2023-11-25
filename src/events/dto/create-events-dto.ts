/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  url: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsDateString()
  @IsNotEmpty()
  startDate: string;
  @IsDateString()
  @IsNotEmpty()
  endDate: string;
  @IsNotEmpty()
  @IsString()
  type: string;
  @IsNotEmpty()
  @IsOptional()
  participants: string[];
}
