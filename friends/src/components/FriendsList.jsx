import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getFriends } from '../actions'
import Friend from './Friend'
import AddFriendForm from './AddFriendForm'

const FriendsList = (props) => {
    const { data, getFriends } = props

    useEffect(() => {
        getFriends()
    }, [getFriends])

    return (
        <div>
            <AddFriendForm/>
            {data.map(friend => (
                <Friend
                    key={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { data: state.friendReducer.friendData }
}
export default connect(mapStateToProps, { getFriends })(FriendsList)