import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
export default class GeneralNews extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>
                    Welcome to Login Screen!
                </Text>
            </View>
        );
    }
}