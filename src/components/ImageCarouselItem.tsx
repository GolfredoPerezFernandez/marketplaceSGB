import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ButtonAn from './Button2'
import {
  Modal,
  FormControl,
  Input,
  HStack,
  VStack,
  Box,
  Button,
  Center,
  Container,
  ChevronRightIcon,
  
  ScrollView
} from "native-base";

const width = 450;


const ITEM_WIDTH = width * 0.80;
const ITEM_HEIGHT = ITEM_WIDTH * 1.5;
const SPACING = 5;
const ITEM_LENGTH = width * 0.80; // Item is a square. Therefore, its height and width are of the same length.
const EMPTY_ITEM_LENGTH = (width - ITEM_LENGTH) / 2;
const BORDER_RADIUS = 20;
const CURRENT_ITEM_TRANSLATE_Y = 48;

interface ImageCarouselItem {
  id: number;
  uri: string;
  avatar: string;
  title: string;
}

interface ImageCarouselProps {
  data: ImageCarouselItem[];
}

const ImageCarouselItem: FC<ImageCarouselProps> = ({data}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [dataWithPlaceholders, setDataWithPlaceholders] = useState<
    ImageCarouselItem[]
  >([]);
  const currentIndex = useRef<number>(1);
  const flatListRef = useRef<FlatList<any>>(null);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);

  setInterval(() => {handleOnNext()}, 10000)

  useEffect(() => {
    setDataWithPlaceholders([{id: -1}, ...data, {id: data.length}]);
    currentIndex.current = 1;
    setIsPrevDisabled(true);
  }, [data]);

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
    if (currentIndex.current === 1) {
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
  const getItemLayout = (_data: any, index: number) => ({
    length: ITEM_LENGTH,
    offset: ITEM_LENGTH * (index - 1),
    index,
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Animated.FlatList 
        ref={flatListRef}
        data={dataWithPlaceholders}
        renderItem={({item, index}) => {
          if (!item.uri || !item.title) {
            return <View style={{width: EMPTY_ITEM_LENGTH}} />;
          }

          const inputRange = [
            (index - 2) * ITEM_LENGTH,
            (index - 1) * ITEM_LENGTH,
            index * ITEM_LENGTH,
          ];

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
            <View style={{ marginBottom:60,alignSelf:"center",justifyContent:"center",alignItems:'center'}}>
         
            <Box 
                style={{

                }}
                >

            <Box 
                width = {ITEM_WIDTH}
                height = {ITEM_HEIGHT}
                overflow='hidden'
                alignItems="center"   
                justifyContent='center'
                
                >

            <Animated.Image
                source={{uri: item.uri}}
                style={{
                width : ITEM_WIDTH * 2.5,
                height : ITEM_HEIGHT ,
                resizeMode:'contain' ,
                alignItems:'center',
                transform:[{translateX}]
                }}
            />

            
            </Box>
            </Box>

            <Image source={{uri: item.avatar}}
                style={{
                  width:80,
                  height:80,
                  borderRadius:100,
                  borderColor:'white',
                  position:'absolute',
                  bottom:-35,
                  right:50}}
                  />   
                  
                <ButtonAn/>
           
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

          </View>
          );
        }}
        getItemLayout={getItemLayout}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        bounces={false}
        decelerationRate={0}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.flatListContent}
        snapToInterval={ITEM_LENGTH}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100,
        }}
      />
      <View style={styles.footer}>
        <Pressable
          onPress={handleOnPrev}
          disabled={isPrevDisabled}
          style={({pressed}) => [
            {
              opacity: pressed || isPrevDisabled ? 0.5 : 1.0,
            },
            styles.arrowBtn,
          ]}>
          <Text
            style={styles.arrowBtnText}
            accessibilityLabel="Go To Previous Item">
            ◂
          </Text>
        </Pressable>
        <Text>{'   '}</Text>
        <Pressable
          onPress={handleOnNext}
          disabled={isNextDisabled}
          style={({pressed}) => [
            {
              opacity: pressed || isNextDisabled ? 0.5 : 1.0,
            },
            styles.arrowBtn,
          ]}>
          <Text
            style={styles.arrowBtnText}
            accessibilityLabel="Go To Next Item">
            ▸
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ImageCarouselItem;

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
  },
  flatListContent: {
    height: CURRENT_ITEM_TRANSLATE_Y * 2 + ITEM_LENGTH,
    alignItems: 'center',
    marginBottom: CURRENT_ITEM_TRANSLATE_Y,
  },
  item: {},
  itemContent: {
    marginHorizontal: 0 * 3,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: BORDER_RADIUS + SPACING * 2,
  },
  itemText: {
    fontSize: 24,
    position: 'absolute',
    bottom: 0 * 2,
    right: 0 * 2,
    color: 'white',
    fontWeight: '600',
  },
  itemImage: {
    width: '100%',
    height: ITEM_LENGTH,
    borderRadius: BORDER_RADIUS,
    resizeMode: 'cover',
  },
});