import { PrismaService } from '../services/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createClientDto: CreateClientDto): import(".prisma/client").Prisma.Prisma__ClientClient<import(".prisma/client").Client>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateClientDto: UpdateClientDto): string;
    remove(id: number): string;
}
