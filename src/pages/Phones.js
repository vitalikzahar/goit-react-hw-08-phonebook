// import { useEffect } from 'react';
// import {
//   useDispatch,
//   // useSelector
// } from 'react-redux';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Phones() {
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  //   useEffect(() => {
  //     dispatch(fetchTasks());
  //   }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <PhoneBook />
      {/* <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList /> */}
    </>
  );
}
