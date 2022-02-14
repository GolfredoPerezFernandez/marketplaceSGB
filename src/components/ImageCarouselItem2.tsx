import React, { useState } from 'react'
import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native'
import { Box } from 'native-base'
import { Image, MotiView, MotiText, useAnimationState, } from "moti";
import { useWindowDimensions } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'
interface Car {

    color: string; name: string; image: string; price: string
}
const cars: Car[] = [
    {
        color: '#907FA4',
        name: 'Cootie #14',
        price: '692,690',
        image: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/169.png'
    },
    {
        color: '#907FA4',
        name: 'Cootie #145',
        price: '473,690',
        image: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/3175.png'
    },
    {
        color: '#907FA4',
        name: 'Cootie #1678',
        price: '523,690',
        image: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/169.png'
    },
    {
      color: '#907FA4',
      name: 'Cootie #1678',
      price: '523,690',
      image: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/179.png'
  },
  {
    color: '#907FA4',
    name: 'Cootie #1234',
    price: '523,690',
    image: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/179.png'
},
{
  color: '#907FA4',
  name: 'Cootie #1345',
  price: '523,690',
  image: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/179.png'
},
    {
        color: '#907FA4',
        name: 'Cootie #4',
        price: '685,690',
        image: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/179.png'
    }]



const ImageCarouselItem2 = () => {

    const height = 700
    const width  = 400

return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                style={{marginBottom:40}}
                data={[...cars]}
                renderItem={({ item, index }) => {
                    return  <Box style={{ height:height*0.8 , width, justifyContent: 'center',alignItems: 'center',  }}>
                                <Cards item={item} />
                            </Box>
                }}
            />
    )
}



const CarDetail = ({ item }: { item: Car }) => {

  const height = 140
  const width  = 390

// Inicio Precio descripcion


return (

<MotiView transition={{
                      type: "spring",
                      duration: 50
                  }}

        from={{
          opacity: 1,
          translateY: 0,
          translateX: 0,
          height: height ,
          width: width, 
            }}
  

        animate={{
          opacity: 1,
          translateY: 80,
          translateX: 0,
          backgroundColor: item.color,
          height: width ,
          width: width ,
                }}
        exit={{
            translateY: -200,
            opacity: 0
            }}

        style={{alignItems:'center',
          justifyContent:'flex-start',
          overflow: 'hidden',  
          position: 'absolute', 
          width:200,

          borderRadius: 16
             }}>

        <MotiText style={{alignItems:'center',
                      justifyContent:'center',
                      borderRadius: 16, 
                      position: 'relative', color: '#FFFFFF',}}>
          {item.name}
        </MotiText>
        
        <Box style={{  flexDirection: 'row', 
                      justifyContent:'center',alignItems: 'center', }}>
      
            <MotiText style={{ fontSize: 16, fontWeight: '300', color: '#FFFFFF'}}>
              {item.price}
            </MotiText>
        </Box>

        <Box style={{ alignItems: 'center', justifyContent:'center',flexDirection: 'row'}}>

            <Text style={{ opacity:1,color: '#FFFFFF' }}>
                Book A Ride
            </Text>
            <FontAwesome color='white' name='long-arrow-right' />

        </Box>
</MotiView> 
)
}




const Cards = ({ item }: { item: Car }) => {
    const height = 193
    const width  = 350

    const [open, setOpen] = useState(false);

    const state = useAnimationState({
        from: {
            opacity: 1,
            translateY: 0,
            translateX: 0,
            height: height ,
            width: width, 
          },
        to: {
            opacity: 1,
            translateX: 0,
            backgroundColor: item.color,
            translateY: 0,
            height: width ,
            width: width ,
            }
    })

    const Mainstate = useAnimationState({
        from: {
            //scale: 1.2,
            translateY:  0,
            backgroundColor: item.color,
            height: height,
            width: width ,
            },

        to: {
            //scale: 1,
            translateY: 50,
            opacity:0.5,
            backgroundColor: 'black',
            height: width ,
            width: width  ,
            }

    })

    
    return <Pressable style={{justifyContent:'center',alignItems:'center'}} onPress={() => {
      
                                        if (Mainstate.current == "from") {
                                            state.transitionTo('to')
                                            Mainstate.transitionTo('to')
                                            console.log(open)
                                            setOpen(false)
                                        } 
                                        else {

                                            state.transitionTo('from')
                                            Mainstate.transitionTo('from')
                                            setOpen(true)                             
                                                           console.log(open)

                                                           
                                            }
                                           
                                            
            }}>


          <MotiView 
              state={state}
              transition={{
                  type: 'timing',
                  duration: 500
              }}
              style={{
                  overflow: 'hidden',  
                  zIndex: 80,
                  justifyContent:'flex-end',alignItems:'center',
                  position: 'absolute', 
                  borderRadius: 16
              }} >
                  <Image
                  resizeMode='contain'
                  style={[StyleSheet.absoluteFillObject]} source={{ uri: item.image }} />
                  
          </MotiView>

        <MotiView state={Mainstate} 
            style={{  
                      alignItems:'center',
                      justifyContent:'flex-end',
                      borderRadius: 16, 
                      position: 'relative'}} >

            {
            
            !open ?


            <Box justifyContent={'center'} alignItems={'center'} >

              <MotiText style={{color:'white',marginBottom:20}} >
                {item.name}
              </MotiText>
              


            </Box> 


            : <CarDetail  item={item}/> 
            
            } 
        </MotiView>


    </Pressable>
}

export default ImageCarouselItem2