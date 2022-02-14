import React, {useState} from 'react'
import {View} from 'react-native'
import {Box, Pressable} from 'native-base'
import {MotiView} from '@motify/components'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { AnimatePresence } from 'moti';


import {
  Text,
} from "native-base";
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

export default function Button2(){


    return(
<View>
      <Box
      rounded="full" 
      alignItems='center'
      justifyContent='center'
      overflow='hidden'
      style={{
        width:150,
        height:50,
       
      }}> 

      <LoadingIndicator size={3000}  />

      <Box rounded="full" 
 style={{
  width:140,
  height:40,
  justifyContent:"center",
  alignItems:"center",
   }} backgroundColor='white' >

<Text color="black" fontWeight={"bold"} fontSize="18">{'Buy For'}</Text>
</Box>
   
      </Box>
      </View>



 
)



}


const styles = StyleSheet.create({

  background: {
    ...StyleSheet.absoluteFillObject,
   

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    
  },
});