import React, { useState } from "react";
import {
  Text,
  Modal,
  FormControl,
  HStack,
  VStack,
  Box,
  Image,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Stack
} from "native-base";
import {useNavigate } from "../../react-router"

import Dropzone from 'react-dropzone'



export default function CrearNft() {

  let navigate = useNavigate();
  function handleClickCrearNft() {navigate("/CrearNft")}


  return (
  <Box h={700} > 

        


  {/* Inicio Crear NFT */}
  <HStack mt={3} space='10' alignSelf='center' >


            {/* primera caja */}   
            <VStack  
                  width="500"
                  height="500"
                  justifyContent='space-between'
            > {/* Columna */}

    


                  <Heading alignSelf='start' fontSize="3xl">Create Nft</Heading>
                  <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </section>
  )}
</Dropzone>
                    <Button alignSelf='end'  onPress={handleClickCrearNft}  w='130' h='10'>
                      <Text color="white" >CREAR NFT</Text>
                    </Button>
                
              
            </VStack>
            {/* FIN primera caja */}   

            {/* segunda caja */}   
              <VStack 
                  space="2" 
                  width="500"
                  height="500"
              >

                <VStack  width="500">    
                <Heading color="white"  fontSize="lg" mt={5}>Name</Heading>
                <Input mt={2} variant="filled" placeholder="Filled" _light={{
                    placeholderTextColor: "blueGray.400"
                  }} _dark={{
                    placeholderTextColor: "blueGray.50"
                  }} />


                <Heading color="white"  fontSize="lg" mt={5}>Description</Heading>
                <Input mt={2} variant="filled" placeholder="Filled" _light={{
                    placeholderTextColor: "blueGray.400"
                  }} _dark={{
                    placeholderTextColor: "blueGray.50"
                  }} />

                <Heading color="white"  fontSize="lg" mt={5}>Alternative text</Heading>
                <Input mt={2} variant="filled" placeholder="Filled" _light={{
                    placeholderTextColor: "blueGray.400"
                  }} _dark={{
                    placeholderTextColor: "blueGray.50"
                  }} />
                </VStack>

                <HStack>

                  <VStack width="250" >
                                <Heading color="white"  mt={5} fontSize="lg" mr={4}>Royalties</Heading>
                                <Input mt={2} mr={4} variant="filled" placeholder="Filled" _light={{
                                    placeholderTextColor: "blueGray.400"
                                  }} _dark={{
                                    placeholderTextColor: "blueGray.50"
                                  }} />
                </VStack >

                <VStack  width="250">
                                <Heading color="white"  mt={5} fontSize="lg">Number of copies</Heading>
                                <Input mt={2} variant="filled" placeholder="Filled" _light={{
                                    placeholderTextColor: "blueGray.400"
                                  }} _dark={{
                                    placeholderTextColor: "blueGray.50"
                                  }} />
                </VStack>


                </HStack>

                <HStack>

                  <VStack width="250" >
                                <Heading color="white" mt={8} fontSize="lg" mr={4}>Royalties</Heading>
                                <Heading color="white" mt={8} fontSize="lg">Number of copies</Heading>

                </VStack >

                <VStack  width="250">
                                <Input mt={5} variant="filled" placeholder="Filled" _light={{
                                    placeholderTextColor: "blueGray.400"
                                  }} _dark={{
                                    placeholderTextColor: "blueGray.50"
                                  }} />

                                  <Input mt={5} variant="filled" placeholder="Filled" _light={{
                                    placeholderTextColor: "blueGray.400"
                                  }} _dark={{
                                    placeholderTextColor: "blueGray.50"
                                  }} />   
                </VStack>


                </HStack>


              </VStack>
            {/*FIN segunda caja */}   


  </HStack>
{/* FIN Inicio Crear NFT */}

</Box>
)}
