import React from 'react';
// import Countdown from 'react-countdown-now';
// import Sidebar from "react-sidebar";
// import MenuBar from './images/icons8-menu-30.png';
import Home from './Home';
import './App.css';



export default () => {
  return <Home name="Alligator" />;
};
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       sidebarOpen: true
//     }
//     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
//   }
//   onSetSidebarOpen(open) {
//     this.setState({ sidebarOpen: open });
//   }
//   render(props){
//     const sideBarButton = this.state.sidebarOpen ? 'opened' : 'closed';
//   return (
//     <div>

//     <Sidebar
//     sidebar={<div className='side-bar'></div>}
//     open={this.state.sidebarOpen}
//     onSetOpen={this.onSetSidebarOpen}
//     styles={{ sidebar: { background: "white" } }}
//     >
//     <button className={sideBarButton} onClick={() => this.onSetSidebarOpen(true)}>
//         <img className='menu-bar' src={MenuBar} alt='menu-icon' />
//     </button>
//   </Sidebar>
//     <div className="App">
//       <Countdown date={Date.now() + 50001} />
//     </div>
//     </div>
// );
// }
// }
// export default App;
