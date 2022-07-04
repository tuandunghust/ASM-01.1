
import './App.css';
import StaffList from './components/StaffList';
import { STAFFS } from './data/Staff';
// import Option from './components/Option';
function App() {
  let elements = STAFFS.map((staff) => {
    return <StaffList
      key={staff.id}
      name={staff.name}
      age={staff.doB}
      startDate={staff.startDate}
      department={staff.department}
      annualLeave={staff.annualLeave}
      overTime={staff.overTime}
      image={staff.image}>

    </StaffList>
  })
  return (
    <div>
      <header>
        Ứng dụng quản lý nhân sự v1.0
      </header>
      <form>
        <label>Tùy chọn hiển thị theo cột</label>
        <select>
          <option>3</option>
          <option>4</option>

        </select>
        
      </form>
      <div className="container-fluid">
        <div className="row">
        {elements}
        </div>
      </div>
    </div>
  );
}

export default App;
