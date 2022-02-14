import React, {useCallback, useRef, useState, useEffect } from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
} from 'react-native';

import {
    Text,
    Modal,
    FormControl,
    Input,
    HStack,
    VStack,
    Box,
    Image,
    FlatList, 
    Button,
    Center,
    Container,
    ChevronRightIcon,
    
    ScrollView
  } from "native-base";

// const { width, height } = Dimensions.get('screen');
const width = 590
const height = 400

const ITEM_WIDTH = width * 0.60;
const ITEM_HEIGHT = height * 1.2;

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';


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

const styles = StyleSheet.create({
  container: {},
  arrowBtn: {},
  arrowBtnText: {
    fontSize: 42,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  }
});


const CURRENT_ITEM_TRANSLATE_Y = 48;

interface ImageCarouselItem {
  id: number;
  uri: string;
  title: string;
}

export default function Carousel() {

const [data, setData] = useState(images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40
  )}.jpg`,
})));
const currentIndex = useRef<number>(0);
const flatListRef = useRef<Animated.FlatList <any>>(null);
const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);

const [showModal, setShowModal] = useState(false);


useEffect(() => {
  setData([{key: -1}, ...data, {key: data.length}]);
  currentIndex.current = 1;
  setIsPrevDisabled(true);
}, [data]);
// Botton

  const handleOnViewableItemsChanged = useCallback(
    ({viewableItems}) => {
      const itemsInView = viewableItems.filter(
        ({item}: {item: ImageCarouselItem}) => item.uri && item.title,
      );

      if (itemsInView.length === 0) {
        return;
      }

      currentIndex.current = itemsInView[0].index;

      setIsNextDisabled(currentIndex.current === data.length);
      setIsPrevDisabled(currentIndex.current === 1);
    },
    [data],
  );


const handleOnPrev = () => {
  if (currentIndex.current === 0) {
    return;
  }

  if (flatListRef.current) {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: currentIndex.current - 1,
    });
  }
};

const handleOnNext = () => {
  if (currentIndex.current === data.length) {
    return;
  }

   if (flatListRef.current) {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: currentIndex.current + 1,
    });
  }
};
// `data` perameter is not used. Therefore, it is annotated with the `any` type to merely satisfy the linter.
const getItemLayout = (_data, index) => ({
  length: ITEM_WIDTH,
  offset: ITEM_WIDTH * (index - 1),
  index,
});

const scrollX = React.useRef(new Animated.Value(0)).current

console.log(ITEM_WIDTH)
console.log(length)

  return (


    <Box h={630} w={1150} alignSelf='center'>


        <Animated.FlatList 
            getItemLayout={getItemLayout}
            ref={flatListRef}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            viewabilityConfig={{itemVisiblePercentThreshold: 100}}
            data={data}
            keyExtractor={(item) => item.key}
            horizontal
            snapToAlignment="start"
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            initialNumToRender={3}
            onScroll={Animated.event([{ nativeEvent: {contentOffset:{x: scrollX}}}],
                                        {useNativeDriver: true}
            )}
            
            renderItem ={({item, index}) => {
                const inputRange =[

                  (index - 25) * width,
                  index * width,
                  (index + 25) * width
                  ]

               
            const translateX = scrollX.interpolate({
                inputRange,
                outputRange:[ - width * 2.2, 0 , width * 2.2]

            })

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [
                CURRENT_ITEM_TRANSLATE_Y * 2,
                CURRENT_ITEM_TRANSLATE_Y,
                CURRENT_ITEM_TRANSLATE_Y * 2,
              ],
              extrapolate: 'clamp',
            });

             return (   
            
               <Box   justifyContent='flex-start' alignItems='flex-start' mb={40} mt={5} >

                <Box 
                    mx={3}
                    borderWidth='3'
                    borderColor='black'
                    style={{
                      shadowColor:'#000',
                      shadowOffset:{width:0, height:0},
                      shadowOpacity:1,
                      shadowRadius:15
                    }}
                    >

                <Box 
                    width = {ITEM_WIDTH}
                    height = {ITEM_HEIGHT}
                    overflow='hidden'
                    alignItems="center"                    
                    borderWidth='10'
                    borderColor='white'
                    justifyContent='center'
                    
                    >

                <Animated.Image
                    source={{uri: item.photo}}
                    style={{
                    width : ITEM_WIDTH * 2.5,
                    height : ITEM_HEIGHT ,
                    resizeMode:'cover' ,
                    alignItems:'center',
                    marginHorizontal:2,
                    transform:[{translateX}]
                    }}
                />

                
                </Box>
                </Box>

                <Image source={{uri: item.avatar_url}}
                    style={{
                      width:80,
                      height:80,
                      borderRadius:100,
                      borderWidth:5,
                      borderColor:'white',
                      position:'absolute',
                      bottom:-35,
                      right:50}}
                      />   
                      
                <Button style={{
                        width:80,
                        height:50,
                        borderRadius:100,
                        borderWidth:5,
                        borderColor:'white',
                        position:'absolute',
                        bottom:-20,
                        right:250}}
                onPress={() => setShowModal(true)}>Offert</Button>
         
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400">
                  <Modal.CloseButton />
                  <Modal.Header> Hacer Oferta</Modal.Header>
                  <Modal.Body>
                    <FormControl>
                      <FormControl.Label>Precio</FormControl.Label>
                      <Input mx="3" placeholder="Input" w="75%" maxWidth="200px"/>
                    </FormControl>
                    <FormControl mt="3">
                      <FormControl.Label>Descripcion</FormControl.Label>
                      <Input mx="3" placeholder="Input" w="75%" maxWidth="200px"/>
                    </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                      setShowModal(false);
                    }}>
                        Cancel
                      </Button>
                      <Button onPress={() => {
                      setShowModal(false);
                    }}>
                        Enviar
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
                </Modal>

              </Box>

             
             )}}/>


            <Box mt= {10} flexDirection="row" justifyContent="center">
              <Button
                onPress={handleOnPrev}
                disabled={isPrevDisabled}
              >


                <Box
                  accessibilityLabel="Go To Previous Item">
                <Text fontSize="xl"> ◂</Text>
                </Box>
              </Button>
            
                <Button onPress={handleOnNext}
                style={({pressed}) => [
                  {
                    opacity: pressed || isNextDisabled ? 0.5 : 1.0,
                  },
                  styles.arrowBtn,
                ]}
                        disabled={isNextDisabled}
                >

                <Text
                  fontSize="xl"      
                  accessibilityLabel="Go To Next Item">
                    
                  ▸
                </Text>
              </Button>
            </Box>

</Box>


  );
}


