import React, {useState} from 'react'
import {View} from 'react-native'
import {Box, Pressable,Button as Btn} from 'native-base'
import {MotiView} from '@motify/components'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, } from 'react-native';
import { AnimatePresence } from 'moti';

import { useMoralis } from 'react-moralis';

import {
  Text,
} from "native-base";
import CurrentUserStore from '../stores/CurrentUserStore';



const LoadingIndicator =({size}: {size: number}) =>{

  const [colors, setColors] = useState(['#FF499C','white', '#172159']);
  const [colors2, setColors2] = useState([ 'blue','red', 'black']);


return(  <AnimatePresence >

<MotiView


               style={[styles.overlay,{
                 width:' 100%', 
                 height:'100%',
                 alignItems:'center',
                 alignSelf:'center'
                }]

                }

                  from={{
  
  
                    rotate: "-180deg", 
                           
                    
                  }}
                  animate={{

                        
                    rotate: "180deg"        
                
                  }}
             
                  transition={{
                      loop: true,
                      type: 'timing',
                      duration: 2000,
                    
                  }}
                  >
                    
                      <LinearGradient

                        // Background Linear Gradient
                        colors={colors}
                        style={styles.overlay}

                      />


                  </MotiView>
                  
                   </AnimatePresence>
                 )

}

export default function Button(){

  const {authenticate,authError,isAuthenticating ,Moralis} = useMoralis();



  const handleLogin=async ()=> {   
   await Moralis.enableWeb3()
   const chainId2 = 19;
   const chainName = "Songbird";
   const currencyName = "SGB";
   const currencySymbol = "SGB";
   const rpcUrl = "https://songbird.towolabs.com/rpc";
   const blockExplorerUrl = "https://explorer-mumbai.maticvigil.com/";
   
  
   await Moralis.addNetwork(
       chainId2,
       chainName,
       currencyName,
       currencySymbol,
       rpcUrl,
       blockExplorerUrl
   )

   
   const CHAIN2 = await Moralis.chainId;
   if (CHAIN2 !== '0x13') {

    await Moralis.switchNetwork('0x13').then(()=>{

    
    });

   }

   const chainId = await Moralis.chainId;
   if (chainId !== '0x13') {
    CurrentUserStore.setLogin(false)
    CurrentUserStore.setLoading(false)
    return
   }
   console.log(chainId)
   

   /* 
   await Moralis.authenticate({ type:'sol' }).then(async (user: any) => {
console.log("user "+JSON.stringify(user))

let email = user.get('email')
let username = user.get('username')
let createdAt = user.get('createdAt')
let sessionToken = user.get('sessionToken')
let updatedAt = user.get('updatedAt')
let address = user.get('ethAddress')
CurrentUserStore.setUser(username, email, createdAt, sessionToken, updatedAt, '', address)

CurrentUserStore.setLoading(true)
   return

})}  */

CurrentUserStore.setLoading(true)
  await Moralis.authenticate({ provider:"web3Auth",
    clientId:"BHlMxAxRkiaMCQ1HWI8c88_6NlCt7UElI6o3aYwaZp0vY5UkTuoPc3u4sFRzjHV2lakY-iMH6Usz5_0IkfbjEsE",
    theme:"dark",
    loginMethodsOrder:["google", "facebook", "twitter", "reddit", "discord", "twitch", "apple", "line", "github", "kakao", "linkedin", "weibo", "wechat", "email_passwordless"],
    signingMessage: "Welcome to The Cooties." }).then(async (user: any) => {
console.log("user "+JSON.stringify(user))

let email = user.get('email')
let username = user.get('username')
let createdAt = user.get('createdAt')
let sessionToken = user.get('sessionToken')
let updatedAt = user.get('updatedAt')
let address = user.get('ethAddress')
CurrentUserStore.setUser(username, email, createdAt, sessionToken, updatedAt, '', address)

CurrentUserStore.setLoading(false)
    return

})
  } 

    return(
<View>
  
<Btn backgroundColor={'transparent'} onPress={handleLogin}>
      <Box
      
      
      rounded="full" 
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
      style={{width:180,
        height:60,
       
      }}> 

      <LoadingIndicator size={300}  />

      <Box rounded="full" 
 style={{width:170,
  justifyContent:"center",
  alignItems:"center",
  height:50, }} backgroundColor='white' >

<Text color="black" fontWeight={"bold"} fontSize="18">{'Authenticate'}</Text>
</Box>
</Box>
   
      </Btn>
      </View>



 
)



};
const styles = StyleSheet.create({

  background: {
    ...StyleSheet.absoluteFillObject,
   

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    
  },
});