import { Text, View } from 'react-native'
import { useTMDB } from '../../hooks/useTMDB'
import { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ListCheck, ListTodo } from 'lucide-react-native';


const Tab = createBottomTabNavigator()

function TasksScreen() {
	return (
		<View>
			<Text>Tasks Screen</Text>
		</View>
	)
}

function CompletedTasksScreen() {
	return (
		<View>
			<Text>Tasks Screen</Text>
		</View>
	)
}

function TasksTabIcon({ color, size }: { color: string; size: number }) {
  return <ListTodo color={color} size={size} />;
}

function CompletedTasksTabIcon({ color, size }: { color: string; size: number }) {
  return <ListCheck color={color} size={size} />;
}

export function Home() {
	const { getNowPlaying } = useTMDB()

	useEffect(() => {
		async function fetchMovies() {
			const movies = await getNowPlaying({ page: 1 })
			console.log(movies)
		}
		fetchMovies()
	}, [])

	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="Tasks"
				component={TasksScreen}
				options={{
					title: 'Tarefas',
					tabBarLabel: 'Tarefas',
					tabBarIcon: TasksTabIcon,
				}}
			/>
			<Tab.Screen
				name="Completed"
				component={CompletedTasksScreen}
				options={{ title: 'Concluídas', tabBarIcon: CompletedTasksTabIcon, tabBarLabel: 'Tarefas' }}
			/>
		</Tab.Navigator>
	)
}
