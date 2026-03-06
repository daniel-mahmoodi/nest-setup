import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlogDto } from './dtos/blog.dto';

@ApiTags('blog')
@Controller('blog')
export class BlogController {
  @Get()
  findAll(@Query() queryParams: { page: number; limit: number }) {
    return 'This action returns all blogs';
  }

  @Post()
  create(@Body() Body: BlogDto) {
    console.log(Body.title);
    console.log(Body.content);
    return 'This action adds a new blog';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Body: BlogDto) {
    console.log(id);
    console.log(Body.title);
    console.log(Body.content);
    return 'This action updates a blog';
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    console.log(id);
    return 'This action deletes a blog';
  }
  @Patch(':id')
  patch(@Param('id') id: string, @Body() Body: BlogDto) {
    console.log(id);
    console.log(Body.title);
    console.log(Body.content);
    return 'This action patches a blog';
  }
}
