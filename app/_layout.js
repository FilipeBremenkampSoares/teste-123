import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Container } from "../components/container";


export default function Layout () {
return (
<Container>
  <StatusBar style="auto" />
  <SafeAreaView />
<Slot />
</Container>

);
};