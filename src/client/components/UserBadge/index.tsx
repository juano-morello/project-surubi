import React from 'react'

interface UserBadgeProps {
    email?: string
}

const UserBadge: React.FC<UserBadgeProps> = ({email}: UserBadgeProps) => {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="userBadgeDropdownMenuButton"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="userBadgeDropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </>
    )
}

export default UserBadge