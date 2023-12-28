import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository : UserRepository,
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.userRepository.createUser(authCredentialsDto);
    }


    }