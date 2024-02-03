import React from "react";
import { Text } from "react-native";

export default function Row({person}) {
    return(
        <Text style={styles.row}>{person.lastname}, {person.firstname}</Text>
    )
}

