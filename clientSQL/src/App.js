import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TablesIndex from './modules/table/components/index.component';
import TablesView from './modules/table/components/view.component';
import TablesEdit from './modules/table/components/edit.component';
import MenusIndex from './modules/menu/components/index.component';
import MenusView from './modules/menu/components/view.component';
import MenusEdit from './modules/menu/components/edit.component';
import CustomersIndex from './modules/diners/components/index.component';
import CustomersView from './modules/diners/components/view.component';
import CustomersEdit from './modules/diners/components/edit.component';
import MenusIreservationndex from './modules/diners/components/reservation.component';
import NaveMenu from './defultComponent/naveber';
import MenusIndexMini from './modules/menu/components/indexMini.component';
import CustomersIndexMini from './modules/diners/components/indexMini.component';
import TableIndexMini from './modules/table/components/indexMini.component';
import HomeIndexMini from './modules/home/components/indexMini.component';
import ReservationMini from './modules/diners/components/reservationMini.component';
import Modal from './defultComponent/modal';

class App extends React.Component {
  constructor(props, state) {
    super(props);
    // console.log("====", props, state);
  }
  render() {
    return (
      <BrowserRouter>
        <div id="body">
          {/* <Modal show={true}>
          <div class="modal-content">
                <h2> שולחן</h2>
                <p>{"responsServer"}</p>
                <button class="close" onClick={() => console.log("sassasasasasasas")}>
                    אישור
                </button>

            </div>
          </Modal> */}

          <div class="img"></div>
          <div class="main">
            <NaveMenu location={window.location.href} />
            <div class="navbarMenu">
              <div class="miniNavbar">
                <Routes>
                  {/* home */}
                  <Route path='/' element={<HomeIndexMini />} />

                  {/* menus */}
                  <Route path='/menu/' element={<MenusIndexMini />} />
                  <Route path='/menu/:category' element={<MenusIndexMini />} />
                  <Route path='/menu/:category/:id' element={<MenusIndexMini />} />
                  <Route path='/menu/add' element={<MenusIndexMini />} />

                  {/* customers */}
                  <Route path='/diners/' element={<CustomersIndexMini />} />

                  {/* customers tobeSitted */}

                  <Route path='/diners/tobesited/' element={<CustomersIndexMini />} />
                  <Route path='/diners/tobesited/:name' element={<CustomersIndexMini />} />
                  <Route path='/diners/tobesited/add' element={<CustomersIndexMini />} />

                  <Route path='/diners/sit/' element={<CustomersIndexMini />} />
                  <Route path='/diners/sit/:name' element={<CustomersIndexMini />} />

                  <Route path='/diners/awaitingBill/' element={<CustomersIndexMini />} />
                  <Route path='/diners/awaitingBill/:name' element={<CustomersIndexMini />} />

                  {/* reservation */}
                  <Route path='/diners/sit/:GroupSeqNo/reservation' element={<ReservationMini />} />

                  {/* tables */}
                  <Route path='/tables/' element={<TableIndexMini />} />
                  <Route path='/tables/:id' element={<TableIndexMini />} />
                  <Route path='/tables/add' element={<TableIndexMini />} />
                </Routes>
              </div>
              <div class="menu">
                <Routes>

                  {/* Home */}
                  <Route path='/' />

                  {/* menus */}
                  <Route path='/menu/' element={<MenusIndex />} />
                  <Route path='/menu/:category' element={<MenusIndex />} />
                  <Route path='/menu/:category/:id' element={<MenusView />} />
                  <Route path='/menu/add' element={<MenusEdit />} />

                  {/* tables */}
                  <Route path='/tables/' element={<TablesIndex />} />
                  <Route path='/tables/:id' element={<TablesView />} />
                  <Route path='/tables/add' element={<TablesEdit />} />

                  {/* customers */}
                  <Route path='/diners/' element={<CustomersIndex />} />

                  {/* customers tobeSitted */}

                  <Route path='/diners/tobesited/' element={<CustomersIndex />} />
                  <Route path='/diners/tobesited/:name' element={<CustomersView />} />
                  <Route path='/diners/tobesited/add' element={<CustomersEdit />} />

                  <Route path='/diners/sit/' element={<CustomersIndex />} />
                  <Route path='/diners/sit/:name' element={<CustomersView />} />

                  <Route path='/diners/awaitingBill/' element={<CustomersIndex />} />
                  <Route path='/diners/awaitingBill/:name' element={<CustomersView />} />

                  {/* reservation */}
                  <Route path='/diners/sit/:GroupSeqNo/reservation' element={<MenusIreservationndex />} />

                </Routes>
              </div>
            </div>
          </div>
        </div>

      </BrowserRouter>
    )
  }
}

export default App;

