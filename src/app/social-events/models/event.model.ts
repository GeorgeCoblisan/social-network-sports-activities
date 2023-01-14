import { User } from "src/app/account/models/user.model";
import { EventType } from "./event-type.model";

export interface Event {
    name: string;
    image: string;
    date: number;
    type: EventType;
    user: User;
    location: string;
    comments: number;
    likes: number;
    totalSeats: number;
    occupiedSeats: number;
    latitude: string;
    longitude: string;
}