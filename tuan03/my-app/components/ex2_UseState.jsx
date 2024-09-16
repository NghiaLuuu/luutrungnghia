import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [currentValue, setCurrentValue] = useState(1);
  const [diceRolls, setDiceRolls] = useState([]);

  const handlePress = () => {
    setDiceRolls(prevRolls => {
      const newValue = prevRolls.length % 3 === 0 && prevRolls != 0 ? currentValue - 2 : currentValue;
      setCurrentValue(newValue + 1);
      return [...prevRolls, newValue];
    });
  };

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={handlePress}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  );
}
