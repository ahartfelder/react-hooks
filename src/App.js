import './App.css';
import ClassCounterOne from './components/Effect/ClassCounterOne';
import ClassMouse from './components/Effect/ClassMouse';
import HookCounterOne from './components/Effect/HookCounterOne';
import HookMouse from './components/Effect/HookMouse';
import IntervalClassCounter from './components/Effect/IntervalClassCounter';
import IntervalHookCounter from './components/Effect/IntervalHookCounter';
import MouseContainer from './components/Effect/MouseContainer';
import ClassCounter from './components/State/ClassCounter';
import HookCounter from './components/State/HookCounter';
import HookCounterFour from './components/State/HookCounterFout';
import HookCounterThree from './components/State/HookCounterThree';
import HookCounterTwo from './components/State/HookCounterTwo';

function App() {
  return (
    <div className='App'>
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
