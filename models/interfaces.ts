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

export interface Post {
  researcherID: string;
  researcherName: string;
  title: string;
  body: string;
  organization: string;
  compensation: string;
  approvalMessage: string;
  workType: WorkType;
  approvedUsers: string[];
  expirationDate: FirebaseFirestore.Timestamp;
  createdAt: FirebaseFirestore.FieldValue;
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
