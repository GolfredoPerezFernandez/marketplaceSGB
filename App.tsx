import React from 'react'
import RootNavigationContainer from './src/navigation/RootNavigationContainer'
import { Router} from "./react-router.js";
import { NativeBaseProvider, Box } from "native-base";
import { MoralisProvider } from "react-moralis";


export default function App()  {

  return (

  <Router>
     
    <NativeBaseProvider>
    <MoralisProvider appId="ZHKhvfOskckrou50OpgiFJHns5UC2GEsofXRYfDe" serverUrl="https://p4twaxf1ahpe.usemoralis.com:2053/server">
    
    <RootNavigationContainer/>

    </MoralisProvider>
    </NativeBaseProvider>

  </Router>


  )
}

//  yarn add resub react-mouse-particles react-moralis react-moralis particles-bg moti expo-linear-gradient @motify/components react-dropzone moralis react-native-reanimated @web3auth/web3auth