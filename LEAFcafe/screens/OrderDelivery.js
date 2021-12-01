import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';

import { Header, IconButton, TextButton } from '../constants'
import { icons, dummyData, SIZES, COLORS, FONTS } from '../constants'

const OrderDelivery = ({ route, navigation }) => {

    function renderHeader() {
        return(
            <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                            <Text style={{ ...FONTS.h3  }}>{"My CARD"}</Text>
                    </View>
            </View>
            
        )
    }

    function renderMyCards() {
        return(
            <View>
                {dummyData.myCards.map ((item, index) =>{
                    return (
                        <CardItem
                            key={`MyCard-${item.id}`}
                            item={{...item, key: "MyCard"}}
                        />
                    )
                })}
            </View>
        )        
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
                {/* Header */}

                {renderHeader()}

                {/* Cards */}

                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        marginTop : SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        paddingBottom: SIZES.radius,
                    }}
                >  
                {/* My Card */}

                {renderMyCards()}

                {/* Add Card */}

                </ScrollView>

                {/* Footer */}
        </View>
    )
}

export default OrderDelivery;
