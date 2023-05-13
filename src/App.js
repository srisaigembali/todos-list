import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    console.log("I'm on delete", todo);
    // Deleting this way doesn't work in react
    /**
     let index = todos.indexOf(todo);
    todos.splice(index, 1); */

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log('I am adding this todo ', title, desc);
    let sno = 1;
    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
