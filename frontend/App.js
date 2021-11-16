import React from 'react';
import "react-native-gesture-handler";
import * as encoding from "text-encoding";
import Android from "./APP/android/components/navigation";
import { Platform } from "react-native";


const App = () => {
	let component;
	switch(Platform.OS){
		case "android":
			return <Android/>
	}
};

export default App;
