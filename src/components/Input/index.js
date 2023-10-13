import React from "react";
import { Image, Pressable, TextInput, View } from "react-native";
import styles from "./style";
import colors from "../../constants/colors";

const Input = ({ showSearchIcon, style, pressable, onPress, ...props }) => {

    const renderItem = () => (
        <View style={[styles.container, style]}>
            {showSearchIcon ? (
                <Image
                    style={styles.icon}
                    source={require('../../../assets/search.png')} />
            ) : null}
            <TextInput
                {...props}
                editable={!pressable}
                placeholderTextColor={colors.lightGrey}
                style={styles.input}
            />
        </View>
    )

    if (pressable) {
        return (
            <Pressable onPress={onPress}>
                {renderItem()}
            </Pressable>
        )
    }

    return renderItem();
}

Input.defaultProps = {
    placeholder: 'Search Recipe',
    showSearchIcon: true
}

export default React.memo(Input);