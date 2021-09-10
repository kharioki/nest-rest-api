import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/creat-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'This action returns all items';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `#${id} item`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Delete item #${id}`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemDto: CreateItemDto,
  ): string {
    return `Update item #${id} - Name: ${updateItemDto.name}`;
  }
}
