import { BrowserRouter,Route,Switch, Redirect } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import './App.css'

//pages and component
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Class from './pages/class/Class'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
//import Quiz from './pages/proposalsubmissions/Quiz'
import TeacherQuiz from './pages/proposalsubmissions/TeacherQuiz'
import Attendance from './pages/attendance/Attendance'

import GrantApplications from './pages/class/GrantApplications';
import ProposalSumbissions from './pages/proposal/ProposalSubmissions';
import ApprovedApplication from './pages/approved/ApprovedApplications';

import PageClassStud from './pages/class/PageClassStud';
import CreateQuiz from './pages/proposalsubmissions/CreateQuiz';
import ProjectImplementation from './pages/implimentations/ProjectImplementation';

import ClassListTcr from './components/ClassListTcr';
import PageClassTcr from './pages/class/PageClassTcr';
import ToQuiz from './pages/proposalsubmissions/ToQuiz';


function App() {

  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>



        {user && <Sidebar />}
          <div className="container">
          <Navbar/>
            <Switch>

              <Route exact path="/">
              {user && <Redirect to ="/grant-applications" />}
              </Route>

            
              <Route exact path="/">
              {!user && <Redirect to ="/login" />}
              </Route>

              <Route exact path="/grant-applications">
              {!user && <Redirect to ="/login" />}
              {user && <GrantApplications />}
              </Route>

              <Route exact path='/proposal-submissions'>
              {!user && <Redirect to ="/login" />}
              {user && <ProposalSumbissions />}
              </Route>

              <Route exact path='/project-implimentation'>
              {!user && <Redirect to ="/login" />}
              {user && <ProjectImplementation />}
              </Route>

              <Route exact path='/approved-application'>
              {!user && <Redirect to ="/login" />}
              {user && <ProjectImplementation />}
              </Route>

              <Route exact path='/'>
              {user && <Redirect to ="/grant-applications" />}
              </Route>

              <Route path='/to-quiz'>
                {!user && <Redirect to ="/login" />}
                {user && <ToQuiz />}
              </Route>
              
              <Route path='/class'>
                {!user && <Redirect to ="/login" />}
                {user && <Class />}
              </Route>

              <Route exact path='/login'>
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>

              <Route exact path='/signup'>
                {user && <Redirect to="/" />}
                {!user && <Signup/>}
              </Route>

              <Route path='/tcrquiz'>
                {!user && <Redirect to ="/login" />}
                {user && <TeacherQuiz/>}
              </Route>

              <Route path='/attendance'>
                {!user && <Redirect to='/login'/>}
                {user && <Attendance />}
              </Route>

              <Route path='/GrantApplications'>
                {!user && <Redirect to='/login'/>}
                {user && <GrantApplications/>}
              </Route>

              <Route path="/class-list/:id">
                {!user && <Redirect to='/login'/>}
                {user && <PageClassStud />}
              </Route>

              <Route path="/class-list-tcr/:id">
                {!user && <Redirect to='/login'/>}
                {user && <PageClassTcr />}
              </Route>

              <Route path="/create-quiz">
                {!user && <Redirect to='/login'/>}
                {user && <CreateQuiz />}
              </Route>

              <Route exact path="/" component={Dashboard} />
              <Route path="/class" component={Class} />
              <Route path="/tcrquiz" component={TeacherQuiz} />
              <Route path="/attendance" component={Attendance} />

              <Route path="/grant-applications" component={GrantApplications} />
              <Route path="/proposal-submissions" component={ProposalSumbissions} />
              <Route path="/project-implementations" component={GrantApplications} />
              <Route path="/approved-applications" component={ProposalSumbissions} />

              <Route path="/class-list/:id" component={PageClassStud} />
              <Route path="/create-quiz" component={CreateQuiz} />
              <Route path='/class-list-tcr/:id' component={ClassListTcr}/>
              <Route path='/to-quiz' component={ToQuiz}/>
            </Switch>
          </div>
          {/* <div>{user && <OnlineUser/>}</div>*/}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App