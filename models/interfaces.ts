import { Timestamp } from "firebase/firestore";
export enum WorkType {
  Remote = 'remote',
  Online = 'online',
  Hybrid = 'hybrid',
}

export enum Status {
  Undecided = "undecided",
  Approved = "approved",
  Declined = "declined",
}

interface Post {
  title: string;
  body: string;
  organization: string;
  compensation: string;
  worktype: string;
  approvalMessage: string;
  expirationDate: Timestamp; // Expecting a Firestore Timestamp for expirationDate
  createdAt: Timestamp;
  approvedUsers: string[],
}

export interface Researcher {
  firstName: string;
  lastName: string;
  age: number;
  sex: string;
  bio: string;
  email: string;
  password: string;
  posts: string[];
}

export interface Message {
  postID: string,
  body: string,
  status: Status,
  seen: boolean
}

export interface Assistant {
  firstName: string;
  lastName: string;
  age: number;
  sex: string;
  bio: string;
  email: string;
  password: string;
  workType: WorkType;
}

export interface Application {
  assistantID: string;
  postID: string;
  status: Status;
  message: string;
  submittedAt: FirebaseFirestore.Timestamp;
}
