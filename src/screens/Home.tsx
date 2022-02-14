import React, { Component, useEffect } from "react";
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

import Carousel from '../components/Carousel'
import ImageCarouselItem from "../components/ImageCarouselItem";


import CurrentUserStore from '../stores/CurrentUserStore';
interface ImageCarouselItem {
  id: number;
  uri: string;
  title: string;
}


interface ImageCarouselItem {
  id: number;
  uri: string;
  title: string;
  avatar: string;
}

const data: ImageCarouselItem[] = [
  {
    id: 0,
    uri:  'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
    title: 'Dahlia',
     avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/Jup6QMQdLnM
  {
    id: 1,
    uri:'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80',
    title: 'Sunflower', avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/oO62CP-g1EA
  {
    id: 2,
    uri: 'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
    title: 'Zinnia', avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/gKMmJEvcyA8
  {
    id: 3,
    uri: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
    title: 'Tulip',
  }, // https://unsplash.com/photos/N7zBDF1r7PM
  {
    id: 4,
     avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
    uri: 'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
    title: 'Chrysanthemum',
  }, // https://unsplash.com/photos/GsGZJMK0bJc
  {
    id: 5,
    uri: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
    avatar: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
    title: 'Hydrangea',
  }, // https://unsplash.com/photos/coIBOiWBPjk
];

import {
  View,
} from 'react-native';
import ResponsiveWidthStore from "../stores/ResponsiveWidthStore";
const images = [
  'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
  'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80',
  'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
  'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
  'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80',
  'https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80',
  'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80',
  'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80',
  'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
];


export const Home = ({
  width,
  height, 
}: {
  width: number;
  height: number;
}) => {
  useEffect(()=>
  console.log(width),[width])
  
  return  <Box height={width<1300?height*1.3:height-150} alignSelf="stretch"    flexDirection={width<1300?"column":"row"} justifyContent={'center'} alignItems={'center'} >
      {width<1300?<Box justifyContent={'center'} alignItems={'center'} >
        <Text style={{color:'white',fontSize:34, textAlign:'center'}}>{"Collect your digital art NFTs"}</Text>
<Text style={{color:'white',fontSize:18,textAlign:'center'}}>{"Marketplace for monster character collections non fungible token NFTs."}</Text>
      </Box>:<Box flex={1} justifyContent={'flex-start'} alignItems={'center'} alignSelf="stretch" >
        <Text style={{color:'white',width:500,marginTop:200,marginLeft:50,fontSize:60}}>{"Collect your digital art NFTs"}</Text>
<Text style={{color:'white',marginLeft:50,fontSize:24,width:500,}}>{"Marketplace for monster character collections non fungible token NFTs."}</Text>
      </Box>}

      {width<1300?
      <Box flex={1}  justifyContent={'center'} alignItems={'flex-start'}  alignSelf="stretch"  >
      <View style={{width:450, height:height/1.8,alignSelf:'center'}}>
       
      <ImageCarouselItem  data={data}/>
      </View>
      </Box>:
      <Box flex={1}  justifyContent={'center'} alignItems={'center'} paddingTop={50} paddingRight={40} alignSelf="stretch"  >
      <View style={{width:450, height:650,alignSelf:'center'}}>
       
      <ImageCarouselItem  data={data}/>
      </View>
      </Box>}

      </Box>

  
}

