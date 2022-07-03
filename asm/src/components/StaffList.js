import { Component } from "react";

import dateFormat, { masks } from "dateformat";
var  check = true;
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = null
    }
    onAdd = () => {
        if(check){
            this.setState(this.props)
            check = false
        }else {
            this.state = null
        }
      

    }
    render() {
        return (

            <>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card" >
                        <img alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <a className="btn btn-primary" onClick={this.onAdd}>Xem chi tiết</a>
                        </div>
                    </div>
                </div>
                {this.state  && (<div className="col-12 col-md-12 col-lg-12">
                    <p>Họ và tên: {this.state.name}</p>
                    <p>Ngày sinh: {dateFormat(this.state.age, "dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(this.state.startDate, "dd/mm/yyyy")}</p>
                    <p>Phòng ban: {this.state.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {this.state.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {this.state.overTime}</p>
                </div>)}
            </>

        )
    }
}
export default StaffList;