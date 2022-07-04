import { Component } from "react";
import dateFormat, { masks } from "dateformat";
class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: true,
            detail: null
        }
    }
    onAdd = () => {
        if (this.state.check) {

            this.setState({
                detail: this.props,
                check: false
            })

        } else {
            this.setState({
                detail: null,
                check: true
            })

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
                {this.state.detail && (<div className="col-12 col-md-12 col-lg-12">
                    <p>Họ và tên: {this.state.detail.name}</p>
                    <p>Ngày sinh: {dateFormat(this.state.detail.age, "dd/mm/yyyy")}</p>
                    <p>Ngày vào công ty: {dateFormat(this.state.detail.startDate, "dd/mm/yyyy")}</p>
                    <p>Phòng ban: {this.state.detail.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {this.state.detail.annualLeave}</p>
                    <p>Số ngày đã làm thêm: {this.state.detail.overTime}</p>
                </div>)}
            </>

        )
    }
}
export default StaffList;