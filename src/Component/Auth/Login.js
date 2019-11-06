import React,{useState,useEffect} from 'react';
import {postLogin} from '../Public/Redux/Actions/auth';

import {
  Text,
  View,
  TouchableOpacity
   
} from 'react-native';

import { Button,Container, Header, Content, Form, Item, Input } from 'native-base';
import { useSelector, useDispatch } from "react-redux";

const Login = (props) => {
    const [input, setInput] = useState({ username: "", password: "" ,token:""});
	const dispatch = useDispatch();

	//On Submit Login Data
	const handleSubmit = async (event) => {
		event.preventDefault();
        try {
			const result=dispatch(postLogin (input))
			props.navigation.navigate('NavigatorDashboard')
        } catch (error) {
          console.log(error);
        }
	};
	
	console.log(input)
	return (
		<View style={{
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems:'center',
			backgroundColor:'black'
		}}>
			<View style={{width: 300, height: 50,justifyContent: 'center',marginStart:27,marginTop:10}} >
				<Text style={{fontWeight:"bold",color:'white',fontSize: 25}}>Signin</Text>
			</View>
			<View style={{width: 300, height: 200}}>
				<Form>
					<Item style={{marginBottom:10}}>
						<Input placeholder="Username"
						onChangeText={(username) => setInput({...input, username: username })}
						style={{color:"white"}}/>
					</Item>
					<Item style={{marginBottom:10}}>
						<Input placeholder="Password" 
						secureTextEntry={true}
						onChangeText={(password) => setInput({...input, password: password })}
						value={input.password}
						style={{color:"white"}}/>
					</Item>
					
					<Button style={{marginTop:20,width:120,marginStart:15,justifyContent: 'center',backgroundColor:"#fbb130"}}
						 onPress={handleSubmit} rounded>
						<Text style={{fontWeight:"bold",fontSize: 17}}>Signin</Text>
					</Button>
					
				</Form>
			</View>
			<View style={{width: 300, height: 50, }}></View>
			<View style={{width: 300, height: 50, }}>
				
			</View>
			
		</View>
				
			
	);
}

export default Login;