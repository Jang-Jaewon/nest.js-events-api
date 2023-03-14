import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {} // CreateEvnetDto를 확장함과 동시에 모든 속성을 optional로 가짐
