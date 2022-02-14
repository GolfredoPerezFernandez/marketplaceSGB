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
  Menu,
  Spinner,
  Heading
} from "native-base";

import {useNavigate } from "../../react-router";

import ButtonAn from './Button'
import { Icon } from 'native-base';
import { MaterialCommunityIcons ,  } from '@expo/vector-icons'; 

import { Ionicons,  } from '@expo/vector-icons'; 


export default function Header({width,height,user,loading}) {

  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

  function handleClick() { navigate("/About")}
  function handleClickHome() {navigate("/")}
  function handleClickObras() { navigate("/Obras") }
  function handleClickArtistas() {navigate("/Artistas")}
  function handleClickColecciones() {navigate("/Colecciones")}
  function handleClickCrearNft() {navigate("/CrearNft")}


  return (
    <Box flex="1"  >

      {/* Inicio menu */}
      {width<990? <Box >
            
            <HStack width={width}  space='7%'  >
                
  {/* LOGO */}
                  <Center  pl='3'>
          
                  <Box pl='3'>
                  <Image
                  minWidth={100}
                    source={{
                      uri:"https://gateway.pinata.cloud/ipfs/QmTzvRgSzR6VEyioLDzEuBaeAdsjtSEibvzJ2iZG2zNep1"
                    }}
                    resizeMode='contain'
                    alt="Logo"
                    height="150"
                    width={width*0.3}
                    pl='3'
                    pt="20"
                  />
  
  </Box>
                </Center>
  {/* FIN LOGO */}
  
  {/* Menu Botones */}
                <Center width={width*0.4} height={'150'} justifyContent='center' alignItems="flex-end" > 
                <HStack space={10}  justifyContent='center' alignItems="center"  >
         
  
  
                <Box alignSelf={'center'} justifyContent='center' alignItems="center">
      <Menu  alignSelf={'center'} trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
             
             <MaterialCommunityIcons name="hamburger" size={40} color="white" />
                         </Pressable>;
    }}>
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>
  
  
              
              
                </HStack>
              </Center>
             
  
            </HStack>  
          </Box>: <Box >
            
            <HStack width="100%"  space='13%'  >
                
  {/* LOGO */}
          
                  <Box pl='3'>
                  <Image
                    source={{
                      uri:"https://gateway.pinata.cloud/ipfs/QmTzvRgSzR6VEyioLDzEuBaeAdsjtSEibvzJ2iZG2zNep1"
                    }}
                    resizeMode='contain'
                    alt="Logo"
                    height="150"
                    width="200"
                    pl='3'
                    pt="20"
                  />
  
  </Box>
               
                <Center>
                <HStack w={width*0.07} justifyContent="center" alignItems="center" ml={22} >
  
  
  
                <Button  
                onPress={handleClickHome } 
                  
                variant="unstyled" 
                w='120' h='100'><Text color="white" fontSize="2xl">Home</Text></Button>
  
                {/* Primer Boton */}
              
               <Button  
                onPress={handleClickObras } 
                  
                variant="unstyled" 
                w='120' h='100'><Text color="white" fontSize="2xl">Explore</Text></Button>
  
               
                {/* Fin Primer Boton */}
  
                {/* Segundo Boton */}
  
                <Button onPress={handleClickArtistas}   variant="unstyled" w='120' h='100'><Text color="white" fontSize="2xl">My NFTs</Text></Button>
             
                </HStack>
                </Center>
                
  
              <Center justifyContent={'center'} alignSelf={'stretch'} flex={1}  alignItems={'center'}>
                <HStack alignSelf={'stretch'} flex={1} justifyContent={'center'} alignItems={'center'} >
                  {user.ethAddress!==''?
                  <Box style={{flexDirection:'row',marginRight:width*0.1,justifyContent:'flex-start',alignItems:'center'}}>
                                       <Button backgroundColor={'black'}  onPress={handleClickCrearNft} variant="unstyled" w='120' h='100' mr={5}><Text marginLeft={10} marginRight={10} color="white" fontSize="1xl">CREAR NFT</Text></Button>

        <Text color={'white'} fontSize={18}>{user.ethAddress.substring(0, 5).toUpperCase() + '...' + user.ethAddress.substring(user.ethAddress.length - 3, user.ethAddress.length).toUpperCase() }</Text>
        </Box>    :loading?<HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="white" fontSize="md">
        Loading
      </Heading>
    </HStack>:<Box style={{flexDirection:'row',flex:1,alignSelf:'stretch',justifyContent:'center',alignItems:'center'}}>
                   
                <ButtonAn />        </Box>
                  }
                
            
              
                </HStack>
              </Center>
             
  
            </HStack>
          </Box>}
     
        {/* Fin menu */}

    </Box>
  );
}
