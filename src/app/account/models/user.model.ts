import { Event } from '../../social-events/models/event.model';

export interface User {
    name: string;
    email: string;
    password: string;
    events?: Event[];
    xp?: number;
    level?: number;
}