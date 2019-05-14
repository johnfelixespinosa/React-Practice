const mockTasks = [
  {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, reducers',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Take a break',
    description: 'Arent you hungry?',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Nap',
    description: 'Napping is essential, do it',
    status: 'Unstarted',
  },
]

export default function tasks(state = { tasks: mockTasks }, action) {
  return state;
}