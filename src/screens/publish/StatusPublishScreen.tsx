import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/type";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type StatusPublishScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "StatusPublish"
>;

type Props = {
  route: {
    params: {
      status: string;
    };
  };
  navigation: StatusPublishScreenNavigationProp;
};

const StatusPublishScreen = ({ route, navigation }: Props) => {
  const { status } = route.params;

  return (
    <View className="flex-1 bg-zinc-950 justify-center">
      <Text className="text-white text-2xl text-center mt-10">
        {status}
      </Text>
      {status === "Succès" && (
        <Icon
          name={"check-circle"}
          size={100}
          color={"green"}
          className="text-center"
        />
      )}
      {status === "Erreur" && (
        <Icon
          name={"times-circle"}
          size={100}
          color={"red"}
          className="text-center"
        />
      )}

      <TouchableOpacity
        onPress={() => navigation.reset({ index: 0, routes: [{ name: "Home" }] })}
        className="bg-zinc-800 rounded-lg p-2 m-5"
      >
        <Text className="text-white text-center">Retour à l'accueil</Text>
      </TouchableOpacity>
    </View>
  );
}

export default StatusPublishScreen;
