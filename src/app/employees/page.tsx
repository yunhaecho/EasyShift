"use client"

import { useState } from "react"
import EmInfoModal from "./components/Modal";

export default function EmployeeInfo () {
    const [showModal, setShowModal] = useState(false);
    
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    return  (
        <>
        {showModal && <EmInfoModal onClose={closeModal}/>}
            <div>
                <button onClick={openModal}>모달창</button>
            </div>
            </>
    )
}