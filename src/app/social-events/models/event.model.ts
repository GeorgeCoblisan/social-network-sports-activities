import { User } from 'src/app/account/models/user.model';
import { EventType } from './event-type.model';
import { Location } from './location';

export interface Event {
  id: number;
  name: string;
  image: string;
  date: Date;
  type: EventType;
  user: User[];
  location?: Location;
  comments: number;
  likes: number;
  totalSeats: number;
  occupiedSeats: number;
}
