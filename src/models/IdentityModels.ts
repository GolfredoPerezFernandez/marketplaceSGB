/**
* IdentityModels.tsx
* Copyright: Microsoft 2018
*
* Type definitions for user identities.
*/

export type UserId = string;

export interface User {
    username:string;
    email:string;
    createdAt:string;
    sessionToken:string;
    emailVerified:boolean;
    updatedAt:string;
    avatar:any;
    objectId:string;
    ethAddress:string;
}

export interface userMoralis {
    username: string;
    email: string;
    createdAt: string;
    sessionToken: string;
    emailVerified: boolean;
    updatedAt: string;
    avatar: any;
    objectId: string;
    ethAddress: string;
  }