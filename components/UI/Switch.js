// https://reactnative.dev/docs/switch

import React, {useState} from 'react';
import { Switch, StyleSheet } from 'react-native';

const CustomSwitch = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Switch
            trackColor={{ false: "#D4D4D4", true: "#DCDCEE" }}
            thumbColor={isEnabled === true ? "#5050A5" : "#F5F5F5"}
            ios_backgroundColor="#5050A5"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

const styles = StyleSheet.create({

});

export default CustomSwitch;