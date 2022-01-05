import axios from 'axios'

const EMPLOYE_API_BASE_URL  = "http://localhost:8084/api/v1/employes";

class EmployeServices{

    getEmployes(){
        return axios.get(EMPLOYE_API_BASE_URL);
    }
    createEmployes(employe){
        return axios.post(EMPLOYE_API_BASE_URL,employe)
    }
    
    getEmployesById(employeId){
        return axios.delete(EMPLOYE_API_BASE_URL + "/" + employeId );
    }

    deleteEmployesById(employeId){
        return axios.delete(EMPLOYE_API_BASE_URL + '/' + employeId );
    }
}

export default new  EmployeServices()
