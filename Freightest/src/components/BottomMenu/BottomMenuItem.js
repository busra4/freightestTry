import React from "react";
import { View } from "react-native";


import Icon from 'react-native-vector-icons/Ionicons';
export const BottomMenuItem = ({ iconName, isCurrent }) => {
    return (React.createElement(View, { style: {
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        } },
        React.createElement(Icon, { name:'home', size: 32, style: { color: isCurrent ? 'blue' : 'grey'} })));
};
