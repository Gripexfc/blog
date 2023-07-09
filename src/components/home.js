import React, { createContext, useState, useEffect, useContext } from 'react';

// 创建一个上下文
const KeepAliveContext = createContext();

// KeepAliveProvider 组件，用于提供状态和生命周期控制
function KeepAliveProvider({ children }) {
  const [aliveComponent, setAliveComponent] = useState(null);

  const keepAlive = (component) => {
    setAliveComponent(component);
  };

  const releaseAlive = () => {
    setAliveComponent(null);
  };

  useEffect(() => {
    return () => {
      setAliveComponent(null);
    };
  }, []);

  return (
    <KeepAliveContext.Provider value={{ keepAlive, releaseAlive }}>
      {children}
      {aliveComponent && <aliveComponent />}
    </KeepAliveContext.Provider>
  );
}

// keepAlive 高阶组件 (Higher-Order Component)，用于包裹需要保持活动状态的组件
export function keepAlive(Component) {
  return function KeepAliveComponent(props) {
    const { keepAlive, releaseAlive } = useContext(KeepAliveContext);

    useEffect(() => {
      keepAlive(Component);

      return () => {
        releaseAlive();
      };
    }, [keepAlive, releaseAlive]);

    return <Component {...props} />;
  };
}

// 使用示例
function ComponentA() {
  return <div>Component A</div>;
}

function ComponentB() {
  return <div>Component B</div>;
}

const KeepAliveComponentA = keepAlive(ComponentA);
const KeepAliveComponentB = keepAlive(ComponentB);

function App() {
  const [showComponentA, setShowComponentA] = useState(true);

  const toggleComponent = () => {
    setShowComponentA((prev) => !prev);
  };

  return (
    <KeepAliveProvider>
      <div>
        <button onClick={toggleComponent}>Toggle Component</button>
        {showComponentA ? <KeepAliveComponentA /> : <KeepAliveComponentB />}
      </div>
    </KeepAliveProvider>
  );
}

export default App;
