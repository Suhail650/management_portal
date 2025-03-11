import React from 'react'
import Sidebar from '../../components/Layout/Sidebar'

const InstitutionStudents = () => {
    return (
        <div>
            <div className="row position-fixed" style={{ width: "100vw" }}>
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div>
                    <h1>institution</h1>
                </div>
            </div>
        </div>
    )
}

export default InstitutionStudents