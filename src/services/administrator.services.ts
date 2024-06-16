<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
/*
>>>>>>> cfa4f08a45f4bc7d24d4e1f4e38fa4d5809141d5
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AdministratorEntity } from '../entities/administrator.entity';


@Injectable()
export class AdministratorServices {
  constructor(
    @Inject('ADMINISTRATOR_REPOSITORY')
    private readonly administratorRepository: Repository<AdministratorEntity>,
  ) {}

  async findAll() {
    const administrators = await this.administratorRepository.find();
    return administrators;
  }

  async findAdministrator(idAdministrator: string) {
    const administrator = await this.administratorRepository.findOne({ where: { idAdministrator: idAdministrator } });;

    if (!administrator) {
      throw new NotFoundException(`Administrator with ID ${idAdministrator} not found`);
    }

    return administrator;
  }

  async create(payload: any) {
    const newAdministrator = new AdministratorEntity();
    newAdministrator.name = payload.name;
    newAdministrator.lastName = payload.lastName;
    newAdministrator.email = payload.email; 
    newAdministrator.password = payload.password;
    newAdministrator.cellphone = payload.cellphone;
    newAdministrator.birthdate = payload.birthdate;
    newAdministrator.state = payload.state;

    return await this.administratorRepository.save(newAdministrator);
  }

  async update(idAdministrator: string, payload: any) {
    let administrator = await this.findAdministrator(idAdministrator);

    administrator.name = payload.name;
    administrator.lastName = payload.lastName;
    administrator.email = payload.email;
    administrator.password = payload.password;
    administrator.cellphone = payload.cellphone;
    administrator.birthdate = payload.birthdate;
    administrator.state = payload.state;

    return await this.administratorRepository.save(administrator);
  }

<<<<<<< HEAD
  async softDelete(idAdministrator: string) {
    if (!idAdministrator) {
      throw new NotFoundException('ID is required for deletion');
    }

    const deleteResult = await this.administratorRepository.softDelete({ idAdministrator });
=======
<<<<<<< HEAD
  async softDelete(idAdministrator: string) {
    const deleteResult = await this.administratorRepository.softDelete(idAdministrator);
=======
  async delete(idAdministrator: string) {
    const deleteResult = await this.administratorRepository.delete(idAdministrator);
>>>>>>> cfa4f08a45f4bc7d24d4e1f4e38fa4d5809141d5
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf

    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Administrator with ID ${idAdministrator} not found`);
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    await this.administratorRepository.softDelete(idAdministrator);
    return deleteResult;
  }
}
=======
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf

    return deleteResult;
  }
}
<<<<<<< HEAD
=======
*/
>>>>>>> cfa4f08a45f4bc7d24d4e1f4e38fa4d5809141d5
>>>>>>> be85e3cb24f032ec8c6c096b942753108c0640cf
