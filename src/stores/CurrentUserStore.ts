/**
* CurrentUserStore.tsx
* Copyright: Microsoft 2018
*
* Singleton store that maintains information about the currently-signed-in user.
*/

import _ from 'lodash';

import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub';
import { User } from '../models/IdentityModels';
import { Cootie, Market } from '../models/TodoModels';

@AutoSubscribeStore
export class CurrentUserStore extends StoreBase {
    // TODO - properly initialize
    private _user: User = {
        createdAt: '',
        updatedAt: '',
        emailVerified: false,
        sessionToken: '',
        email: '',
        username: '',
        objectId:'',
        avatar:'',
        ethAddress:''
    };  
      private phase: string = ''
      private phaseLogin: string = ''

    
      private specialNfts =[{
        url: 'https://thecooties.mypinata.cloud/ipfs/QmaS7Ju4o7UUByTiYHdc2z47z5iXZNus47hAJX37wAhSaP?preview=1',
        price: ' Free ',
        description:'Mr Cootie',
        id:'0',
    }, {
        url: 'https://thecooties.mypinata.cloud/ipfs/QmPD3HQh2xpvF7v9oEiQnve6dWFbMr4E5jRomgai5mvzrV',
        price: '3000 SGB',
        description:'Nero',
        id:'1',
    },{
        url: 'https://thecooties.mypinata.cloud/ipfs/QmTzKg5n8Pm1bWNiiTCSP6y7KgUNefL5YvpLBzb7x3p9TZ',
        price: '3000 SGB',
        description:'Orion',
        id:'2'
    },{
        url: 'https://thecooties.mypinata.cloud/ipfs/Qmeyy9E7qkswyZEet8143o28LNPL7XXvuFAWhWH1QMwimg',
        price: '3000 SGB',
        description:'Nebula',
        id:'3'
    },{
        url: 'https://thecooties.mypinata.cloud/ipfs/QmW4DnYEosrGgdqbPEf5tdMv65CDFLZ9rp7bTPxUqVuYi7',
        price: '3000 SGB',
        description:'Venus',
        id:'4'
    }]
    private _extension: string = ''
    @autoSubscribe
    getExtension() {

        return this._extension
    }
    private supply: number = 0
    private holders: number = 0
    
  private priceToken: number = 0
  private loading: boolean = false
  @autoSubscribe
  getLoading(): boolean {
      return this.loading
  }
  @autoSubscribe
  getPriceToken(): number {
      return this.priceToken
  }
  @autoSubscribe
  getHolders(): number {
      return this.holders
  }
  setPriceToken(price: number) {
      
   

        this.priceToken = price
    
      this.trigger()
      }
      setLoading(price: boolean) {
          
       
    
        this.loading = price
    
      this.trigger()
      }
  setHolders(price: number) {
      
   

    this.holders = price

  this.trigger()
  }
  private burn: number = -1
  @autoSubscribe
  getSupply(): number {
      return this.supply
  }
  setSupply(price: number) {
      
   

    this.supply = price

  this.trigger()
  }
  @autoSubscribe
  getBurn(): number {
      return this.burn
  }
  setBurn(price: number) {
      
   

    this.burn = price

  this.trigger()
  }
  private totalsupply: number = 0
  @autoSubscribe
  getTotalSupply(): number {
      return this.totalsupply
  }
  setTotalSupply(price: number) {
      
   

    this.totalsupply = price

  this.trigger()
  }
    private activeId: string = 'cooties'
    @autoSubscribe
    getActive() {

        return this.activeId
    }

    setActive(password: string) {
        this.activeId = password
        this.trigger()
    }
    setExtension(extension:string){
        this._extension=extension
        this.trigger()
    }
    setUser(username:string,email:string,createdAt:string,sessionToken:string,updatedAt:string,avatar:string,ethAddress:string) { 
       
        this._user = {
            createdAt,
            updatedAt,
            emailVerified: false,
            sessionToken,
            email,
            username,
            objectId:'',
            avatar ,
            ethAddress,
        };
        console.log(this._user)
        this.trigger();

    }
    
    @autoSubscribe
    getMarketByIdSongbird(todoId: string){ 
        return _.find(this._itemMarketSongbird, todo => todo.tokenId === todoId);
    }
    @autoSubscribe
    getMarketByIdPolygon(todoId: string){ 
       // return _.find(this._itemMarketPolygon, todo => todo.uid === todoId);
    }
    private receiver:any = ""
    private price:any = 1
    @autoSubscribe
    getPrice(): any {
        return this.price;
    }
    @autoSubscribe
    getReceiver(): any {
        return this.receiver;
    }
    setReceiver(user: any) {
        this.receiver = user
        this.trigger();

    }
    setPrice(user: any) {
        this.price = user
        this.trigger();

    }
    @autoSubscribe
    getPhaseLogin(): string {
        return this.phaseLogin;
    }
    setPhaseLogin(user: string) {
        this.phaseLogin = user
        this.trigger();

    }
    @autoSubscribe
    getPhase(): string {
        return this.phase;
    }
    setPhase(user: string) {
        this.phase = user
        this.trigger();

    }
    private _itemMarketAvalanche: Market[] = []
    private _itemMarketBinance: Market[] = []
    private _itemMarketSongbird: Market[] = []
    private _itemMarketPolygon: Market[] = []
    @autoSubscribe
    getMarketPolygon(): Market[] {
        return this._itemMarketPolygon
    }
    @autoSubscribe
    getMarketSongbird(): Market[] {
        return this._itemMarketSongbird
    }
    @autoSubscribe
    getMarketBinance(): Market[] {
        return this._itemMarketBinance
    }
    @autoSubscribe
    getMarketAvalanche(): Market[] {
        return this._itemMarketAvalanche
    }

    @autoSubscribe
    getUser(): User | undefined {
        return this._user;
    }
    
    private isAllCooties: boolean = false
    @autoSubscribe
    getIsAllCooties(): boolean {
        return this.isAllCooties
    }

    @autoSubscribe
    getSpecialNfts(): any {
        return this.specialNfts
    }
    setIsAllCooteis(user: boolean) {
        this.isAllCooties = user
        this.trigger();

    }
   
    private isMarketplace: boolean = false
    @autoSubscribe
    getMarketplace(): boolean {
        return this.isMarketplace
    }
    
    setIsMarketplace(user: boolean) {
        this.isMarketplace = user
        this.trigger();

    }
    private _userOnSaleItemsBinance:Cootie[]=[] 
    private _userOnSaleItemsAvalanche:Cootie[]=[] 
    private _userOnSaleItemsPolygon:Cootie[]=[]
    private _userOnSaleItemsSongbird:Cootie[]=[] 
    setOnSaleItemsPolygon(len: [],item?:Cootie) { 
        if(item){
        this._userOnSaleItemsPolygon.push(item)
    } else {

        this._userOnSaleItemsPolygon = len
    }
        this.trigger()
    }
  
    removeItemFromOnSaleAvalanche(uid:string,address:string) { 
        

        this._userOnSaleItemsAvalanche =  this._userOnSaleItemsAvalanche.filter((value)=>value.tokenId!=uid&&"0x669275dD045c44FC05ded5374A596138Eb0D6D82"!=address);
         this.trigger()
    }
     removeItemFromMarketplaceAvalanche(uid:string,add:string) { 
       
      //   this._itemMarketBinance =  this._itemMarketBinance.filter((value)=>value.uid!=uid);
         this.trigger()
     }  
    removeItemFromOnSaleBinance(uid:string,address:string) { 
        

        this._userOnSaleItemsBinance =  this._userOnSaleItemsBinance.filter((value)=>value.tokenId!=uid&&"0x669275dD045c44FC05ded5374A596138Eb0D6D82"!=address);
         this.trigger()
    }
     removeItemFromMarketplaceBinance(uid:string,add:string) { 
       
       //  this._itemMarketBinance =  this._itemMarketBinance.filter((value)=>value.uid!=uid);
         this.trigger()
     }
     removeItemFromOnSaleSongbird(uid:string,address:string) { 
         
 
         this._userOnSaleItemsSongbird =  this._userOnSaleItemsSongbird.filter((value)=>value.tokenId!=uid&&"0x669275dD045c44FC05ded5374A596138Eb0D6D82"!=address);
          this.trigger()
     }
    removeItemFromOnSalePolygon(uid:string,address:string) { 
        

        this._userOnSaleItemsPolygon =  this._userOnSaleItemsPolygon.filter((value)=>value.tokenId!=uid&&"0x669275dD045c44FC05ded5374A596138Eb0D6D82"!=address);
         this.trigger()
    }
    removeItemFromMarketplaceSongbird(tokenId:string) { 
      
        this._itemMarketSongbird =  this._itemMarketSongbird.filter((value)=>value.tokenId!==tokenId);
        this.trigger()
    }
     removeItemFromMarketplacePolygon(uid:string,add:string) { 
       
//this._itemMarketPolygon =  this._itemMarketPolygon.filter((value)=>value.uid!=uid);
         this.trigger()
     }
     @autoSubscribe
     getTotalMarketAvalanche(): number {
         return this._totalMarketAvalanche
     } 
     @autoSubscribe
     getTotalMarketBinance(): number {
         return this._totalMarketBinance
     } 
     @autoSubscribe
     getTotalMarketSongbird(): number {
         return this._totalMarketSongbird
     }
    @autoSubscribe
    getTotalMarketPolygon(): number {
        return this._totalMarketPolygon
    }
    @autoSubscribe
    getItemAvalanche(nftId: string,nftContractAddress:string): Cootie|undefined {
        var find = this._userOnSaleItemsAvalanche.filter(function(result:Cootie) {
            return (result.tokenId === nftId &&"0x669275dD045c44FC05ded5374A596138Eb0D6D82"===nftContractAddress);
          });
          return find[0];
    }
    @autoSubscribe
    getItemBinance(nftId: string,nftContractAddress:string): Cootie|undefined {
        var find = this._userOnSaleItemsBinance.filter(function(result:Cootie) {
            return (result.tokenId === nftId &&"0x669275dD045c44FC05ded5374A596138Eb0D6D82"===nftContractAddress);
          });
          return find[0];
    }
    @autoSubscribe
    getItemPolygon(nftId: string,nftContractAddress:string): Cootie|undefined {
        var find = this._userOnSaleItemsPolygon.filter(function(result:Cootie) {
            return (result.tokenId === nftId &&"0xd412EaBADFd2a22EEE0285Cd4AbA945b426a0b48"===nftContractAddress);
          });
          return find[0];
    }

    @autoSubscribe
    getItemSongbird(nftId: string,nftContractAddress:string): Cootie|undefined {
        var find = this._userOnSaleItemsPolygon.filter(function(result:Cootie) {
            return (result.tokenId === nftId &&"0xFdfDab3Df0fFE67b735b7B78acf3356913bbcEe7"===nftContractAddress);
          });
          return find[0];
    }
    private _itemSoldSongbird: Market[] = []
    private _itemSoldPolygon: Market[] = []
    private _itemSoldBinance: Market[] = []
    private _itemSoldAvalanche: Market[] = []
    @autoSubscribe
    getSoldItemsBinance(): Market[] {
        return this._itemSoldBinance
    }
    @autoSubscribe
    getSoldItemsAvalanche(): Market[] {
        return this._itemSoldAvalanche
    }
    @autoSubscribe
    getSoldItemsPolygon(): Market[] {
        return this._itemSoldPolygon
    }
    setSoldItemsAvalanche(len: Market[],item?:Market) { 
        if(item){
        this._itemSoldAvalanche.push(item)
    } else {

        this._itemSoldAvalanche = len
    }
        this.trigger()
    }
    setSoldItemsBinance(len: Market[],item?:Market) { 
        if(item){
        this._itemSoldBinance.push(item)
    } else {

        this._itemSoldBinance = len
    }
        this.trigger()
    }
    setSoldItemsSongbird(len: Market[],item?:Market) { 
        if(item){
        this._itemSoldSongbird.push(item)
    } else {

        this._itemSoldSongbird = len
    }
        this.trigger()
    }
    setSoldItemsPolygon(len: Market[],item?:Market) { 
        if(item){
        this._itemSoldPolygon.push(item)
    } else {

        this._itemSoldPolygon = len
    }
        this.trigger()
    }
    private _totalMarketBinance: number= 0
    private _totalMarketAvalanche: number= 0
    private _totalMarketPolygon: number= 0
    private _totalMarketSongbird: number= 0
    
    setItemForMarketSongbird(len: Market[],item?:Market) { 
        if(item){
        this._itemMarketSongbird.push(item)
    } else {

        this._itemMarketSongbird = len
    }
        this.trigger()
    }
    setItemForMarketBinance(len: Market[],item?:Market) { 
        if(item){
        this._itemMarketBinance.push(item)
    } else {

        this._itemMarketBinance = len
    }
        this.trigger()
    }
    setItemForMarketAvalanche(len: Market[],item?:Market) { 
        if(item){
        this._itemMarketAvalanche.push(item)
    } else {

        this._itemMarketAvalanche = len
    }
        this.trigger()
    }
    
    
    setItemForMarketPolygon(len: Market[],item?:Market) { 
        if(item){
        this._itemMarketPolygon.push(item)
    } else {

        this._itemMarketPolygon = len
    }
        this.trigger()
    }
    
    setSetTo(side: number) {
        this.setTo = side
        this.trigger();

    }

    private setTo = 0
    @autoSubscribe
    getSetTo(): number {
        return this.setTo
    }
    private _sideMenu = false
    @autoSubscribe
    getSideMenu(): boolean {
        return this._sideMenu
    }

    setSideMenu(side: boolean) {
        this._sideMenu = side
        this.trigger();

    }
    async updateCootieMarketPolygon(item: Market) {
        let others = _.filter(this._itemMarketPolygon, todo => todo.tokenId !== item.tokenId)
       
        if (item) {
            this._itemMarketPolygon = [...others, item];

        }


        // Asynchronously write the new todo item to the DB.

        this.trigger();

        return
    }
    
    async updateCootieMarketSongbird(item: Market) {
        let others = _.filter(this._itemMarketSongbird, todo => todo.tokenId !== item.tokenId)
       
        if (item) {
            this._itemMarketSongbird = [...others, item];

        }


        // Asynchronously write the new todo item to the DB.

        this.trigger();

        return
    }
    setTotalMarketBinance(total:number) { 
 
        this._totalMarketBinance = total
        this.trigger()
    }
    setTotalMarketAvalanche(total:number) { 
 
        this._totalMarketAvalanche = total
        this.trigger()
    }
    setTotalMarketPolygon(total:number) { 
 
        this._totalMarketPolygon = total
        this.trigger()
    }

    setTotalMarketSongbird(total:number) { 
 
        this._totalMarketSongbird = total
        this.trigger()
    }
    private _network: string = "Songbird"
    @autoSubscribe
    getNetwork(): string {
        return this._network
    }
    setNetwork(user: string) {
        this._network = user
        this.trigger();
    }

    private isCooties: boolean = false
    @autoSubscribe
    getIsCooties(): boolean {
        return this.isCooties
    }
    setisCooteis(user: boolean) {
        this.isCooties = user
        this.trigger();

    }
    private isLoading: boolean = false
    @autoSubscribe
    getIsLoading(): boolean {
        return this.isLoading
    }
    setIsLoading(user: boolean) {
        this.isLoading = user
        this.trigger();

    }

    private _isAdmin: boolean = false
    @autoSubscribe
    getisAdmin(): boolean {
        return this._isAdmin
    }
    setIsAdmin(user: boolean) {
        this._isAdmin = user
        this.trigger();

    }

    private _isLogin: boolean = false
    @autoSubscribe
    getLogin(): boolean {
        return this._isLogin
    }
    setLogin(user: boolean) {
        this._isLogin = user
        this.trigger();

    }
    @autoSubscribe
    getFullName(): string {
        return this._user ? this._user.ethAddress : '';
    }
}

export default new CurrentUserStore();
