import { createResource, createSignal } from "solid-js"

const fetchItemData = async (name: string) => {
    return await fetch("https://genshin-app-api.herokuapp.com/api/enemydrops/info/Heavy%20Horn", { 
        method: "GET" 
    }).then(res => res.json())
}

const ItemPage = () => {
    const [ itemName, setItemName ] = createSignal("hallo")
    const [ itemData, {} ] = createResource(itemName, fetchItemData)
    
    return (
        <pre>
            { itemData() }
        </pre>
    )
}

export default ItemPage