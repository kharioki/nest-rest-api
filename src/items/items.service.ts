import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '1',
      name: 'Item One',
      description: 'This is item One',
      qty: 100,
    },
    {
      id: '2',
      name: 'Item Two',
      description: 'This is item Two',
      qty: 90,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
