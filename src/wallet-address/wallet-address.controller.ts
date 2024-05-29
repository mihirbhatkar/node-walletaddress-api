import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Get()
  findAll() {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletAddressService.findOne(+id);
  }

  @Post()
  create(@Body() walletAddress: WalletAddress) {
    return this.walletAddressService.create(walletAddress);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() walletAddress: Partial<WalletAddress>) {
    return this.walletAddressService.update(+id, walletAddress);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletAddressService.remove(+id);
  }
}
