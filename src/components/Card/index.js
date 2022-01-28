import React, { useState } from 'react'

import { Icons } from '../../assets'
import './Card.scss'

function Card({ header, username, name, description, followers, hobbies, profilePicture }) {
    const onClick = () => console.log("Clicked!");
    const [isFollow, setFollowed] = useState(false);
    const onClickFollow = () => setFollowed(!isFollow);

    return (
        <div className="card">
            <img src={header} alt='card-header-pict' className="card__header__picture" />

            <div className="card__header">
                <img src={Icons.InfoIcon} alt='more-info' className="card__header__icon" onClick={onClick} />

                <div className="card__profile">
                    <img src={profilePicture} alt="profile" className="card__header__profile" />
                    <button className={isFollow ? "secondary" : "primary"} onClick={onClickFollow}><img src={isFollow ? Icons.Check : Icons.PersonAdd} alt="person-add" /> {isFollow ? "Following" : "Follow"}</button>
                </div>
            </div>

            <div className="card__body">
                <div className="card__username">
                    <h4>{name}</h4>
                    <p className="text-muted">{username}</p>
                </div>

                <div className="card__description">
                    <p>{description}</p>
                </div>

                <div className="card__tags">
                    <p><b>{followers}</b> Followers</p>
                    <div className="ellipse"></div>
                    <p>{hobbies}</p>
                </div>
            </div>

            <div className="card__footer">
                <img src={Icons.Facebook} alt="facebook" onClick={onClick} />
                <img src={Icons.Twitter} alt="twitter" onClick={onClick} />
                <img src={Icons.Instagram} alt="instagram" onClick={onClick} />
                <img src={Icons.Youtube} alt="youtube" onClick={onClick} />
                <img src={Icons.LinkIcon} alt="link" onClick={onClick} />
            </div>
        </div>
    )
}

export default Card
