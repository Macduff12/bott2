// src/pages/api/events.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Event } from "../../types"; // Імплементуйте тип для події

// Mock data for example purposes
let events: Event[] = [
  { id: "1", title: "Event 1", date: "2024-08-01", description: "Description for event 1" },
  { id: "2", title: "Event 2", date: "2024-08-05", description: "Description for event 2" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else if (req.method === "POST") {
    const { title, date, description } = req.body;

    if (!title || !date || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEvent: Event = {
      id: (events.length + 1).toString(),
      title,
      date,
      description,
    };

    events.push(newEvent);
    res.status(201).json(newEvent);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
