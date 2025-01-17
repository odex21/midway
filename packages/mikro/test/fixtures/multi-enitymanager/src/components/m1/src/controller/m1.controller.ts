import { Controller, Get } from '@midwayjs/core';
import {
  InjectEntityManager,
  InjectRepository,
} from '../../../../../../../../src';
import { EntityManager } from '@mikro-orm/core';
import { User } from '../entity/user.entity';
import { EntityRepository } from '@mikro-orm/sqlite';
@Controller('/m1')
export class HomeController {
  @InjectEntityManager('default1')
  em: EntityManager;

  @InjectRepository(User, 'a1')
  userRepo: EntityRepository<User>;

  @Get('/')
  async home() {
    return await this.em.findAll(User);
  }

  @Get('/withEntity')
  async withEntity() {
    return await this.userRepo.findAll();
  }
}
