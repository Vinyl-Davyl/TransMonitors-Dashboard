import './App.css';
import './css/bootstrap.min.css';
import './fonts/icomoon/style.css';
import search from './image/search.svg';
import bell from './image/bell-53.svg';
import mask from './image/mask-group.svg';
import chart from './image/small-chart.svg';
import graph from './image/big-grapgh@1x.svg';
import icon1 from './image/group.svg';
import icon2 from './image/wallet-43.svg';
import icon3 from './image/wallet-43 (1).svg';
import icon4 from './image/wallet-43 (2).svg';

import icon5 from './image/Group 7.svg';
import icon6 from './image/Group 7.1.svg';
import icon7 from './image/Group 7.2.svg';
import icon8 from './image/ic_fiber_manual_record_48px.svg';
import icon9 from './image/single-01 2.svg';

import DataTable from 'react-data-table-component';

import $ from 'jquery';
const menuData = ()=>{
    $('.nav-list').slideToggle('slow');
    $('.closer').slideToggle('slow');
}
function App() {
  return (
    <div className="App">
      <div className="top-menu">
      <h1 className="title">
        TransMonitor
      </h1>
      <form method='POST'>
      <input type="text" placeholder='Search...'/>
      <img className="icon-search" src={search} />
      </form>
      
      <a href="#" className="supportsegoeui-regular-normal-pale-sky-14px">
        Support
      </a>
      <a href="#"  className="logout-1segoeui-regular-normal-pale-sky-14px">
        FAQ
      </a>
      <div className="flex">
      
      <div className="overlap-group1">
        <img className="icon-notifications" src={bell} />
        <div className="ellipse"></div>
      </div>
      <div className="overlap-group">
        <div className="hellovalign-text-bottomsegoeui-regular-normal-pale-sky-10px">
          <span>
            <span className="segoeui-regular-normal-pale-sky-10px">Hello</span>
          </span>
        </div>
        <div className="oluwaleke-ojovalign-text-bottomsegoeui-regular-normal-pale-sky-14px">
          Oluwaleke Ojo
        </div>
      </div>
      <img className="mask-group" src={mask} />
    </div>
      </div>

      <div className='aside-bar'>
      <br/>
      <div>
      <button> GENERATE INVOICE </button>
      </div>
      <div>
        <small>Main</small>
        <ul>
          <li className='active'><img src={icon1}></img> <small>Overview</small></li>
        </ul>
      </div>
      <div>
        <small>Payments</small>
        <ul>
          <li><img src={icon2}></img> <small>All Payments</small></li>
          <li><img src={icon3}></img> <small>Reconcilled Payments</small></li>
          <li><img src={icon4}></img> <small>Un - Reconcilled Payments</small></li>
          <li><img src={icon8}></img> <small>Manual Settlement</small></li>
        </ul>
      </div>
      <div>
        <small>Orders</small>
        <ul>
          <li><img src={icon5}></img> <small>All Orders</small></li>
          <li><img src={icon6}></img> <small>Pending Orders</small></li>
          <li><img src={icon7}></img> <small>Reconcilled Orders</small></li>
          <li><img src={icon9}></img> <small>Merchant Profile</small></li>
        </ul>
      </div>
      </div>
      <main>
        
        <div className='container-fluid' style={{marginTop:70}}>
            <div className='row pt-30 m-0'>
              <Stats dailyTransactionVolume="Daily Transaction Volume" text1="₦2,342" />
              <Stats dailyTransactionVolume="Daily Transaction Value" text1="₦4,000,000" />
              <Stats dailyTransactionVolume="Total Transaction Volume" text1="₦40,342" />
              <Stats dailyTransactionVolume="Total Transaction Value" text1="₦4,000,000" />
            </div>
        </div>
        <div className='container-fluid'>
            <div className='row pt-30 m-0 bbb'>
              <div className='col-md-7'>
                <div className='flex jj'>
                    <h5>Today: 5, Aug 2018</h5>
                    <form method='POST'>
                <select class="form-select" aria-label="Default select example">
                  <option selected>1 Jan - 1 Jun</option>
                  <option value="1">1 Jan - 1 Jun</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                </form>
                  <div className='wrapper-demo'>
                    <i className='icon-chevron-left'></i>
                    <i className='icon-chevron-right'></i>
                  </div>
                </div>
                <img src={graph}  className="img"></img>
              </div>
              <div className='col-md-5'>
              <div className='card2 grid'>
                <b>Orders</b>
                <div className='green'>
                  <div className='red'></div>
                </div>
                <div className='grid'>
                <div className="people-1segoeui-regular-normal-white-14px">
                  <span className="segoeui-regular-normal-shark-14px">Pending Orders: </span>
                  <span className="segoeui-bold-gold-tips-14px">20</span>
                </div>
                <div className="people-2segoeui-regular-normal-white-14px">
                  <span className="segoeui-regular-normal-shark-14px">Reconcilled Orders: </span>
                  <span className="segoeui-bold-chateau-green-14px">80</span>
                </div>
                <div className="people-3segoeui-regular-normal-white-14px">
                  <span className="segoeui-regular-normal-shark-14px">Total Orders: </span>
                  <span className="segoeui-bold-navy-blue-14px">100</span>
                </div>
                </div>
                </div>
                <div className='card2 grid'>
                <b>Payments</b>
                <div className='green'>
                  <div className='red'></div>
                </div>
                <div className='grid'>
                <div className="people-1segoeui-regular-normal-white-14px">
                  <span className="segoeui-regular-normal-shark-14px">Un-reconcilled Payments: </span>
                  <span className="segoeui-bold-gold-tips-14px">20</span>
                </div>
                <div className="people-2segoeui-regular-normal-white-14px">
                  <span className="segoeui-regular-normal-shark-14px">Reconcilled Payments: </span>
                  <span className="segoeui-bold-chateau-green-14px">80</span>
                </div>
                <div className="people-3segoeui-regular-normal-white-14px">
                  <span className="segoeui-regular-normal-shark-14px">Total Payments: </span>
                  <span className="segoeui-bold-navy-blue-14px">100</span>
                </div>
                </div>
                </div>
              </div>
            </div>
        </div>
        <div className='container-fluid'>
          <br></br>
            <h2>Payments</h2>
          <div className='row flex dd'>
          <form method='POST'>
          <input type="text" placeholder='Search...'/>
          <img className="icon-search" src={search} />
          </form>
          <form method='POST'>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </form>

          </div>
          <div>
          <DataTable columns={columns} data={data} pagination />
          </div>
        </div>
      </main>
    </div>
  );
}

const columns = [
  {
      name: 'Item Type',
      selector: row => row.name,
      sortable: true
  },
  {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
  },
  {
    name: 'Transaction',
    selector: row => row.transaction,
    sortable: true,
},
{
  name: 'Time',
  selector: row => row.time,
  sortable: true,
},
{
  name: 'Status',
  selector: row => row.status,
  sortable: true,
  right: true,
  style:{
    color:'green',
    fontWeight:600,
  }
}
];

const data = [
  {
      id: 1,
      name: 'Apple Mac Book 15” 250 SSD 12GB',
      price: '2000',
      transaction: '1234567890',
      time:'12:30',
      status:'Pending'
  },
  {
    id: 2,
    name: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '2000',
    transaction: '1234567890',
    time:'12:30',
    status:'Pending'
},
{
  id: 3,
  name: 'Apple Mac Book 15” 250 SSD 12GB',
  price: '2000',
  transaction: '1234567890',
  time:'12:30',
  status:'Pending'
},
{
  id: 4,
  name: 'Apple Mac Book 15” 250 SSD 12GB',
  price: '2000',
  transaction: '1234567890',
  time:'12:30',
  status:'Pending'
},
{
  id: 5,
  name: 'Apple Mac Book 15” 250 SSD 12GB',
  price: '2000',
  transaction: '1234567890',
  time:'12:30',
  status:'Pending'
},
{
  id: 6,
  name: 'Apple Mac Book 15” 250 SSD 12GB',
  price: '2000',
  transaction: '1234567890',
  time:'12:30',
  status:'Pending'
},
{
  id: 7,
  name: 'Apple Mac Book 15” 250 SSD 12GB',
  price: '2000',
  transaction: '1234567890',
  time:'12:30',
  status:'Pending'
},
{
  id: 8,
  name: 'Apple Mac Book 15” 250 SSD 12GB',
  price: '2000',
  transaction: '1234567890',
  time:'12:30',
  status:'Pending'
}

]

function Stats(props) {
  const { dailyTransactionVolume, text1 } = props;

  return (
    <div className="col-lg-3 col-md-6 ">
      <div className="col-md-12 col-lg-12 card">
        <div>
        <div>
        <div className="small-text">
          {dailyTransactionVolume}
        </div>
        <div className="price">
          {text1}
        </div>
      </div>
      <img className="small-chart" src={chart} />
        </div>
      </div>
      
    </div>
  );
}
export default App;
