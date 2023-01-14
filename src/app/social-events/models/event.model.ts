import { EventType } from "./event-type.model";

export interface Event {
    name: string;
    image: string;
    date: number;
    type: EventType;
    location: string;
    comments: number;
    likes: number;
    totalSeats: number;
    occupiedSeats: number;
    coordinates: string;
}