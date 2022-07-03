import dateFormat, { masks } from "dateformat";
import { Component } from "react";

class Detail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
            detail: null
        }
    }
    getDetail(staff){
        this.setState({
            detail: staff
        })
    }
    detail(){
        if(this.state.detail){
            return(
                <div>
                <p>Họ và tên: { this.state.detail.name }</p>
                <p>Ngày sinh: { dateFormat(this.state.detail.doB, "dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: { dateFormat(this.state.detail.startDate, "dd/mm/yyyy") }</p>
                <p>Phòng ban: { this.state.detail.department }</p>
                <p>Số ngày nghỉ còn lại: {this.state.detail.annualLeave}</p>
                <p>Số ngày đã làm thêm: {this.state.detail.overTime}</p>
            </div>
            )
        }
    }
}
export default Detail;