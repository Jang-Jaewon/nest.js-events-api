import { Controller, Get, Post, Patch, Delete, Param, Body } from "@nestjs/common";

@Controller('events')
export class EventsController {
  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id) {
    return id;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id) {
    return id;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return id;
  }
}
