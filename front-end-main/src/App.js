// src/App.js
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleTaskAdded = () => {
    setRefreshKey(prev => prev + 1); // force refresh TaskList
  };

  return (
    <div>
      <h1>Gestionnaire de Tâches</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList key={refreshKey} />
    </div>
  );
};

export default App;
