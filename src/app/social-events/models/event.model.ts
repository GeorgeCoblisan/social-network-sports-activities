import { EventType } from "./event-type.model";
import {Location} from "./location";

export interface Event {
    id: number;
    name: string;
    image: string;
    date: Date;
    type: EventType;
    location?: Location;
    comments: number;
    likes: number;
    totalSeats: number;
    occupiedSeats: number;
}
