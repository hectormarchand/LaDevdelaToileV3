import type { EventLocation } from "./EventLocation.ts";

export type Event = {
    title: string;
    description: string;
    location: EventLocation;
    path: string;
    icon?: string;
  }