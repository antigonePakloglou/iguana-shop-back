/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from 'class-validator';

export class DemandeAdoptionDTO {
  @IsString()
  email: string;

  @IsNumber()
  telephone: number;

  @IsNumber()
  numero_declaration: number;

  @IsNumber()
  iguaneId: number;

}
