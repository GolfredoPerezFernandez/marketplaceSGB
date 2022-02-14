import React, { useState,useCallback } from "react";
import {
  Text,
  Modal,
  FormControl,
  Input,
  HStack,
  VStack,
  Box,
  Image,
  Button,
  Center,
  Pressable,
  Menu
} from "native-base";

import {useNavigate } from "../../react-router";

import { Icon } from 'native-base';
import { MaterialCommunityIcons ,  } from '@expo/vector-icons'; 

import { Ionicons,  } from '@expo/vector-icons'; 
import { View } from "react-native";


export default function Footer({width,height}) {

  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();

  function handleClick() { navigate("/About")}
  function handleClickHome() {navigate("/")}
  function handleClickObras() { navigate("/Obras") }
  function handleClickArtistas() {navigate("/Artistas")}
  function handleClickColecciones() {navigate("/Colecciones")}
  function handleClickCrearNft() {navigate("/CrearNft")}


  return (
    <View style={{height:500,width:width,opacity:0.5}} >
    <Box flex="1" backgroundColor={"black"} >

      {/* Inicio menu */}
      {width<1300? <Box >
            
            <HStack justifyContent='center' alignItems="center" width={width}    >
                
  {/* LOGO */}
                  <Center  >
          
                  <Box justifyContent='center' alignItems="center" flexDirection={"column"}>
                  <Image
                  minWidth={180}
                    source={{
                      uri:"https://gateway.pinata.cloud/ipfs/QmR3EJqMF5C2vd6grQZJ6YwT9j2SxZWBZGZfKERJmqdiwp"
                    }}
                    resizeMode='contain'
                    alt="Logo"
                    width={width*0.3}
                    marginTop={10}
                    marginBottom={5}
                    justifyContent='center' alignItems="center"
                    pl='3'
                    pt="20"
                  />
  <Text style={{color:'#A1A1A1',width:width*0.7,textAlign:"center",fontSize:18,}}>{"Marketplace for monster character collections non fungible token NFTs."}</Text>
      
  </Box>
                </Center>
                </HStack>
  {/* FIN LOGO */}
  
  {/* Menu Botones */}
            <HStack width={width} mt={10} flexDirection="row" justifyContent='center' alignItems="center"  >
  
  
  
                <Box alignSelf={'center'} justifyContent='center' alignItems="center">
    
                <Center width={width*0.33} height={'150'} justifyContent='center' alignItems="center" > 
                
  <Text color="#EB3385" fontWeight={'bold'} marginBottom={5} fontSize="1xl">Marketplace</Text>
  <Text color="#A1A1A1" fontSize="1xl">All NFTs</Text>
  <Text color="#A1A1A1" fontSize="1xl">How it works</Text>
  <Text color="#A1A1A1" fontSize="1xl">create</Text>
  <Text color="#A1A1A1" fontSize="1xl">explore</Text>
  <Text color="#A1A1A1" fontSize="1xl">Privacy & terms</Text>
              </Center>
             
    </Box>
  
    <Box alignSelf={'center'} justifyContent='center' alignItems="center">
    
    <Center width={width*0.33} height={'150'} justifyContent='center' alignItems="center" > 
    
    <Text fontWeight={'bold'}marginBottom={5}   color="#EB3385" fontSize="1xl">Community</Text>
  
  <Text color="#A1A1A1" fontSize="1xl">All NFTs</Text>
  <Text color="#A1A1A1" fontSize="1xl">How it works</Text>
  <Text color="#A1A1A1" fontSize="1xl">create</Text>
  <Text color="#A1A1A1" fontSize="1xl">explore</Text>
  <Text color="#A1A1A1" fontSize="1xl">Privacy & terms</Text>
  </Center>
 
</Box>
              
  
              
              
                </HStack>
          </Box>: <Box >
            
            <HStack width="100%" justifyContent='center' alignItems="center" space='13%'  >
                
                  <Center  justifyContent='center' alignItems="center" >
          
                  <Box marginTop={"100"} justifyContent={"center"} alignItems={'center'} flexDirection={"column"}>
                  <Image
                    source={{
                      uri:"https://gateway.pinata.cloud/ipfs/QmR3EJqMF5C2vd6grQZJ6YwT9j2SxZWBZGZfKERJmqdiwp"
                    }}
                    resizeMode='contain'
                    alt="Logo"
                    height="150"
                    width="300"
                    pt="20"
                  />
                  <Text style={{color:'white',fontSize:18,marginLeft:80,width:width*0.2,}}>{"Lorem ipsum dolor sitamet,consectetuer adipiscing elit, sed diam nonummy nibh tincidunt ut laoreet dolore magna."}</Text>
                      
                  </Box>
  
                </Center>
                <Center justifyContent='center' alignItems="center">
                <HStack justifyContent='center' alignItems="center" space={3} paddingTop={60} >
  <View>
  
  <Text color="#EB3385" fontWeight={'bold'} marginBottom={5} fontSize="2xl">Marketplace</Text>
  <Text color="#A1A1A1" fontSize="2xl">All NFTs</Text>
  <Text color="#A1A1A1" fontSize="2xl">How it works</Text>
  <Text color="#A1A1A1" fontSize="2xl">create</Text>
  <Text color="#A1A1A1" fontSize="2xl">explore</Text>
  <Text color="#A1A1A1" fontSize="2xl">Privacy & terms</Text>
                {/* Primer Boton */}
                </View>

                <View style={{justifyContent:'center',marginLeft:100,marginRight:100,alignItems:'flex-start'}}>
  
               <Text fontWeight={'bold'}marginBottom={5}   color="#EB3385" fontSize="2xl">Community</Text>
  
<Text color="#A1A1A1" fontSize="2xl">All NFTs</Text>
<Text color="#A1A1A1" fontSize="2xl">How it works</Text>
<Text color="#A1A1A1" fontSize="2xl">create</Text>
<Text color="#A1A1A1" fontSize="2xl">explore</Text>
<Text color="#A1A1A1" fontSize="2xl">Privacy & terms</Text>
  {/* Primer Boton */}
  </View>
               
                {/* Fin Primer Boton */}
  
                {/* Segundo Boton */}
  
                {/* Tercer Boton */}
   
                {/*  Cuarto Boton */}
                 {/* FIN Cuarto Boton */}
                </HStack>
                </Center>
                
  
  {/* FIN Menu Botones */}
             
  
            </HStack>
          </Box>}
     
        {/* Fin menu */}

    </Box></View>
  );
}
