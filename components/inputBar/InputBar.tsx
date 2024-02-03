import React, { useState } from "react";
import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type InputBarProps = {
  onChangeText: (text: string) => void;
  value: string;
  placeholder?: string;
};

const InputBar = ({ onChangeText, value, placeholder }: InputBarProps) => {
  const [iconsColor, setRightIconsColor] = useState("lightslategrey");
  const [textColor, setRightTextColor] = useState("text-white");

  return (
    <View>
      {/* InputBar */}
      <View className="mt-5 mx-5 flex-row justify-center shadow border-2 border-2 border-zinc-800 rounded-2xl h-16">
        {/* Icon */}
        <View className="flex-none justify-center pl-5 pr-2">
          <Icon name={"search"} size={26} color={iconsColor} />
        </View>

        {/* Input */}
        <View className="flex-none grow px-2">
          <View className="flex-1 justify-center gap-y-0.5 items-start">
            <TextInput
              className={"flex-1 w-full text-sm font-semibold" + textColor}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default InputBar;
