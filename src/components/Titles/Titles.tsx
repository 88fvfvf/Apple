import React from "react"

interface ITitles {
    title?: string
    paddingTop?: number
}

const Titles: React.FC<ITitles> = ({ title, paddingTop }) => {
    return (
        <h1 style={{ textAlign: 'center', paddingTop }}>
            {title}
        </h1>
    )
}

export default Titles