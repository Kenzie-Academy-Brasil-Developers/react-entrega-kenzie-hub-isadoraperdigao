import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { addTechApi, deleteTech, editTechApi } from "../api/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

export const TechProvider = ({children}) => {
    const {user} = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [techsList, setTechsList] = useState([])
    const [selectedTech, setSelectedTech] = useState(null)

    useEffect(() => {
        if(user) {
            setTechsList(user.techs)
        }
    }, [user])

    const closeModal = () => {
        setShowModal(false)
    }

    const openModal = () => {
        setShowModal(true)
    }

    const openEditModal = (tech) => {
        setSelectedTech(tech)
        setShowEditModal(true)
    }

    const closeEditModal = () => {
        setShowEditModal(false)
    }

    const addTechToList = async (formData) => {
        const addTechToApiResponse = await addTechApi(formData)
        const {title, status} = addTechToApiResponse.data
        const newTech = {
            title: title,
            status: status,
        }

        setTechsList([...techsList, newTech])
        closeModal()
        
    }

    const removeTechFromList = (id) => {
        
        const filteredTechsList = techsList.filter(tech => {
            return tech.id !== id
        })
        
        deleteTech(id)
        setTechsList(filteredTechsList)
        closeEditModal()
    }

    const editTech = async (formData) => {
        editTechApi( selectedTech, formData.status)
        
        const newTechList = techsList.map(tech => {
            if (tech.id === selectedTech.id) {
                tech.status = formData.status
            }
            return tech
        })

        setTechsList(newTechList)

        closeEditModal()
    }

    return (
        <TechContext.Provider value={{
            showModal,
            closeModal, 
            openModal,
            addTechToList,
            techsList,
            removeTechFromList,
            openEditModal,
            closeEditModal,
            showEditModal,
            selectedTech,
            editTech
            }}
        >
            {children}
        </TechContext.Provider>
    )
}