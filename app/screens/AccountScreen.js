

import React from 'react'; // type imrn
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from "../components/Icon";
// import { FlatList } from 'react-native-gesture-handler'; It is wrong , we have to import FlatList from 'react-native'
import colors from '../config/colors';
import ListItemSeparatorComponent from "../components/ListItemSeparator"

const menuItems = [
    {
        title: "Phone number",
        icon: {
           name:
           "format-list-bulleted",
           backgroundColor: colors.primary, 
        }
    },
    {
        title: "E-mail",
        icon: {
           name: "email",
           backgroundColor: colors.secondary, 
        }
    },
    

{
        title: "Rateus",
        icon: {
           name: "star",
           backgroundColor: colors.secondary, 
        }
    },
]

 
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
                title = "M8 IT Solutions Pvt Ltd"
                subTitle = "3rd FloorVue Grande,339 Chinnaswamy Road,Coimbatore,TamilNadu 641044" 
                image = { require('../assets/picture.jpg')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent} 
                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title}
                            ImageComponent={
                                <Icon 
                                name={item.icon.name} backgroundColor={item.icon.backgroundColor} 
                                />
                            }
                        />
                    } 
                />
            </View>
            <ListItem
            title="Log Out"
            ImageComponent={<Icon name="Logout" backgroundColor="#ffe66d"/>}
            />
           
        </Screen>
    );
}
const styles=StyleSheet.create({
    container:
    {
        marginVertical: 20
    },
    
    screen: {
        backgroundColor: colors.light,
    }
})
export default AccountScreen;