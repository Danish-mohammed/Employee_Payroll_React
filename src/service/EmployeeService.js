import axios from "axios";

class EmployeeService{

    addEmployee(data){
        return axios.post("http://localhost:8082/user/add",data)
    }

    getAllEmployees(){
        return axios.get("http://localhost:8082/user/")
    }

    getEmployee(id){
        return axios.get(`http://localhost:8082/user/${id}`)
    }

    updateEmployee(id,data){
        return axios.put(`http://localhost:8082/user/${id}`,data)
    }

}

export default new EmployeeService();