import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';

@Controller('ping')
export class PingController {
  @Get()
  ping() {
    return { ok: true };
  }
  @Get('hello/:name')
  hello(@Param('name') name: string) {
    return { message: `Hello, ${name}!` };
  }
  @Get('sum')
  sum(
    @Query('a', ParseIntPipe) a: number,
    @Query('b', ParseIntPipe) b: number,
  ) {
    return { result: a + b };
  }
}
