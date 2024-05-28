import React from 'react';

import { Badge } from './components/Badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './components/Dialog';

import { TimelineEvent } from 'types/visualizations';

import './TimelineDialog.css';

export interface TimelineDialogProps {
  event: TimelineEvent;
}
const TimelineDialog = ({ event }: TimelineDialogProps) => (
    <Dialog>
      <DialogTrigger>{event.summary}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{event.summary}</DialogTitle>
          <DialogDescription>{event.description}</DialogDescription>
        </DialogHeader>
        <span className="timeline-dialog-first-class">
          Author: {event.author}
        </span>
        {event.tags && (
          <div className="flex flex-wrap">
            <span className="timeline-dialog-first-class">
              Tags:
            </span>
            <ul className="flex ml-2 flex-wrap">
              {event.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="timeline-dialog-second-class"
                >
                  {tag.name}
                </Badge>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
);

export default TimelineDialog;
