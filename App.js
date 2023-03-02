import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";



import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    toggleModalHandler()
  }

  function deleteGoal(id) {
    setCourseGoals( currentCourseGoals => { 
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  function toggleModalHandler() {
    setIsModalVisible(!isModalVisible);
}
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title="Add New Goal" onPress={toggleModalHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={isModalVisible} onCancel={toggleModalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoal} />
            );
          }}
        />
      </View>
    </View>
    </>
 
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#322b6b",
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
  },
});
