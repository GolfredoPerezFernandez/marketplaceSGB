import React, { useState } from "react";
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
  Container,
  ChevronRightIcon,
  Pressable
} from "native-base";





export default function Component() {


  return (
<Box >

    <HStack mt={5} mx={3} space={10} alignSelf='center'>

          <Box 
            w={300}
            h={500}
            style={{
                    shadowColor:'#000',
                    shadowOffset:{width:2, height:2},
                    shadowOpacity:0.5,
                    shadowRadius:15
                    }}>
          <VStack  w={300}
            h={550}>  {/* Columna */}


                    <HStack  >

                      <Image
                        source={{
                          uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
                        }}
                        alt="Image user"
                        size="md"
                        rounded="full"
                        mt={5}
                        ml={3}
                      />
                      <VStack ml={4}>
                      <Text fontSize="lg" mt={5} bold mb={1}>
                        Name Last Name
                      </Text>
                    

                      <Button mt={2} h="15%" w="60%" borderRadius={20} colorScheme="gray">
                        Seguir
                      </Button>
                      </VStack>
                    </HStack>
                 
            
                      <Image
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                        }}
                        alt="Paisaje Invierno"
                        height="300"
                        width="300"
                        mt={100}
                      />
                      
                      </VStack>

         </Box>

         <Box 
            w={300}
            h={500}
            style={{
                    shadowColor:'#000',
                    shadowOffset:{width:2, height:2},
                    shadowOpacity:0.5,
                    shadowRadius:15
                    }}>
          <VStack  w={300}
            h={550}>  {/* Columna */}


                    <HStack  >

                      <Image
                        source={{
                          uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
                        }}
                        alt="Image user"
                        size="md"
                        rounded="full"
                        mt={5}
                        ml={3}
                      />
                      <VStack ml={4}>
                      <Text fontSize="lg" mt={5} bold mb={1}>
                        Name Last Name
                      </Text>
                    

                      <Button mt={2} h="15%" w="60%" borderRadius={20} colorScheme="gray">
                        Seguir
                      </Button>
                      </VStack>
                    </HStack>
                 
            
                      <Image
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                        }}
                        alt="Paisaje Invierno"
                        height="300"
                        width="300"
                        mt={100}
                      />
                      
                      </VStack>

         </Box>

         <Box 
            w={300}
            h={500}
            style={{
                    shadowColor:'#000',
                    shadowOffset:{width:2, height:2},
                    shadowOpacity:0.5,
                    shadowRadius:15
                    }}>
          <VStack  w={300}
            h={550}>  {/* Columna */}


                    <HStack  >

                      <Image
                        source={{
                          uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
                        }}
                        alt="Image user"
                        size="md"
                        rounded="full"
                        mt={5}
                        ml={3}
                      />
                      <VStack ml={4}>
                      <Text fontSize="lg" mt={5} bold mb={1}>
                        Name Last Name
                      </Text>
                    

                      <Button mt={2} h="15%" w="60%" borderRadius={20} colorScheme="gray">
                        Seguir
                      </Button>
                      </VStack>
                    </HStack>
                 
            
                      <Image
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                        }}
                        alt="Paisaje Invierno"
                        height="300"
                        width="300"
                        mt={100}
                      />
                      
                      </VStack>

         </Box>

         <Box 
            w={300}
            h={500}
            style={{
                    shadowColor:'#000',
                    shadowOffset:{width:2, height:2},
                    shadowOpacity:0.5,
                    shadowRadius:15
                    }}>
          <VStack  w={300}
            h={550}>  {/* Columna */}


                    <HStack  >

                      <Image
                        source={{
                          uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
                        }}
                        alt="Image user"
                        size="md"
                        rounded="full"
                        mt={5}
                        ml={3}
                      />
                      <VStack ml={4}>
                      <Text fontSize="lg" mt={5} bold mb={1}>
                        Name Last Name
                      </Text>
                    

                      <Button mt={2} h="15%" w="60%" borderRadius={20} colorScheme="gray">
                        Seguir
                      </Button>
                      </VStack>
                    </HStack>
                 
            
                      <Image
                        source={{
                          uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                        }}
                        alt="Paisaje Invierno"
                        height="300"
                        width="300"
                        mt={100}
                      />
                      
                      </VStack>

         </Box>

    </HStack>



    
</Box>
  );
}
