/**
* TodoModels.tsx
* Copyright: Microsoft 2018
*
* Data models used with Todo sample app.
*/

export interface Todo {
    id: string;
    creationTime: number;
    text: string;
    _searchTerms: string;
}


export interface CootiesEntries {
    ownerAddress: string;
    mint: boolean;
    metadataFilePath: string;
    nftId: string;
    title: string;
    imageFilePath: string; 
     description: string;

  }

export interface Entries {
    img: string;
    imgText: string;
    title: string;
    content: string;
    rarity: string;
    url: string;
  }

export interface Market{
    tokenId:string;
    marketId:string;
    tokenAddress:string;
    askingPrice:string;
    symbol:string;
    tokenImg:string;
    rarity:string;
    name:string;
    title:string;
    description:string;
    tokenUri:string;
    ownerOf:string;
}
export interface Cootie {
    ownerOf: string;
    tokenUri: string;
    tokenImg: string;
    address: string;
    forSale: boolean;
    number?: string;
    name: string;
    symbol:string;
    price: number;
    description: string;
    rarity: string;
    tokenId: string;
    _searchTerms: string;
}
