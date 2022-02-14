import React from "react"; 
import { Routes, Route, Link ,useNavigate} from "../../react-router";
import { Box, Text, } from "native-base";

import Header from '../components/Header'
import Footer from '../components/Footer'

import {Home} from '../screens/Home'
import Obras from '../screens/Obras'
import Artistas from '../screens/Artistas'
import Colecciones from '../screens/Colecciones'
import CrearNft from '../screens/CrearNft'

import { Dimensions,Image, ImageBackground, View } from "react-native";
import ResponsiveWidthStore from "../stores/ResponsiveWidthStore";
import CurrentUserStore from "../stores/CurrentUserStore";

import ParticlesBg from 'particles-bg';




export interface Props {
}

interface State {
  width: number;
  user:any;
  loading:boolean;
  height: number;
}
import { ComponentBase } from 'resub';

import MouseParticles from 'react-mouse-particles'

export default class RootNavigationContainer extends ComponentBase<Props, State> {
  protected _buildState(props: Props, initState: boolean) {
   

     const partialState: Partial<State> = {
      user: CurrentUserStore.getUser(),
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
      loading: CurrentUserStore.getLoading(),
     
  };
  
  return partialState;
  }

     _onLayoutRootView() {
       var  xwidth  = Dimensions.get('window').width;
       var  xheight  = Dimensions.get('window').height;
       ResponsiveWidthStore.putWindowSize(xwidth, xheight);
   } 
  render() {
    return (
      
      <Box    onLayout={this._onLayoutRootView} >   
      <ImageBackground
    style={{flex:1,alignSelf:'stretch'}}
    source={{
      uri:"https://gateway.pinata.cloud/ipfs/QmQrtQPv6CKwd2KgiJ4x5wt8zAmzWWCdeK2EjNpwKoTjQL",

    }}
  > 

   <ParticlesBg   type="cobweb" color="#FF499C"  bg={true} />
  <MouseParticles g={1} color="random" cull="col,image-wrapper"/>

      <Box    >     
        
            
   
    <Header user={this.state.user} loading={this.state.loading}  height={this.state.height} width={this.state.width} />
    
    <Box>
  
      
    <Routes>
        <Route  path="/" element={<Home height={this.state.height} width={this.state.width}/>} />
        <Route path="/Obras"  element={<Obras height={this.state.height} width={this.state.width}/>} />
        <Route path="/Artistas" element={<Artistas/>} />
        <Route path="/Colecciones" element={<Colecciones/>} />
        <Route path="/CrearNft" element={<CrearNft/>} />
        {/* <Route path="/About" element={<About/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/About" element={<About/>} /> */}
  
    </Routes>
    </Box>
    <Footer height={this.state.height} width={this.state.width} />
    
    </Box>
    </ImageBackground>
    </Box>
    );
  }
}


