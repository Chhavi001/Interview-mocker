import { FieldValue,Timestamp }  from "firebase/firestore";

export interface User{
    id:String;
    name:String;
    email:String;
    imageUrl:String;
    createdAt:Timestamp|FieldValue;
    updatedAt:Timestamp|FieldValue;
}

export interface Interview {
    id?: string;
    jsonMockResp: string;
    jobPosition: string;
    jobDesc: string;
    jobExperience: string;
    createdBy: string;
    createdAt: Timestamp | FieldValue;
    mockId: string;
}

export interface UserAnswer {
    id?: string;
    mockIdRef: string;
    question: string;
    correctAns?: string;
    userAns: string;
    feedback?: string;
    rating?: string;
    userEmail: string;
    createdAt: Timestamp | FieldValue;
}