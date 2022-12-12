import axios from "axios";
import { toast } from "react-toastify";

let options = {
    baseURL: "https://kenziehub.herokuapp.com/",
    timeout: 5000,
    headers: {}
}

const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com/",
    timeout: 5000,
})

const addTechApi = async (formData) => {
    options.headers.Authorization = `Bearer ${localStorage.getItem("@TOKEN")}`
    try {
        const responseAdd = await api.post("users/techs", formData, options)
        toast(responseAdd.data.message)
        return responseAdd
    } catch (error) {
        console.error(error.message)
    }
}

const deleteTech = async (techId) => {
    options.headers.Authorization = `Bearer ${localStorage.getItem("@TOKEN")}`
    try {
        const responseDelete = await api.delete(`users/techs/${techId}`, options)
        toast.success(responseDelete.data.message)
        return responseDelete
    } catch (error) {
        console.error(error.message)
    }
}

const editTechApi = async (selectedTech, formData) => {
    options.headers.Authorization = `Bearer ${localStorage.getItem("@TOKEN")}`
    try {
        const responseEdit = await axios.put(`users/techs/${selectedTech.id}`, {status: formData}, options)
        toast.success(responseEdit.data.message)
        return responseEdit
    } catch (error) {
        console.error(error.message)
    }
}

export {
    api,
    addTechApi,
    deleteTech,
    editTechApi,
}