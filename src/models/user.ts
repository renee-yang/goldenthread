
import { Charity } from '../models/charity';

export class User {

    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    profilepicture: string;
    location: string;
    charities: Array<Charity> = [];
    
}