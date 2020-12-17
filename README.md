## immer-context
`immer-context` gives you access to react context super powers with extremely simple api `useIContext`

you can use `immer-context` alongside redux/mobx, it adds context super powers to your react-[redux/mobx] app.
Thanks to [Michel Westrate](https://twitter.com/mweststrate) for `immer` and `use-immer`

# API

Forget all the context orchestration and remember following two APIs

1. withIContext(Component, {name,initialValue})  --> wrap your React component with IContext and provide a name for the context to be created
2. useIContext --> returns context and immer updater to update the context


## useIContext

`useIContext()` is similar to [`useState`](https://reactjs.org/docs/hooks-state.html).
The function returns a object, that can be destructured into context and updateContext function,
updateContext accepts an [immer producer function](https://github.com/mweststrate/immer#api), in which the `draft` can be mutated freely, until the producer ends and the changes will be made immutable and become the next context value


## Installation 🔥
```bash
npm i immer immer-context

# or if you prefer Yarn:
yarn add immer immer-context

# or with pnpm:
pnpm i immer immer-context
```
## Peer Dependency
immer
## Philosophy 🔖
React provides a context API to make the state available to child components without passing them, we simplify context API by exposing HOC `withIContext` that should wrap a React Component and get additional config explaing about the context to be created namely 1. name = name used to access the context with `useIContext(name)` and 2. initialValue will be used as the initialValue of the state
```javascript
/** Input.tsx == any functional component which wants to use the context*/
export const Input = (props:any) => {
	const [context, setContext] = useIContext;
	const {applicantName} = context;
	const handleInputChange = (event) => {
		setContext((draft:any) => void(draft.applicantName = event.target.value));
	}
	return <input value={applicantName} name="applicant-name" />
}
/** Form.tsx */
import {useIContext, withIContext} from 'immer-context';

const Form = (props: any) => {
  const [context, setContext] = useIContext();
  useEffect(() => {
    setContext((draft: any) => void (draft.applicantName = 'Henry'));
	});
	const {formName} = context;
  return (
    <div>
      <h4>Form Name - {formName}</h4>
      <Input />
    </div>
  );
};
const initialState = {
	formName: 'Cool Form'
};
export const ContextParent = connect((state) => state)(
  withIContext(Form, initialState)
);
```
