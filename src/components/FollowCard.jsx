import { useState } from "react"
import "./../index.css"

export function FollowCard({userName, user, InitiaisFollow}){
    
    const [isFollow , setIsFollowning] = useState(InitiaisFollow)

    const text = isFollow ? 'Siguiendo' : 'Seguir'
    const buttonClassName =  isFollow ? 'tw-follow-card-info-button is-follow' : 'tw-follow-card-info-button'

    const handleClick = () =>{
        setIsFollowning(!isFollow)
    }

    const AddAt = (user) => `@${user}`
    const imageUser = `https://unavatar.io/twitter/${userName}`

    return(
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                className='tw-follow-card-avatar'
                src={imageUser} alt="Imagen de perfil" />
                <div className='tw-follow-card-info'>
                    <strong>{user}</strong>
                    <span className='tw-follow-card-info-user'>{AddAt(userName)}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>{text}</button>
            </aside>
        </article>
    )
}