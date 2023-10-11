import Container from 'react-bootstrap/Container';
import { Header } from '../Header/Header';
import { TaskList } from '../TaskList/TaskList';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { Footer } from '../Footer/Footer';
import './App.scss';

export const App = () => {
  return(
    <Container>
      <div className="wrapper">
        <Header />
        <main className="content pb-5 pt-5">
          <TaskList />
          <AddTaskBtn />
        </main>
        <footer className='footer'>
          <Footer />
        </footer>
      </div>
    </Container>
  )
}