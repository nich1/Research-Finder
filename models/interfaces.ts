export enum WorkType {
  Remote = 'remote',
  Online = 'online',
  Hybrid = 'hybrid',
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
