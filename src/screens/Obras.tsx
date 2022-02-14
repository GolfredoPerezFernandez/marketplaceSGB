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
import { View ,ScrollView} from "react-native";
import ImageCarouselItem2 from "../components/ImageCarouselItem2";






interface ImageCarouselItem {
  id: number;
  uri: string;
  title: string;
  avatar: string;
}
const data: ImageCarouselItem[] = [
  {
    id: 0,
    uri:  'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/953.png',
    title: 'Dahlia',
     avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/Jup6QMQdLnM
  {
    id: 1,
    uri:'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/1599.png',
    title: 'Sunflower', avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/oO62CP-g1EA
  {
    id: 2,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/2508.png',
    title: 'Zinnia', avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/gKMmJEvcyA8
  {
    id: 3,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/1959.png',
    avatar: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
  
    title: 'Tulip',
  }, // https://unsplash.com/photos/N7zBDF1r7PM
  {
    id: 4,
    avatar: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/347.png',
  
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/347.png',
    title: 'Chrysanthemum',
  }, // https://unsplash.com/photos/GsGZJMK0bJc
  {
    id: 5,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/3846.png',
    avatar: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/3846.png',
    title: 'Hydrangea',
  }, {
    id: 6,
    uri:  'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/677.png',
    title: 'Dahlia',
     avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/Jup6QMQdLnM
  {
    id: 7,
    uri:'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/3082.png',
    title: 'Sunflower', avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/oO62CP-g1EA
  {
    id: 8,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/4353.png',
    title: 'Zinnia', avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/gKMmJEvcyA8
  {
    id: 9,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/3592.png',
    avatar: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
  
    title: 'Tulip',
  }, // https://unsplash.com/photos/N7zBDF1r7PM
  {
    id: 10,
    avatar: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
  
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/3609.png',
    title: 'Chrysanthemum',
  }, // https://unsplash.com/photos/GsGZJMK0bJc
  {
    id: 11,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/3599.png',
    avatar: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
    title: 'Hydrangea',
  } , {
    id: 12,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/116.png',
    avatar: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
    title: 'Hydrangea',
  }, {
    id: 13,
    uri:  'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/695.png',
    title: 'Dahlia',
     avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/Jup6QMQdLnM
  {
    id: 14,
    uri:'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/4125.png',
    title: 'Sunflower', avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/oO62CP-g1EA
  {
    id: 15 ,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/179.png',
    title: 'Zinnia', avatar: 'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
  
  }, // https://unsplash.com/photos/gKMmJEvcyA8
  {
    id: 16,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/216.png',
    avatar: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
  
    title: 'Tulip',
  }, // https://unsplash.com/photos/N7zBDF1r7PM
  {
    id: 17,
    avatar: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
  
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/3175.png',
    title: 'Chrysanthemum',
  }, // https://unsplash.com/photos/GsGZJMK0bJc
  {
    id: 18,
    uri: 'https://thecooties.mypinata.cloud/ipfs/QmRPTQ5sTRB9WBqnEPKSTZUabZJg7pZKQsGidpdj4Cn9Za/169.png',
    avatar: 'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
    title: 'Hydrangea',
  }// https://unsplash.com/photos/coIBOiWBPjk
];

export default function Component(width,height) {


  return (
      <View style={{width:width, height:650,}}>
       
      <ImageCarouselItem2  />
      </View>
  );
}
