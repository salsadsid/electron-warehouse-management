import React, { useEffect, useState } from 'react';

const useInventoryDetail = (itemId) => {
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://protected-river-63833.herokuapp.com/item/${itemId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])

    return [item]
};

export default useInventoryDetail;