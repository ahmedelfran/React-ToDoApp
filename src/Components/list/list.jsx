import React from 'react';


const List = (props) => {
    const {items , deleteItem} = props;
    let length = items.length;
    const listItema = length ? (
        items.map(item => {
            return (
                <div key={item.id}>
                    <span className='name'>{item.name}</span>
                    <span className='age'>{item.age}</span>
                    <span className='action icon' onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (<p>Ther is no item to show</p>)
    return (
        <>
            <div className='listItems'>
                <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>
                </div>
                {listItema}
            </div>
        </>
    );
}

export default List;
