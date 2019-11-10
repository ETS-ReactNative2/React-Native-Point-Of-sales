import React, { useState,useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native';
import {deleteProduct} from '../Public/Redux/Actions/product';
import { Thumbnail,Container, Header, Content, Card, CardItem, Body, Text, Left,Icon,Fab,Button,Right } from 'native-base';
import { useSelector,useDispatch  } from 'react-redux';

export default function Product(props) {
    const product = useSelector(state => state.product.productList)
    const dispatch = useDispatch()

    const handleSubmitdelete = async (id) => {
        try {
          await dispatch(deleteProduct(id))
        } catch (err) {
          console.log(err)
        }
      };

    const onShow=(item)=>{
        Alert.alert(
          'Delete This Item?',
          item.name,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', 
              onPress: () =>  handleSubmitdelete(item.id_product)},
              
          ],
          {cancelable: false},
        );
    }
	return (
        <Container>
            <Header style={{backgroundColor:'white'}}>
                <Text style={{paddingTop:14,fontWeight:'bold'}}>Management Product</Text>
            </Header>
            <Content >
            <ScrollView>
                {product.map(item=>{
                    return(
                    <View style={{paddingStart:5,paddingEnd:5}}>
                      <StatusBar backgroundColor="#f6b233" barStyle="light-content"/>
                        <Card >
                            <CardItem>
                            <Body style={{flexDirection:'row'}} >
                                <View style={{flexDirection: 'row',paddingTop:10}}>
                                    <Thumbnail square large source={{uri: item.image}} />
                                </View>
                                <View style={{flexDirection: 'column',paddingStart:20,width:'77%'}}>
                                    <Text >{item.name}</Text>
                                    <Text >Quantity:{item.quantity}</Text>
                                    <Text >Rp.{item.price}</Text>
                                    <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity
                                        style={{paddingTop:35}}
                                        onPress={() =>
                                        props.navigation.navigate('Editproduct',{
                                            list:item,
                                        })
                                        }>
                                        <Icon type="Ionicons" name="md-create" style={{fontSize: 25, color: 'green',paddingEnd:30}} />
                                    </TouchableOpacity> 
                                    <TouchableOpacity
                                        style={{paddingTop:35}}
                                        onPress={()=>{onShow(item)}}
                                        >
                                        <Icon type="Ionicons" name="ios-trash" style={{fontSize: 25, color: 'red',paddingStart:5}} />
                                  </TouchableOpacity>
                                  </View>
                                </View>
                            </Body>
                            </CardItem>
                        </Card>
                    </View>
                    )
                })}
            </ScrollView>
            </Content>
            <View >
            <Fab
              
              containerStyle={{ }}
              style={{ backgroundColor: '#f6b233', }}
              position="bottomRight"
              onPress={() =>
                props.navigation.navigate('AddProduct')
              }
             >
              <Icon name="add" />
            </Fab>
            </View>
        </Container>	
	);
}
